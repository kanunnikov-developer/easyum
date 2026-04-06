import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { marketingCourses } from '../lib/marketingCourses';
import { headers } from 'next/headers';
import { Metadata } from 'next';
import getRegion from '@/lib/getRegion';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Курсы по маркетингу в ${city}`,
		description: `Курсы по маркетингу для начинающих с сертификатом гос. образца. Обучение интернет-маркетингу с нуля, обучение копирайту, обучение продвижению сайтов в ${city}.`,
		keywords: ['Курсы по маркетингу', 'Курсы по маркетингу для начинающих'],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Курсы по маркетингу в ${city}`,
			description: `Курсы по маркетингу для начинающих с сертификатом гос. образца. Обучение интернет-маркетингу с нуля, обучение копирайту, обучение продвижению сайтов в ${city}.`,
			url: '/courses/marketing',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Курсы по маркетингу с нуля в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses/marketing`,
		},
	};
}

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по маркетингу' activeTab='marketing' coursesCard={marketingCourses} />
		</div>
	);
}
