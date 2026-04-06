import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import { programmingCourses } from '../lib/programmingCourses';
import DefaultLayout from '../widgets/defaultLayout';
import { Metadata } from 'next';
import getRegion from '@/lib/getRegion';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Курсы программирования с нуля | Обучение разработчиков с трудоустройством онлайн в ${city}`,
		description: `Запишитесь на курсы программирования с нуля и получите навыки разработчика! Успейте, пока действуют скидки на мегараспродаже! Уроки онлайн и очно, помощь в трудоустройстве и поддержка для начинающих. в ${city}.`,
		keywords: ['Курсы программирования с нуля', 'Курсы программирования с нуля для начинающих'],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Курсы программирования с нуля | Обучение разработчиков с трудоустройством онлайн в ${city}`,
			description: `Запишитесь на курсы программирования с нуля и получите навыки разработчика! Успейте, пока действуют скидки на мегараспродаже! Уроки онлайн и очно, помощь в трудоустройстве и поддержка для начинающих. в ${city}.`,
			url: '/courses/programming',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Курсы программирования с нуля в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses/programming`,
		},
	};
}

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout
				span='Курсы'
				title='по программированию'
				activeTab='programming'
				coursesCard={programmingCourses}
			/>
		</div>
	);
}
