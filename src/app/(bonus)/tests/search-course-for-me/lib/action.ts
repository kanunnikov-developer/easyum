'use server';

import { z } from 'zod';

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

	console.log('Тест пройден:', {
		Имя: parseResult.data.name,
		Телефон: parseResult.data.phone,
		Тест: 'Выбор курса исходя из потребностей',
	});

	// ── Дальше — бизнес-логика (сохранить, отправить, залогировать) ──

	// TODO: здесь обычно делают одно из:
	// 1. Сохраняют в базу данных (prisma, drizzle, supabase, mongodb и т.д.)
	// 2. Отправляют в CRM / Telegram-бота / email
	// 3. Отправляют в Google Sheets через API
	// 4. Вызывают внешний webhook

	// Пример отправки в Telegram (если у тебя есть бот)
	/*
  try {
    const message = `
Новый лид из квиза IT-профессия!
Имя: ${name}
Телефон: ${phone}
Ответы:
${Object.entries(answers)
  .map(([qId, val]) => `  Вопрос ${qId}: ${val}`)
  .join('\n')}
    `;
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });
  } catch (err) {
    console.error('Ошибка отправки в Telegram:', err);
    // Можно не падать, а просто залогировать
  }
  */

	return {
		success: true,
		error: null,
	};
}
