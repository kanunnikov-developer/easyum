import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { webCourses } from '../lib/webCourses';
import getRegion from '@/lib/getRegion';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Курсы по веб разработке в ${city}`,
		description: `Курсы по веб разработке для начинающих. Обучение веб разработке с нуля с получением сертификата гос. образца. в ${city}.`,
		keywords: ['Курсы по веб разработке', 'Курсы по веб разработке для начинающих'],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Курсы по веб разработке в ${city}`,
			description: `Курсы по веб разработке для начинающих. Обучение веб разработке с нуля с получением сертификата гос. образца. в ${city}.`,
			url: '/courses/web-development',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Курсы по веб разработке в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses/web-development`,
		},
	};
}

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по веб разработке' activeTab='web' coursesCard={webCourses} />
		</div>
	);
}
