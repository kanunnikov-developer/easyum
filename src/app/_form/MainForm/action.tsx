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
		.max(30, 'Имя не должно быть длиннее 30 символов'),
	phone: z
		.string()
		.trim()
		.regex(
			/^(?:\+7|8)?[\s\-()]*\(?\d{3}\)?[\s\-()]*\d{3}[\s\-()]*\d{2}[\s\-()]*\d{2}$/,
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

	try {
		await transporter.sendMail({
			from: `Главная страница <${process.env.SMTP_USER}>`,
			to: process.env.YOUR_EMAIL,
			subject: `Новая заявка`,
			text: `Имя: ${parsed.data.name}\nТелефон: ${parsed.data.phone}`,
		});

		return { success: true };
	} catch (e) {
		return { success: false };
	}
}