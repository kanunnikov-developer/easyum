import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import TestsTabs from './ui/tabs';
import cn from 'classnames';
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
		title: `Тесты на выбор it-профессии |EasyUM в ${city}`,
		description: `Пройдите тест и узнайте, какая IT-профессия Вам лучше подходит. Тесты от EasyUM помогут Вам лучше определиться с выбором языка программирования или будущей it-специальности, исходя из Ваших качеств характера и личных навыков в ${city}! `,
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Тесты на выбор it-профессии |EasyUM в ${city}`,
			description: `Пройдите тест и узнайте, какая IT-профессия Вам лучше подходит. Тесты от EasyUM помогут Вам лучше определиться с выбором языка программирования или будущей it-специальности, исходя из Ваших качеств характера и личных навыков в ${city}!`,
			url: '/tests',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Тесты на выбор it-профессии в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/tests`,
		},
	};
}

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<Breadcrumbs />
			<section className={styles.header}>
				<h1>
					<span className='accent'>Все тесты</span> академии EasyUM
				</h1>
				<p>
					Наши специалисты разработали тесты, чтобы помочь вам найти свою идеальную IT-профессию. Также тесты определят
					уровень ваших знаний в выбранном направлении и укажут путь для совершенствования.
				</p>
				<p>Проходить тесты быстро и легко. Попробуйте!</p>
			</section>

			<section className={styles.tabsTest}>
				<TestsTabs />
			</section>
		</div>
	);
}
