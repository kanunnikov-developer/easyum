import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { mobileCourses } from '../lib/mobileCourses';
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
		title: `Курсы по мобильной разработке в ${city}`,
		description: `Курсы по мобильной разработке · Разработка мобильных приложений для Android · Разработка Android-приложений на Kotlin в ${city}.`,
		keywords: ['Курсы по мобильной разработке', 'Курсы по мобильной разработке для начинающих'],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Курсы по мобильной разработке в ${city}`,
			description: `Курсы по мобильной разработке · Разработка мобильных приложений для Android · Разработка Android-приложений на Kotlin в ${city}.`,
			url: '/courses/mobile-development',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Курсы по мобильной разработке с нуля в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses/mobile-development`,
		},
	};
}

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по мобильной разработке' activeTab='mobile' coursesCard={mobileCourses} />
		</div>
	);
}
