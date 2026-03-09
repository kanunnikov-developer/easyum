'use server';

import { z } from 'zod';

const FormSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, 'Укажите имя')
		.regex(/^[A-Za-zА-Яа-яЁё\s'-]+$/, 'Имя должно содержать только буквы')
		.max(30, 'Имя должно быть не длиннее 30 символов'),
	phone: z
		.string()
		.trim()
		.regex(/^\d{10,}$/, 'Телефон должен содержать не менее 10 цифр')
		.max(20, 'Телефон должен быть не длиннее 20 символов'),
	email: z.email('Некорректный email').optional(),
	message: z.string().trim().optional(),
	city: z.string().trim().optional(),
	url: z.string().trim(),
});

export type FormState = {
	error: string | null;
	success: boolean;
};

export async function ActionForm(prevState: FormState, formData: FormData): Promise<FormState> {
	const rawName = formData.get('name');
	const rawPhone = formData.get('phone');
	const rawEmail = formData.get('email');
	const rawCity = formData.get('city');
	const fullUrl = formData.get('url');

	const parsed = FormSchema.safeParse({
		name: typeof rawName === 'string' ? rawName : '',
		phone: typeof rawPhone === 'string' ? rawPhone : '',
		email: typeof rawEmail === 'string' && rawEmail.trim().length > 0 ? rawEmail : undefined,
		city: typeof rawCity === 'string' && rawCity.trim().length > 0 ? rawCity : undefined,
		url: typeof fullUrl === 'string' ? fullUrl : '',
	});

	if (!parsed.success) {
		const fieldErrors = parsed.error.flatten().fieldErrors;
		const message =
			fieldErrors.name?.[0] ??
			fieldErrors.phone?.[0] ??
			fieldErrors.email?.[0] ??
			fieldErrors.message?.[0] ??
			fieldErrors.city?.[0] ??
			fieldErrors.url?.[0] ??
			'Проверьте правильность заполнения формы';

		return {
			error: message,
			success: false,
		};
	}

	const data = parsed.data;

	// TODO: здесь разместите фактическую обработку:
	// - сохранение в базу данных (Prisma)
	// - отправка email / Telegram / CRM и т.п.
	console.log('Gift certificate form data:', data);

	return {
		error: null,
		success: true,
	};
}
