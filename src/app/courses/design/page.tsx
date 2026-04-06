import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { designCourses } from '../lib/designCourses';
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
		title: `Курсы по дизайну и веб-дизайну для начинающих | Онлайн обучение в ${city}`,
		description: `Запишитесь на курсы по дизайну с нуля. Успейте, пока действуют скидки на мегараспродаже! Обучение веб-дизайну для начинающих. Дистанционные онлайн курсы, которые помогут вам стать профессионалом в ${city}.`,
		keywords: ['Курсы по дизайну и веб-дизайну', 'Курсы по дизайну и веб-дизайну для начинающих'],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Курсы по дизайну и веб-дизайну для начинающих | Онлайн обучение в ${city}`,
			description: `Запишитесь на курсы по дизайну с нуля. Успейте, пока действуют скидки на мегараспродаже! Обучение веб-дизайну для начинающих. Дистанционные онлайн курсы, которые помогут вам стать профессионалом в ${city}.`,
			url: '/courses/design',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Курсы по дизайну и веб-дизайну с нуля в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses/design`,
		},
	};
}

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по дизайну' activeTab='design' coursesCard={designCourses} />
		</div>
	);
}
