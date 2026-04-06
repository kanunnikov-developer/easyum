import { Suspense } from 'react';
import styles from './styles.module.css';
import getRegion from '@/lib/getRegion';
import CorporateFormTwo from '@/app/_form/CorporateForm/Two/CorporateFormTwo';
import CorporateFormOne from '@/app/_form/CorporateForm/One/CorporateFormOne';
import ScrolTop from '@/widgets/ScrolTop/ScrolTop';
import { headers } from 'next/headers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Корпоративное обучение сотрудников компании в ${city} — EasyUM`,
		description: `Проводим корпоративное обучение для повышения квалификации Ваших сотрудников. Обучение проводим по нашим и индивидуальным программам. Онлайн в общей группе, или очно в 77 городах России.`,
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Корпоративное обучение сотрудников компании в ${city} — EasyUM`,
			description: `Проводим корпоративное обучение для повышения квалификации Ваших сотрудников. Обучение проводим по нашим и индивидуальным программам. Онлайн в общей группе, или очно в 77 городах России.`,
			url: '/corporate-training',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Корпоративное обучение сотрудников в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/corporate-training`,
		},
	};
}

export default function Page() {
	return (
		<div className={styles.page}>
			<ScrolTop />
			<div className={styles.bg}></div>
			<div className='container'>
				<section className={styles.header}>
					<div className={styles.header_left}>
						<h1>Корпоративное обучение</h1>
						<p>Мы проводим корпоративые обучения для повышения квалификации Ваших сотрудников.</p>
					</div>
					<div className={styles.header_right}>
						<img src={`/company/corporateMain.svg`} alt='Картинка' />
					</div>
				</section>

				<section className={styles.primeris}>
					<h2>
						<span className='accent'>Как можно</span> обучаться?
					</h2>
					<div className={styles.description}>
						<p className={styles.span}>01</p>
						<h2 className='accent'>По готовому курсу</h2>
						<p>
							Сотрудники могут выбрать подходящий им курс с программой обучения в EasyUM. В двух форматах: очно/онлайн в
							общей группе, или очно/онлайн в закрытой группе (только для ваших сотрудников). Для того, чтобы
							записаться, нужно:
						</p>
						<img src='/company/corporate/course.svg' alt='По готовому курсу' className={styles.imageDesctop} />
						<img src='/company/corporate/courseOneMobile.svg' alt='По готовому курсу' className={styles.imageMobile} />
					</div>
				</section>

				<section className={styles.form}>
					<div className={styles.section__row}>
						<div className={styles.left}>
							<h2>Заполните форму для обучения по нашему курсу</h2>
							<img className={styles.image} src='/company/corporate/form1.svg' alt='Девушка картинка' />
						</div>
						<div className={styles.right}>
							<Suspense fallback={<CorporateFormOne city='Москва' />}>
								<Wrapper />
							</Suspense>
						</div>
					</div>
				</section>

				<section>
					<div className={styles.description}>
						<p className={styles.span}>02</p>
						<h2 className='accent'>Персонально</h2>
						<p>
							Если Вы не нашли подходящего курса, мы можем подготовить Вам персональную программу, для этого нужно:
							написать нам желаемые темы для изучения, количество участников, период обучения и контактные данные для
							получения Коммерческого предложения.
						</p>
						<img src='/company/corporate/course2.svg' alt='Персонально' className={styles.imageDesctop} />
						<img src='/company/corporate/courseTwoMobile.svg' alt='По готовому курсу' className={styles.imageMobile} />
					</div>
				</section>

				<section className={styles.form}>
					<div className={styles.section__row}>
						<div className={styles.left}>
							<h2>Заполните форму для обучения по персональному курсу</h2>
							<img className={styles.image} src='/company/corporate/form2.svg' alt='Девушка картинка' />
						</div>
						<div className={styles.right}>
							<Suspense fallback={<CorporateFormTwo city='Москва' />}>
								<WrapperTwo />
							</Suspense>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return <CorporateFormOne city={region?.city} />;
}

async function WrapperTwo() {
	const region = await getRegion();
	return <CorporateFormTwo city={region?.city} />;
}
