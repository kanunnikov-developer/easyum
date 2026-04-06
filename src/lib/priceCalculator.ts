// ======================
// priceCalculator.ts
// ======================
// Вся логика ценообразования по 4 градациям в одном месте

type Format = 'ochno' | 'online' | 'video';

interface PriceData {
	full: number; // полная стоимость курса
	installmentMonthly: number; // ежемесячный платёж при рассрочке от школы
}

interface Prices {
	ochno: PriceData;
	online: PriceData;
	video: PriceData;
}

// Ставки по градациям (точно как ты указал)
const gradeData = {
	1: {
		// 1 градация — Москва (самая дорогая)
		full: { ochno: 14434, online: 13003, video: 11302 },
		installment: { ochno: 15990, online: 14990, video: 13490 },
	},
	2: {
		full: { ochno: 13778, online: 12412, video: 10788 },
		installment: { ochno: 14990, online: 13990, video: 12490 },
	},
	3: {
		full: { ochno: 13152, online: 11894, video: 10187 },
		installment: { ochno: 14490, online: 13490, video: 11990 },
	},
	4: {
		// 4 градация — самые дешёвые регионы
		full: { ochno: 12520, online: 11268, video: 9588 },
		installment: { ochno: 13990, online: 12990, video: 10990 },
	},
} as const;

export function getGradeBySubdomain(subdomain: string | undefined): 1 | 2 | 3 | 4 {
	const sub = subdomain?.toLowerCase().trim() || '';

	if (['it'].includes(sub)) return 1;
	if (['kazan', 'spb'].includes(sub)) return 2;
	if (['vrn', 'ekaterinburg', 'krasnodar', 'nn', 'rostov', 'samara'].includes(sub)) return 3;

	return 4; // всё остальное — 4 градация
}

// Основная функция — рассчитывает цены под текущий поддомен
export function calculatePrices(mounth: number, subdomain: string | undefined): Prices {
	const grade = getGradeBySubdomain(subdomain);
	const data = gradeData[grade];

	return {
		ochno: {
			full: Math.round(data.full.ochno * mounth),
			installmentMonthly: data.installment.ochno,
		},
		online: {
			full: Math.round(data.full.online * mounth),
			installmentMonthly: data.installment.online,
		},
		video: {
			full: Math.round(data.full.video * mounth),
			installmentMonthly: data.installment.video,
		},
	};
}
