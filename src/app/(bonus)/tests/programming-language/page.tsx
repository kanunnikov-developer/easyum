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
		title: `Какой язык программирования выбрать? Тест от школы|EasyUM в ${city}`,
		description: `Школа программирования EasyUM в ${city} провела ⚡ анализ самых популярных современных языков программирования и разработали для вас уникальный тест - «Какой язык программирования выбрать?»`,
		keywords: [
			'Тесты Какой язык программирования выбрать',
			'Онлайн тест Какой язык программирования выбрать',
			'Какой язык программирования выбрать тест',
		],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Какой язык программирования выбрать? Тест от школы|EasyUM в ${city}`,
			description: `Школа программирования EasyUM в ${city} провела ⚡ анализ самых популярных современных языков программирования и разработали для вас уникальный тест - «Какой язык программирования выбрать?»`,
			url: '/tests/programming-language',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Тест Какой язык программирования выбрать в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/tests/programming-language`,
		},
	};
}

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<div className={styles.header}>
				<Breadcrumbs />
				<h2>
					<span className='span'>Тест: </span>Какой язык программирования выбрать?
				</h2>
				<div className={styles.form}>
					<TestForm />
				</div>
				<div className={styles.description}>
					<p>
						Выбор языка программирования – сложный и ответственный шаг, ведь именно от этого зависит ваша будущая
						работа. Будете ли вы создавать интерактивные сайты или заниматься разработкой веб-приложений со сложной
						логикой? Станете фрилансером или штатным сотрудником крупной IT-компании?
					</p>
					<br />
					<p>
						С проблемой выбора подходящего языка программирования сталкиваются все начинающие специалисты. Одни хотят
						выучить самый трудный и востребованный язык программирования, и готовы потратить на изучение несколько лет.
						Другие хотят получить ощутимый результат за короткое время.
					</p>
					<br />
					<p>
						Мы проанализировали самые популярные современные языки программирования. На основе полученных результатов
						разработали уникальный тест – «Какой язык программирования выбрать?». С помощью теста, который анализирует
						ваши желания и умения, вы узнаете, какой язык подходит именно вам.
					</p>
					<br />
					<p>
						Этот тест не является прямым руководством! Вы можете выбрать другой язык и стать высококлассным специалистом
						именно в нем.
					</p>
					<br />
				</div>
				<div className={styles.gallerry}>
					<h2>Другие тесты</h2>
					<SwiperBlock />
				</div>
			</div>
		</div>
	);
}
