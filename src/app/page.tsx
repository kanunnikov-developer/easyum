import getRegion from '@/lib/getRegion';
import Brends from './_components/Brends/Brends';
import Courses from './_components/Courses/Courses';
import Discount from './_components/Discount/Discount';
import Feedback from './_components/Feedback/Feedback';
import Hero from './_components/Hero/Hero';
import Reviews from './_components/Reviews/Reviews';
import Statistics from './_components/Statistics/Statistics';
import WhyEasyum from './_components/WhyEasyum/WhyEasyum';
import styles from './page.module.css';
import cn from 'classnames';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Москве';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Школа программирования EasyUM в ${city} - Онлайн IT школа для всех`,
		description: `EasyUM - образовательная площадка, с возможностью обучения по гибридной системе: очно в 77 городах России, в онлайн-группе, или по видео-курсу. Основные образовательные направления: программирование, веб-разработка, дизайн, маркетинг, разработка игр, управление. `,
		keywords: [
			'курсы программирования',
			'IT курсы',
			`курсы IT ${city}`,
			'онлайн курсы программирования',
			'EasyUM',
			'школа программирования',
			'веб-разработка',
			'дизайн курсы',
			'маркетинг обучение',
		],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(`https://${currentHost}`),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Школа программирования EasyUM в ${city} - Онлайн IT школа для всех`,
			description: `EasyUM - образовательная площадка, с возможностью обучения по гибридной системе: очно в 11 городах России, в онлайн-группе, или по видео-курсу. Основные образовательные направления: программирование, веб-разработка, дизайн, маркетинг, разработка игр, управление.`,
			url: fullUrl, // og:url
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `EasyUM в ${city}`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: fullUrl,
		},
	};
}

export default function Home() {
	return (
		<main className={cn('container', styles.main)}>
			<Hero />
			<Discount />
			<WhyEasyum />
			<Courses />
			<Statistics />
			<Reviews />
			<Brends />
			<Feedback />
		</main>
	);
}
