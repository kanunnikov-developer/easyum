import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { threedCourses } from '../lib/threedCourses';
import getRegion from '@/lib/getRegion';
import { headers } from 'next/headers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Курсы по 3D моделированию в ${city}`,
		description: `Курсы по 3D моделированию для начинающих. Станьте 3D-моделлером с нуля за 5 месяцев вместе с EasyUM в ${city}.`,
		keywords: ['Курсы по дизайну и веб-дизайну', 'Курсы по дизайну и веб-дизайну для начинающих'],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Курсы по 3D моделированию в ${city}`,
			description: `Курсы по 3D моделированию для начинающих. Станьте 3D-моделлером с нуля за 5 месяцев вместе с EasyUM в ${city}.`,
			url: '/courses/3d-modeling',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Курсы по 3D моделированию с нуля в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses/3d-modeling`,
		},
	};
}

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по 3D моделированию' activeTab='threeD' coursesCard={threedCourses} />
		</div>
	);
}
