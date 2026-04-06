import styles from './styles.module.css';
import cn from 'classnames';
import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import getRegion from '@/lib/getRegion';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import Content from './content';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Договор-оферта в школе программирования EasyUM в ${city}`,
		description: `Договор-оферта в школе программирования EasyUM в ${city}`,
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Договор-оферта в школе программирования EasyUM в ${city}`,
			description: `Договор-оферта в школе программирования EasyUM в ${city}`,
			url: '/docs',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Договор-оферта в школе программирования в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/docs`,
		},
	};
}

export default function Page() {
	
	return (
		<div className={cn('container', styles.page)}>
			<Breadcrumbs />
			<h1>
				<span className='accent'>Юридические</span> документы
			</h1>
			<Content />
		</div>
	);
}
