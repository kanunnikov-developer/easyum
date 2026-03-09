'use server';

import { z } from 'zod';
import { State } from '../../MainForm/action';

const FormSchema = z.object({
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
	const rawCourse = formData.get('course');
	const rawPhone = formData.get('phone');
	const rawEmail = formData.get('email');
	const rawComment = formData.get('comment');
	const rawConsent = formData.get('pd_consent');
	const rawSms = formData.get('sms_consent');
	const rewNameForm = formData.get('nameForm');
	const rawCity = formData.get('city');

	const parsed = FormSchema.safeParse({
		phone: typeof rawPhone === 'string' ? rawPhone : '',
		email: rawEmail,
	});

	if (!parsed.success) {
		const fieldErrors = parsed.error.flatten().fieldErrors;
		return {
			fieldErrors: {
				phone: fieldErrors.phone?.[0],
				email: fieldErrors.email?.[0],
			},
			success: false,
		};
	}

	const data = {
		Курс: rawCourse,
		'Телефон представителя': parsed.data.phone,
		'Email представителя': rawEmail,
		Комментарий: rawComment,
		'Согласие на обработку персональных данных': rawConsent == null ? 'Нет' : 'Да',
		'Согласие на рассылку': rawSms == null ? 'Нет' : 'Да',
		'Имя формы': rewNameForm,
		Город: rawCity,
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
