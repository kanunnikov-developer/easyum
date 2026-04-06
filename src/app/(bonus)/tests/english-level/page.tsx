import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import TestForm from './ui/TestForm';
import SwiperBlock from './ui/swiper/swipre';
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
		title: `Тест на знание английского языка от digital-школы |EasyUM в ${city}`,
		description: `Современная школа EasyUM города Москвы предлагает ✔ пройти тест на знание английского языка для будущих программистов и IT-специалистов. Определите Ваши слабые места и общий уровень знаний английского в ${city}! `,
		keywords: ['Тесты на знание английского языка', 'Онлайн тест определить уровень языка', 'Английский язык тест'],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Тест на знание английского языка от digital-школы |EasyUM в ${city}`,
			description: `Современная школа EasyUM города Москвы предлагает ✔ пройти тест на знание английского языка для будущих программистов и IT-специалистов. Определите Ваши слабые места и общий уровень знаний английского в ${city}!`,
			url: '/tests/english-level',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Тест на знание английского языка в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/tests/english-level`,
		},
	};
}

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<div className={styles.header}>
				<Breadcrumbs />
				<h2>
					<span className='span-accent'>Тест: </span>Определить уровень английского языка
				</h2>
				<div className={styles.form}>
					<TestForm />
				</div>
				<div className={styles.description}>
					<p>Иногда нам задают вопрос: «Зачем учить английский язык, если я хочу стать программистом?».</p>
					<br />
					<p>
						Действительно, в крупный IT-компаниях зачастую есть целый штаб переводчиков и проектных менеджеров, которые
						владеют английским языком и ведут переговоры с клиентами из разных стран. Зачем же тогда учить английский
						именно программисту, ведь его основная задача – писать чистый код и разрабатывать приложения.
					</p>
					<br />
					<p>
						Английский – международный язык. Незнание английского не только закрывает перед вами двери крупных
						европейских и американских IT-компаний, но также заставляет топтаться на месте в профессиональном смысле. Не
						секрет, что большинство обучающих материалов и готовых решений написаны именно на английском.
					</p>
					<br />
					<p>
						Мы даже не будем упоминать количество возможностей в повседневной жизни, который открываются для тех, кто
						знает английский!
					</p>
					<br />
					<p>
						Если вы хотите развиваться как профессионал и планируете построить головокружительную карьеру в IT, без
						знания иностранного вам не обойтись. Предлагаем пройти быстрый тест, который поможет определить ваш общий
						уровень знаний и слабые места в английском языке.
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
