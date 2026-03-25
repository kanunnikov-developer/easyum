'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import { generateToken } from './model/generateToken';

export type State = {
	fieldErrors?: { name?: string; phone?: string; email?: string };
	success: boolean;
	paymentUrl?: string;
	error?: string;
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
	// Данные пользователя
	const name = formData.get('name');
	const phone = formData.get('phone');
	const email = formData.get('email');

	// Данные для платжа и почты
	const city = formData.get('city');
	const course = formData.get('course');
	const tariff = formData.get('tariff');
	const price = formData.get('price');
	const methodPay = formData.get('methodPay');
	const TbankMonths = formData.get('tbankMonths');

	// Согласие на обработку данных
	const conset = formData.get('pd_consent');
	const smsConset = formData.get('sms_consent');

	const parsed = FormSchema.safeParse({
		name,
		phone,
		email,
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

	if (methodPay === 'Полная оплата — Банковской картой РФ') {
		const amountRub = Number(price);
		if (!amountRub || amountRub < 10) {
			return { success: false, error: 'Неверная сумма платежа' };
		}

		// Номер заказа
		const orderId = `order_${Date.now()}_${Math.floor(Math.random() * 100000)}`;

		// Нагрузка перед отправкой
		const initPayload = {
			TerminalKey: process.env.TINKOFF_TERMINAL_KEY!,
			Amount: Math.round(amountRub * 100),
			OrderId: orderId,
			Description: `Полная оплата курса: "${course}". Тариф: "${tariff}".`,
			SuccessURL: process.env.SUCCESS_URL,
		};

		const token = generateToken(initPayload);

		const requestBody = { ...initPayload, Token: token };

		try {
			const response = await fetch(process.env.TINKOFF_URL_DEPLOY!, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(requestBody),
			});

			const text = await response.text();
			const tinkoffData = JSON.parse(text);

			if (!tinkoffData.Success || tinkoffData.ErrorCode !== '0') {
				console.error('Tinkoff error:', tinkoffData);
				return {
					success: false,
					error: tinkoffData.Message || tinkoffData.Details || 'Ошибка инициации платежа в Тинькофф',
				};
			}

			// === Если дошли сюда — платёж успешно инициирован ===

			const paymentUrl = tinkoffData.PaymentURL;

			// Формируем данные для письма
			const emailData = {
				Имя: parsed.data.name,
				Телефон: parsed.data.phone,
				Email: email,
				Город: city,
				Курс: course,
				Тариф: tariff,
				Цена: `${price} руб.`,
				'Способ оплаты': methodPay,
				'Ссылка на оплату': paymentUrl,
				'Номер заказа': orderId,
				'Согласие на обработку ПД': conset == null ? 'Нет' : 'Да',
				'Согласие на рассылку': smsConset == null ? 'Нет' : 'Да',
			};

			const formattedText = Object.entries(emailData)
				.map(([key, value]) => `${key}: ${value || 'Не указано'}`)
				.join('\n');

			// Отправляем письмо (в отдельном try/catch, чтобы не ломать оплату)
			try {
				await transporter.sendMail({
					from: `Оплата курса <${process.env.SMTP_USER}>`,
					to: process.env.YOUR_EMAIL,
					subject: `Клиент открыл оплату: ${course} — ${tariff}`,
					text: formattedText,
				});
			} catch (mailErr: any) {
				console.error('Ошибка отправки письма:', mailErr.message || mailErr);
			}

			// Возвращаем успех с ссылкой на оплату
			return {
				success: true,
				paymentUrl: paymentUrl,
				// fieldErrors можно оставить пустыми
			};
		} catch (err: any) {
			console.error('Tinkoff Init error:', err);
			return {
				success: false,
				error: 'Не удалось связаться с Тинькофф. Попробуйте позже.',
			};
		}
	}

	return {
		success: true,
	};
}
