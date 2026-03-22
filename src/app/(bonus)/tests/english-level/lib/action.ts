// app/tests/action.ts
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import { getResult, questions } from '../lib/questions'; // ← твои вопросы

const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: true,
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASS,
	},
});

// Схема валидации только для финального шага
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

// Тип состояния action
export type TestFormState = {
	error: string | null;
	fieldErrors?: { name?: string; phone?: string };
	success: boolean;
	score?: number;
	result?: string;
};

export async function submitTestForm(prevState: TestFormState, formData: FormData): Promise<TestFormState> {
	// Получаем данные
	const rawName = formData.get('name') as string | null;
	const rawPhone = formData.get('phone') as string | null;
	const answersJson = formData.get('answers') as string | null;

	// Парсим ответы
	let answers: Record<number, string> = {};
	if (answersJson) {
		try {
			answers = JSON.parse(answersJson);
		} catch {
			return { error: 'Некорректный формат ответов', success: false };
		}
	}

	// Валидация
	const parsed = finalStepSchema.safeParse({
		name: typeof rawName === 'string' ? rawName : '',
		phone: typeof rawPhone === 'string' ? rawPhone : '',
	});

	if (!parsed.success) {
		const fieldErrors = parsed.error.flatten().fieldErrors;
		return {
			error: 'Проверьте введённые данные',
			fieldErrors: {
				name: fieldErrors.name?.[0],
				phone: fieldErrors.phone?.[0],
			},
			success: false,
		};
	}

	// Подсчёт баллов
	let totalPoints = 0;
	questions.forEach((q) => {
		const answer = answers[q.id];
		if (answer) {
			totalPoints += (q.points as any)[answer] || 0;
		}
	});

	// Результат (твоя функция)
	const resultText = getResult(totalPoints);

	const data = {
		Имя: parsed.data.name,
		Телефон: parsed.data.phone,
		Результат: totalPoints + ' баллов из ' + questions.length,
		Тест: 'Определить уровень английского языка',
	};

	const formattedText = Object.entries(data)
		.map(([key, value]) => `${key}: ${value || 'Не указано'}`)
		.join('\n');

	try {
		await transporter.sendMail({
			from: `Тест по английскому <${process.env.SMTP_USER}>`,
			to: process.env.YOUR_EMAIL,
			subject: `Новый результат теста: ${parsed.data.name}`,
			text: formattedText,
		});

		return {
			error: null,
			success: true,
			score: totalPoints,
			result: resultText,
		};
	} catch (err: any) {
		console.error('Ошибка отправки через Beget SMTP:', err.message || err);
		return { success: false, error: 'Ошибка отправки результата на почту' };
	}
}
