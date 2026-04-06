import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { otherCourses } from '../lib/otherCourses';
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
		title: `Другие курсы академии EasyUM в ${city}`,
		description: `Академия EasyUM предлагает обучение по творческим направлениям, таким как 3д дизайнер, менеджер it проектов, и пр. в ${city}.`,
		keywords: ['Курсы программирования с нуля', 'Курсы программирования с нуля для начинающих'],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Другие курсы академии EasyUM в ${city}`,
			description: `Академия EasyUM предлагает обучение по творческим направлениям, таким как 3д дизайнер, менеджер it проектов, и пр. в ${city}.`,
			url: '/courses/other',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Другие курсы академии EasyUM с нуля в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses/other`,
		},
	};
}

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Другие курсы' title='Изиум' activeTab='other' coursesCard={otherCourses} />
		</div>
	);
}
