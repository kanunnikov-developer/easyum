'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

export type State = {
	fieldErrors?: { name?: string; phone?: string; email?: string };
	success: boolean;
};

const FormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Имя не должно быть короче 2 символов')
		.regex(/^[A-Za-zА-Яа-яЁё\s'-]+$/, 'Имя должно содержать только буквы')
		.max(150, 'Имя не должно быть длиннее 150 символов'),
	phone: z
		.string()
		.trim()
		.regex(
			/^(?:\+7|8|7)?[\s\-()]*\(?\d{3}\)?[\s\-()]*\d{3}[\s\-()]*\d{2}[\s\-()]*\d{2}$/,
			'Телефон должен соответствовать российскому формату',
		)
		.max(20, 'Телефон должен быть не длиннее 20 символов'),
});

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

export async function action(prevState: State, formData: FormData): Promise<State> {
	const rawName = formData.get('name');
	const rawPhone = formData.get('phone');
	const rawTelegram = formData.get('telegram_nickname');
	const rawConsent = formData.get('pd_consent');
	const rawSms = formData.get('sms_consent');
	const rawNameForm = formData.get('nameForm');
	const rawCity = formData.get('city');
	const rawCourse = formData.get('course');
	const rawUrl = formData.get('url');

	const parsed = FormSchema.safeParse({
		name: typeof rawName === 'string' ? rawName : '',
		phone: typeof rawPhone === 'string' ? rawPhone : '',
	});

	if (!parsed.success) {
		const fieldErrors = parsed.error.flatten().fieldErrors;
		return {
			fieldErrors: {
				name: fieldErrors.name?.[0],
				phone: fieldErrors.phone?.[0],
			},
			success: false,
		};
	}

	const data = {
		Имя: parsed.data.name,
		Телефон: parsed.data.phone,
		'Имя формы': rawNameForm,
		Telegram: rawTelegram,
		Город: rawCity,
		'Согласие на обработку персональных данных': rawConsent == null ? 'Нет' : 'Да',
		'Согласие на рассылку': rawSms == null ? 'Нет' : 'Да',
		'Страница отправки формы': rawUrl,
	};

	const formattedText = Object.entries(data)
		.map(([key, value]) => `${key}: ${value || 'Не указано'}`)
		.join('\n');


	try {
		await transporter.sendMail({
			from: `${rawNameForm}: ${rawCourse} <${process.env.SMTP_USER}>`,
			to: process.env.YOUR_EMAIL,
			subject: `Новая заявка: ${rawCity}`,
			text: formattedText
		});

		return {
			success: true,
			fieldErrors: { name: '', phone: ''},
		};
	} catch (err: any) {
		console.error('Ошибка отправки через Beget SMTP:', err.message || err);
		return {
			success: false,
		};
	}
}
