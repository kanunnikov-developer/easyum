import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import { allCourses } from './lib/allCourses';
import DefaultLayout from './widgets/defaultLayout';
import { headers } from 'next/headers';
import getRegion from '@/lib/getRegion';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Курсы IT и digital профессий в ${city} — EasyUM`,
		description: `Онлайн-курсы программирования, веб-разработки, дизайна и маркетинга в ${city}. Обучение с нуля, сертификаты, помощь с трудоустройством. Выберите свой курс на EasyUM.`,
		keywords: [
			'курсы программирования',
			`курсы IT ${city}`,
			'онлайн курсы IT',
			'курсы веб разработки',
			'курсы дизайна',
			'курсы маркетинга',
			'EasyUM',
			'обучение digital профессиям',
		],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Курсы IT и digital профессий в ${city} — EasyUM`,
			description: `Онлайн и гибридное обучение IT-профессиям в ${city}. Сертификаты, практика, помощь в трудоустройстве.`,
			url: '/courses',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Курсы IT в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses`,
		},
	};
}

export default function Page() {
	return (
		<section className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Все курсы' title='Изиум' activeTab='all' coursesCard={allCourses} />
		</section>
	);
}
