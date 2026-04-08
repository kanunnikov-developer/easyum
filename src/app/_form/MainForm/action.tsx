'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

export type ActionResult = {
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
		),
	email: z.string().email('Неверный формат email').optional().or(z.literal('')),
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

export async function sendForm(formData: FormData): Promise<ActionResult> {
	const rawName = formData.get('name');
	const rawPhone = formData.get('phone');
	const rawEmail = formData.get('email');
	const rawComment = formData.get('comment');
	const rawCity = formData.get('city');
	const rawPdConsent = formData.get('pd_consent');
	const rawSmsConsent = formData.get('sms_consent');
	const rawUrl = formData.get('url');

	const parsed = FormSchema.safeParse({
		name: typeof rawName === 'string' ? rawName : '',
		phone: typeof rawPhone === 'string' ? rawPhone : '',
		email: typeof rawEmail === 'string' ? rawEmail : '',
	});

	if (!parsed.success) {
		const fieldErrors = parsed.error.flatten().fieldErrors;

		return {
			success: false,
			fieldErrors: {
				name: fieldErrors.name?.[0],
				phone: fieldErrors.phone?.[0],
				email: fieldErrors.email?.[0],
			},
		};
	}

	const data = {
		Имя: parsed.data.name,
		Телефон: parsed.data.phone,
		Email: parsed.data.email,
		Комментарий: typeof rawComment === 'string' ? rawComment : '',
		'Согласие на обработку ПД': rawPdConsent === 'on' ? 'Да' : 'Нет',
		'Согласие на получение СМС': rawSmsConsent === 'on' ? 'Да' : 'Нет',
		'Страница отправки формы': rawUrl,
	}

	const formattedText = Object.entries(data)
	.map(([key, value]) => `${key}: ${value || 'Не указано'}`)
	.join('\n');

	try {
		await transporter.sendMail({
			from: `Главная страница ${rawCity} <${process.env.SMTP_USER}>`,
			to: process.env.YOUR_EMAIL,
			subject: `Новая заявка ${rawCity}`,
			text: formattedText
		});

		return { success: true };
	} catch (e) {
		return { success: false };
	}
}