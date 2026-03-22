'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';


export type State = {
	fieldErrors?: { name?: string; phone?: string; email?: string };
	success: boolean;
};

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

const FormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Имя не должно быть короче 2 символов')
		.regex(/^[A-Za-zА-Яа-яЁё\s'-]+$/, 'Имя должно содержать только буквы')
		.max(30, 'Имя не должно быть длиннее 30 символов'),
	phone: z
		.string()
		.trim()
		.regex(
			/^(?:\+7|8)?[\s\-()]*\(?\d{3}\)?[\s\-()]*\d{3}[\s\-()]*\d{2}[\s\-()]*\d{2}$/,
			'Телефон должен соответствовать российскому формату',
		)
		.max(20, 'Телефон должен быть не длиннее 20 символов'),
	email: z.email('Неверный формат email').optional().or(z.literal('')),
});

export async function action(prevState: State, formData: FormData): Promise<State> {
	const rawName = formData.get('name');
	const rawPhone = formData.get('phone');
	const rawEmail = formData.get('email');
	const rawConsent = formData.get('pd_consent_tBank');
	const rawSms = formData.get('sms_consent_tBank');
	const rewNameForm = formData.get('nameForm');
	const rawCity = formData.get('city');
	const rawCorse = formData.get('course');
	const rawTariff = formData.get('tariff');
	const rawPrice = formData.get('price');
	const rawMounth = formData.get('months');
	const rawPlateg = formData.get('plateg');

	const parsed = FormSchema.safeParse({
		name: typeof rawName === 'string' ? rawName : '',
		phone: typeof rawPhone === 'string' ? rawPhone : '',
		email: rawEmail,
	});

	if (!parsed.success) {
		const fieldErrors = parsed.error.flatten().fieldErrors;
		return {
			fieldErrors: {
				name: fieldErrors.name?.[0],
				phone: fieldErrors.phone?.[0],
				email: fieldErrors.email?.[0],
			},
			success: false,
		};
	}

	const data = {
		Имя: parsed.data.name,
		Телефон: parsed.data.phone,
		Email: rawEmail,
		'Имя формы': rewNameForm,
		Город: rawCity,
		Курс: rawCorse,
		Тариф: rawTariff,
		Цена: rawPrice + ' руб.',
		'Рассрочка на': rawMounth + ' мес',
		'Платеж в месяц': rawPlateg + ' в мес',
		'Согласие на обработку персональных данных': rawConsent == null ? 'Нет' : 'Да',
		'Согласие на рассылку': rawSms == null ? 'Нет' : 'Да',
	};

	const formattedText = Object.entries(data)
		.map(([key, value]) => `${key}: ${value || 'Не указано'}`)
		.join('\n');


	try {
		await transporter.sendMail({
			from: `${rewNameForm} <${process.env.SMTP_USER}>`,
			to: process.env.YOUR_EMAIL,
			subject: `Новая заявка: ${rawCity}`,
			text: formattedText
		});

		return {
			success: true,
			fieldErrors: { name: '', phone: '', email: '' },
		};
	} catch (err: any) {
		console.error('Ошибка отправки через Beget SMTP:', err.message || err);
		return {
			success: false,
		};
	}
}
