import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from '../english-level/styles.module.css';
import TestForm from './ui/TestForm';
import SwiperBlock from '../english-level/ui/swiper/swipre';
import cn from 'classnames';
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
		title: `Какая IT-профессия мне подходит? Тест от школы|EasyUM в ${city}`,
		description: `Современная digital-школа EasyUM разработали для Вас тест, с помощью которого Вы сможете понять какая it-профессия максимально подходит для Вас, исходя из Ваших качеств характера, желаний и умений в ${city}! `,
		keywords: [
			'Тесты Какая IT-профессия мне подходит',
			'Онлайн тест Какая IT-профессия мне подходит',
			'Какая IT-профессия мне подходит тест',
		],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Какая IT-профессия мне подходит? Тест от школы|EasyUM в ${city}`,
			description: `Современная digital-школа EasyUM разработали для Вас тест, с помощью которого Вы сможете понять какая it-профессия максимально подходит для Вас, исходя из Ваших качеств характера, желаний и умений в ${city}!`,
			url: '/tests/it-professiay',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Тест Какая IT-профессия мне подходит в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/tests/it-professiay`,
		},
	};
}

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<div className={styles.header}>
				<Breadcrumbs />
				<h2>
					<span className='accent'>Тест: </span>Какая IT-профессия мне подходит?
				</h2>
				<div className={styles.form}>
					<TestForm />
				</div>
				<div className={styles.description}>
					<p>IT-индустрия – одна из самых прогрессивных и быстроразвивающихся отраслей.</p>
					<br />
					<p>
						Мир меняется, поэтому пришло время сменить профессию на более современную, престижную и высокооплачиваемую.
						Но как же самому разобраться в столь неизвестной сфере и понять, какая IT-профессия подходит именно вам?
					</p>
					<br />
					<p>
						Для того чтобы помочь вам определиться, мы, дружная команда IT-специалистов, разработали тест. С помощью
						теста вы поймете, какая IT-профессия максимально для вас подходит, исходя из ваших качеств характера,
						желаний и умений.
					</p>
					<br />
					<p>
						Этот тест не является четким руководством! Если вы в итоге выбрали другую IT-профессию, мы уверенны, что
						именно в ней вы добьетесь самых высоких результатов.
					</p>
				</div>
				<div className={styles.gallerry}>
					<h2>Другие тесты</h2>
					<SwiperBlock />
				</div>
			</div>
		</div>
	);
}
