import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import cn from 'classnames';
import getRegion from '@/lib/getRegion';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Контакты Школы программирования в ${city}`,
		description: `Очная Школа Программирования EasyUM доступна в 77 городах для очного формата обучения`,
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Контакты Школы программирования в ${city}`,
			description: `Очная Школа Программирования EasyUM доступна в 77 городах для очного формата обучения`,
			url: '/contact',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Контакты Школы программирования в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/contact`,
		},
	};
}

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<Breadcrumbs />
			<section className={styles.contact}>
				<div className={styles.left}>
					<div className={styles.left__text}>
						<h1>Контакты</h1>
						<Suspense fallback={<p>Загрузка</p>}>
							<WrapperAdress />
						</Suspense>
					</div>
					<div className={styles.number}>
						<div className={styles.numberone}>
							<a href='tel:+79669990685'>+7 (966) 999-06-85</a>
							<img src='/icons/phone.svg' alt='Иконка телефона' />
						</div>
						<div className={styles.numbertwo}>
							<a href='tel:+79163101105'>+7 (916) 310-11-05</a>
							<img src='/icons/whatsApp.svg' alt='Иконка WhatApp' />
							<img src='/icons/telegram.svg' alt='Иконка Telegram' />
						</div>
						<div className={styles.email}>
							<Suspense fallback={<a href='mailto:it@easyum.ru'>Загрузка</a>}>
								<WrapperEmail />
							</Suspense>
							<img src='/icons/email.svg' alt='Иконка Email' />
						</div>
					</div>
					<div className={styles.work}>
						<h6>График работы</h6>
						<span>Консультации и запись {`\n`} в группы по телефону:</span>
						<p>Пн - Пт 09:00 - 22:00</p>
						<p>Сб - Вс 11:00 - 18:00</p>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.mapContainer}>
						<Suspense fallback={<div>Загрузка карты...</div>}>
							<WrapperYandex />
						</Suspense>
					</div>
					<div className={styles.description}>
						<p>
							Посетить EasyUM первый раз можно только по предварительной записи, так как администратор не всегда
							присутствует в школе
						</p>
					</div>
				</div>
			</section>

			<section className={styles.subscribe}>
				<h2>
					<span className='accent'>Подпишись</span> на нас в социальных сетях
				</h2>
				<p>
					Подпишитесь на нас в социальных сетях, и всегда смотрите самое свежее и актуальное: видео-отзывы, акции и
					новости нашей академии!
				</p>
				<div className={styles.grid}>
					<a href='https://vk.com/easyumru'>
						<img src='/about/contacts/img1.svg' alt='Вконтакте' />
					</a>
					<a href='https://t.me/easyumru'>
						<img src='/about/contacts/img2.svg' alt='Телеграм' />
					</a>
				</div>
			</section>
		</div>
	);
}

async function WrapperAdress() {
	const region = await getRegion();
	return (
		<>
			<p>{region?.address}</p>
			<span>{region?.metro}</span>
		</>
	);
}

async function WrapperEmail() {
	const region = await getRegion();
	return <a href={`mailto:${region?.email}`}>{region?.email}</a>;
}

async function WrapperYandex() {
	const region = await getRegion();
	return (
		<iframe
			src={region?.map}
			width='100%' // адаптивная ширина
			height='400'
			allowFullScreen
			loading='lazy'
			title='Яндекс Карта'
			className={styles.map}
		/>
	);
}
