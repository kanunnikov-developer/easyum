export type Post = {
	id: number;
	title: string;
	image: string;
	date: string;
	description: string;
	href: string;
	category: string;
}

export const posts: Post[] = [
	{
		id: 1,
		title: 'Кто такой Front-end разработчик и чем он занимается?',
		image: '/blog/kto-takoj-front-end-razrabotchik.svg',
		date: '8 апреля 2026',
		description: 'Front-end разработчик – программист, который создает внешнюю часть сайта или веб-приложения. Он разрабатывает то, с чем вы взаимодействуете, когда выбираете товары в интернет-магазине или ...',
		href: '/blog/kto-takoj-front-end-razrabotchik',
		category: 'Программирование',
	},
	{
		id: 2,
		title: 'Тестировщик ПО в 2026 году: как быстро войти в IT с нуля и начать карьеру',
		image: '/blog/testing-po-v-2026-godu.svg',
		date: '9 апреля 2026',
		description: 'Кто такой тестировщик ПО, чем он занимается, нужен ли код, как выглядит работа тестировщиком и почему это один из самых понятных способов войти в IT в 2026 году. Пошаговый план, плюсы и минусы, FAQ и мини-тест.',
		href: '/blog/testing-po-v-2026-godu',
		category: 'Тестирование',
	},
	{
		id: 3,
		title: 'Какой язык программирования учить первым в 2026 году: рейтинг для новичков',
		image: '/blog/kakoj-yazyk-programmirovaniya-uchit-pervym.svg',
		date: '9 апреля 2026',
		description: 'Какой язык программирования учить первым в 2026 году: рейтинг для новичков. Пошаговый план, плюсы и минусы, FAQ и мини-тест.',
		href: '/blog/kakoj-yazyk-programmirovaniya-uchit-pervym',
		category: 'Программирование',
	},
	{
		id: 4,
		title: 'Как войти в IT с нуля в 2026 году: пошаговый план для тех, кто боится кода',
		image: '/blog/kak-voity-v-it-s-nula-2026.svg',
		date: '9 апреля 2026',
		description: 'Мы часто слышим опасения: «IT — это сложно», «нужно быть программистом», «я слишком стар». Эти страхи понятны, но в 2026 году они абсолютно беспочвенны. Современная IT-индустрия — это не только код',
		href: '/blog/kak-voity-v-it-s-nula-2026',
		category: 'Карьера',
	},
	{
		id: 5,
		title: 'С какого языка стоит начать обучение программированию?',
		image: '/blog/schegonachat.svg',
		date: '22 апреля 2026',
		description: 'Прежде всего, стоит сказать о том, что работа с кодом – отличная тренировка для ума. Программирование тренирует мозг, положительно влияет на Ваш творческий потенциал, на умение мыслить согласно законам логики…',
		href: '/blog/s-kakogo-yazyka-stoit-nachat-obuchenie-programmirovaniyu',
		category: 'Программирование',
	},
	{
		id: 6,
		title: 'Официальное открытие EasyUM',
		image: '/blog/open-easyum.svg',
		date: '15 июля 2018',
		description: 'Рады сообщить о начале работы нового образовательного центра EasyUM! Мы рады приветствовать вас в нашем сообществе и надеемся на плодотворное сотрудничество.',
		href: '/blog/open-easyum',
		category: 'Наша школа',
	},
	{
		id: 7,
		title: 'Как научиться программировать?',
		image: '/blog/5-sovetov-kak-vyzhat-maksimum.svg',
		date: '29 апреля 2026',
		description: 'Если Вы уже решились «уйти в айти» и даже записались на курсы программирования, то мы рекомендуем Вашему вниманию статью-гайд о том, как выжать максимум из обучения IT и не спустить время и деньги «на ветер».',
		href: '/blog/ujti-v-ajti-5-sovetov-kak-vyzhat-maksimum-iz-kursov-programmirovaniya',
		category: 'Программирование',
	},
	{
		id: 8,
		title: 'Как стать веб-дизайнером? Обучение дизайну от школы',
		image: '/blog/top-6-sovetov-kak-stat-krutym-veb-dizajnerom.svg',
		date: '29 апреля 2026',
		description: 'Перед тем выбрать профессию веб-дизайнера многих новичков мучают вопросы подобного содержания. В силу отсутствия опыта ответы на эти вопросы начинающему веб-дизайнеру найти сложно',
		href: '/blog/top-6-sovetov-kak-stat-krutym-veb-dizajnerom',
		category: 'Дизайн',
	},
]