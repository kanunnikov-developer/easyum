export type Post = {
	id: number;
	title: string;
	image: string;
	date: string;
	description: string;
	href: string;
}

export const posts: Post[] = [
	{
		id: 1,
		title: 'КТО ТАКОЙ FRONT-END РАЗРАБОТЧИК',
		image: '/blog/admin-ajax.png',
		date: '8 апреля 2026',
		description: 'Front-end разработчик – программист, который создает внешнюю часть сайта или веб-приложения. Он разрабатывает то, с чем вы взаимодействуете...',
		href: '/blog/kto-takoj-front-end-razrabotchik',
	},
]