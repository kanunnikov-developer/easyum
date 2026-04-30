import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from '../english-level/styles.module.css';
import TestForm from './ui/TestForm';
import SwiperBlock from '../english-level/ui/swiper/swipre';
import cn from 'classnames';
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
		title: `Какой курс выбрать для прохождения в IT-школе|EasyUM в ${city}`,
		description: `Современная школа программирования EasyUM поможет Вам разобраться во всем многообразии IT курсов и подобрать курс именно для Вас! После прохождения теста, мы поможем Вам определиться с курсом, который соответствует всем Вашим потребностям и возможностям!`,
		keywords: [
			'Тесты Какой курс выбрать для прохождения в IT-школе',
			'Онлайн тест Какой курс выбрать для прохождения в IT-школе',
			'Какой курс выбрать для прохождения в IT-школе тест',
		],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Какой курс выбрать для прохождения в IT-школе|EasyUM в ${city}`,
			description: `Современная школа программирования EasyUM поможет Вам разобраться во всем многообразии IT курсов и подобрать курс именно для Вас! После прохождения теста, мы поможем Вам определиться с курсом, который соответствует всем Вашим потребностям и возможностям!`,
			url: '/tests/search-course-for-me',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Тест Какой курс выбрать для прохождения в IT-школе в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/tests/search-course-for-me`,
		},
	};
}

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<div className={styles.header}>
				<Breadcrumbs />
				<h1 className={styles.title}>
					<span className='accent'>Тест: </span>Помогите выбрать курс, исходя из моих потребностей
				</h1>
				<div className={styles.form}>
					<TestForm />
				</div>
				<div className={styles.description}>
					<p>
						Хотите устроиться в международную IT-компанию или начать свой бизнес? Создать сайт или открыть
						интернет-магазин, который сможете наполнять и продвигать без затрат на услуги специалистов? Возможно, вам
						нужно научиться верстать сайты или художественно оформлять веб-проекты, или создавать объекты трехмерной
						графики?
					</p>
					<br />
					<p>
						Образовательный центр EasyUM поможет разобраться во всем многообразии IT-курсов. Мы подберем курс
						персонально для вас. Проходите тест – и вы узнаете, какой курс соответствует вашим потребностям и
						возможностям.
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
