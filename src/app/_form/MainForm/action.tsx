'use server';

import { z } from 'zod';

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
	const rawComment = formData.get('comment');
	const rawConsent = formData.get('pd_consent');
	const rawSms = formData.get('sms_consent');
	const rewNameForm = formData.get('nameForm');

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
		Комментарий: rawComment,
		'Согласие на обработку персональных данных': rawConsent == null ? 'Нет' : 'Да',
		'Согласие на рассылку': rawSms == null ? 'Нет' : 'Да',
		'Имя формы': rewNameForm,
	};

	console.log(data);

	return {
		success: true,
		fieldErrors: {
			name: '',
			phone: '',
		},
	};
}
