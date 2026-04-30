import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import TestForm from './ui/TestForm';
import SwiperBlock from '../english-level/ui/swiper/swipre';
import { Suspense } from 'react';
import Image from 'next/image';
import getRegion from '@/lib/getRegion';
import cn from 'classnames';
import TestQAForm from '@/app/_form/TestQAForm/TestQAForm';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Тест для получения сертификата по курсу Тестирование ПО в ${city}`,
		description: `Финальный тест, который проходят слушатели курса для того чтоб получить сертификат академии EasyUM`,
		keywords: [
			'Тесты получения сертификата по курсу Тестирование ПО',
			'Онлайн тест получения сертификата по курсу Тестирование ПО',
			'получения сертификата по курсу Тестирование ПО тест',
		],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Тест для получения сертификата по курсу Тестирование ПО в ${city}`,
			description: `Финальный тест, который проходят слушатели курса для того чтоб получить сертификат академии EasyUM`,
			url: '/tests/testqa',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Тест для получения сертификата по курсу Тестирование ПО в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/tests/testqa`,
		},
	};
}

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<div className={styles.header}>
				<Breadcrumbs />
				<h1 className={styles.title}>
					<span className='accent'>Итоговый тест </span> на получение сертификата "Тестирование ПО"
				</h1>
				<div className={styles.form}>
					<TestForm />
				</div>
				<div className={styles.description}>
					<p>
						Данный тест является завершающим этапом курса Тестирование ПО и предназначен для оценки уровня усвоения
						ключевых знаний и навыков, полученных в процессе обучения. Для успешного прохождения теста и получения
						сертификата необходимо набрать не менее 50-ти баллов. Максимальное количество баллов, которое можно
						заработать, составляет 100. В случае, если результат не достигнет необходимого порога, то придется пересдать
						тест, для получения сертификата.
					</p>
				</div>
				<div className={styles.sertificate}>
					<h2>
						У нас не учились но <span className='accent'>хотите сертификат?</span>
					</h2>
					<p>
						Хотите документально подтвердить свои навыки в тестировании программного обеспечения? Пройдите независимый
						сертификационный экзамен в нашей лицензированной школе и получите именной сертификат.
					</p>
				</div>

				<div className={styles.cards}>
					<h3>Идеально для:</h3>
					<div className={styles.gridcard}>
						<div className={styles.card}>
							<img src='/bonus/tests/testqa/icon1.svg' alt='Картинка' />
							<div className={styles.cardtext}>
								<b>{`Спеуиалистов \n с опытом`}</b>
								<p>Если у Вас есть опыт, но нет подтверждающего документа</p>
							</div>
						</div>
						<div className={styles.card}>
							<img src='/bonus/tests/testqa/icon2.svg' alt='Картинка' />
							<div className={styles.cardtext}>
								<b>{`Тестировщиков`}</b>
								<p>Если хотите проверить или освежить свои знания по теме</p>
							</div>
						</div>
						<div className={styles.card}>
							<img src='/bonus/tests/testqa/icon3.svg' alt='Картинка' />
							<div className={styles.cardtext}>
								<b>{`Всех, кто хочет сертификат`}</b>
								<p>Добавите сертификат себе в портфолио или резюме</p>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.cards}>
					<h3>
						<span className='accent'>Условия получения</span> сертифката
					</h3>
					<div className={styles.gridcard}>
						<div className={styles.card2}>
							<h6>01</h6>
							<div className={styles.card2Text}>
								<h6>Оставить заявку</h6>
								<p>С вами свяжется менеджер для подтверждения прохождения теста</p>
							</div>
						</div>
						<div className={styles.card2}>
							<h6>02</h6>
							<div className={styles.card2Text}>
								<h6>Оплатите тест</h6>
								<p>
									{`Стоимость одной попытки прохождения теста — \n`} <b>10 000 рублей</b>
								</p>
							</div>
						</div>
						<div className={styles.card2}>
							<h6>03</h6>
							<div className={styles.card2Text}>
								<h6>Получите документ</h6>
								<p>При условии прохождения на результат от 70% правильных ответов</p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.form}>
					<div className={styles.formLeft}>
						<h3>Оставьте заявку</h3>
						<Suspense fallback={<TestQAForm city='Москва' />}>
							<Wrapper />
						</Suspense>
					</div>
					<Image src='/bonus/tests/testqa/form.svg' alt='Картинка' width={396} height={396} />
				</div>

				<div className={styles.gallerry}>
					<h2>Другие тесты</h2>
					<SwiperBlock />
				</div>
			</div>
		</div>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return <TestQAForm city={region?.city} />;
}
