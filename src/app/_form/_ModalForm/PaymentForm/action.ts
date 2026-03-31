'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import { generateToken } from './model/generateToken';
import crypto from 'crypto';

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
	const url = formData.get('url');

	const schoolInstallmentMonthlyPayment = formData.get('schoolInstallmentMonthlyPayment');

	// const TbankMonths = formData.get('tbankMonths');

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

		const receipt = {
        Taxation: "usn_income",
				Email: email,
				Phone: phone,
        Items: [
            {
                Name: `Полная оплата курса: "${course}". Тариф: "${tariff}".`,   // название товара/услуги
                Price: Math.round(amountRub * 100),     // цена в копейках
                Quantity: 1,
                Amount: Math.round(amountRub * 100),    // = Price * Quantity
                Tax: "none", 
								PaymentMethod: "full_prepayment",	
								PaymentObject: "service",
            }
        ],
    };

		const requestBody = { ...initPayload, Token: token, Receipt: receipt };

		try {
			const response = await fetch(process.env.TINKOFF_URL_DEPLOY!, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(requestBody),
			});

			const text = await response.text();
			const tinkoffData = JSON.parse(text);

			if (!tinkoffData.Success || tinkoffData.ErrorCode !== '0') {
				return {
					success: false,
					error: 'Ошибка инициации платежа в Тинькофф',
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
				'Страница отправки формы': url,
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
			};
		} catch (err: any) {
			console.error('Tinkoff Init error:', err);
			return {
				success: false,
				error: 'Не удалось связаться с Тинькофф. Попробуйте позже.',
			};
		}
	}

	if (methodPay === 'Рассрочка от школы (есть переплата)') {
		const amountRub = Number(schoolInstallmentMonthlyPayment);
		console.log(amountRub);
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
			Description: `Оплата 1 месяца курса: "${course}". Тариф: "${tariff}".`,
			SuccessURL: process.env.SUCCESS_URL,
		};

		const token = generateToken(initPayload);

		// === Формируем чек (Receipt) ===
    const receipt = {
        Taxation: "usn_income",
				Email: email,
				Phone: phone,
        Items: [
            {
                Name: `Оплата 1 месяца курса: "${course}". Тариф: "${tariff}".`,   // название товара/услуги
                Price: Math.round(amountRub * 100),     // цена в копейках
                Quantity: 1,
                Amount: Math.round(amountRub * 100),    // = Price * Quantity
                Tax: "none",                           // или "vat10", "vat0", "none" и т.д.
            }
        ],
    };

		const requestBody = { ...initPayload, Token: token, Receipt: receipt };

		try {
			const response = await fetch(process.env.TINKOFF_URL_DEPLOY!, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(requestBody),
			});

			const text = await response.text();
			const tinkoffData = JSON.parse(text);

			if (!tinkoffData.Success || tinkoffData.ErrorCode !== '0') {
				return {
					success: false,
					error: 'Ошибка инициации платежа в Тинькофф',
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
					from: `Рассрочка от школы <${process.env.SMTP_USER}>`,
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
			};
		} catch (err: any) {
			console.error('Tinkoff Init error:', err);
			return {
				success: false,
				error: 'Не удалось связаться с Тинькофф. Попробуйте позже.',
			};
		}
	}

	if (methodPay === 'Полная оплата (зарубежная карта)') {
		const amount = Number(price);

		if (!amount || amount <= 0) {
			return { success: false, error: 'Неверная сумма платежа' };
		}

		const merchantLogin = process.env.ROBOKASSA_LOGIN!;
		const password1 = process.env.ROBOKASSA_PASSWORD1!;

		// Уникальный номер заказа (Robokassa требует положительное целое число для InvId)
		const orderIdNumeric = Math.floor(Date.now() / 1000);

		const description = `Полная оплата курса: "${course}". Тариф: "${tariff}".`;

		// Сумма должна быть строкой с точкой
		const outSum = amount.toFixed(2);

		// Подпись строго по документации: MerchantLogin:OutSum:InvId:Пароль#1
		const signature = crypto
			.createHash('md5')
			.update(`${merchantLogin}:${outSum}:${orderIdNumeric}:${password1}`)
			.digest('hex');

		// Формируем параметры запроса
		const params = new URLSearchParams({
			MerchantLogin: merchantLogin,
			OutSum: outSum,
			InvId: orderIdNumeric.toString(),
			Description: description,
			SignatureValue: signature,
			Culture: 'ru',
		});

		// Формируем ссылку (добавляем '?' если он отсутствует в базовом URL)
		const baseUrl = process.env.ROBOKASSA_URL_DEPLOY!;
		const paymentUrl = baseUrl.includes('?') 
			? `${baseUrl}&${params.toString()}` 
			: `${baseUrl}?${params.toString()}`;

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
			'Номер заказа': orderIdNumeric.toString(),
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

		return {
			success: true,
			paymentUrl,
		};
	}

	return {
		success: true,
	};
}
