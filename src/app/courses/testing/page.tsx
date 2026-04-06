import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import { testingCourses } from '../lib/testingCourses';
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
		title: `Курсы по тестированию с трудоустройством | Обучение на QA инженера-тестировщика онлайн в ${city}`,
		description: `Запишитесь на курсы тестировщика с нуля и получите работу в IT. Успейте, пока действуют скидки на мегараспродаже! Обучение QA с трудоустройством, онлайн-формат и доступные цены в ${city}.`,
		keywords: ['Курсы по тестированию с трудоустройством', 'Курсы по тестированию с трудоустройством для начинающих'],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Курсы по тестированию с трудоустройством | Обучение на QA инженера-тестировщика онлайн в ${city}`,
			description: `Запишитесь на курсы тестировщика с нуля и получите работу в IT. Успейте, пока действуют скидки на мегараспродаже! Обучение QA с трудоустройством, онлайн-формат и доступные цены в ${city}.`,
			url: '/courses/testing',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Курсы по тестированию с трудоустройством в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses/testing`,
		},
	};
}

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по тестированию (QA)' activeTab='testing' coursesCard={testingCourses} />
		</div>
	);
}
