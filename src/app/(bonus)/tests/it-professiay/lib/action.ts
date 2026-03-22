'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

const finalStepSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Имя слишком короткое')
		.max(60, 'Имя слишком длинное')
		.regex(/^[А-Яа-яЁё]+$/, 'Имя может содержать только буквы'),

	phone: z
		.string()
		.trim()
		.min(9, 'Телефон слишком короткий')
		.max(20, 'Телефон слишком длинный')
		.regex(/^[\d\s+()\-–—]{9,20}$/, 'Телефон должен содержать только цифры, пробелы, +, -, скобки'),
});

export type SubmitFormState = {
	success: boolean;
	error: string | null;
	fieldErrors?: {
		name?: string;
		phone?: string;
	};
};

export async function submitTestForm(prevState: SubmitFormState, formData: FormData): Promise<SubmitFormState> {
	// ── Получаем данные ───────────────────────────────
	const rawName = formData.get('name') as string | null;
	const rawPhone = formData.get('phone') as string | null;
	const rawAnswers = formData.get('answers') as string | null;

	// ── Парсим ответы (они приходят как JSON-строка) ──
	let answers: Record<number, string> = {};
	if (rawAnswers) {
		try {
			answers = JSON.parse(rawAnswers);
		} catch (err) {
			return {
				success: false,
				error: 'Некорректный формат ответов',
			};
		}
	}

	// ── Валидация Zod ─────────────────────────────────
	const parseResult = finalStepSchema.safeParse({
		name: rawName ?? '',
		phone: rawPhone ?? '',
	});

	if (!parseResult.success) {
		const fieldErrors = parseResult.error.flatten().fieldErrors;
		return {
			success: false,
			error: 'Проверьте введённые данные',
			fieldErrors: {
				name: fieldErrors.name?.[0],
				phone: fieldErrors.phone?.[0],
			},
		};
	}

	// Здесь данные уже валидны
	const { name, phone } = parseResult.data;

	const message = `Новый результат теста: Какая IT-профессия мне подходит!
		Имя: ${name}
		Телефон: ${phone}
		Ответы:
		${Object.entries(answers)
			.map(([qId, val]) => `Вопрос ${qId}: ${val}`)
			.join('\n')}`;

	try {
		await transporter.sendMail({
			from: `Тест: IT Профессия <${process.env.SMTP_USER}>`,
			to: process.env.YOUR_EMAIL,
			subject: `Новый результат теста: ${name}`,
			text: message,
		});

		return {
			success: true,
			error: null,
		};
	} catch (err: any) {
		console.error('Ошибка отправки через Beget SMTP:', err.message || err);
		return { success: false, error: 'Ошибка отправки результата на почту' };
	}
}
