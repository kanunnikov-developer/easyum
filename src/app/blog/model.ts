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
]