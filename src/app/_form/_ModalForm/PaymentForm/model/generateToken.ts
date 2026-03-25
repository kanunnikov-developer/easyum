import crypto from 'crypto';

export function generateToken(payload: Record<string, any>): string {
	const params: Record<string, string> = {};

	// Добавляем только простые поля верхнего уровня
	for (const [key, value] of Object.entries(payload)) {
		if (value !== undefined && value !== null && typeof value !== 'object') {
			params[key] = String(value);
		}
	}

	// Добавляем Password
	params['Password'] = process.env.TINKOFF_PASSWORD!;

	// Сортируем ключи по алфавиту
	const sortedKeys = Object.keys(params).sort((a, b) => a.localeCompare(b));

	// Конкатенируем ТОЛЬКО значения
	const tokenString = sortedKeys.map((key) => params[key]).join('');

	// SHA-256
	return crypto.createHash('sha256').update(tokenString, 'utf8').digest('hex');
}
