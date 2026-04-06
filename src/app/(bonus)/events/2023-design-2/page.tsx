import getRegion from '@/lib/getRegion';
import styles from './styles.module.css';
import { headers } from 'next/headers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Пробный урок курса «Графический Дизайн» и «Web дизайн (UI / UX)» в школе программирования EasyUM в ${city}`,
		description: `Обучение Графическому Дизайну в ${city}. Посетите 2х часовой бесплатный пробный урок, и поймите подходит ли вам профессия Веб дизайнера!`,
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Пробный урок курса «Графический Дизайн» и «Web дизайн (UI / UX)» в школе программирования EasyUM в ${city}`,
			description: `Обучение Графическому Дизайну в ${city}. Посетите 2х часовой бесплатный пробный урок, и поймите подходит ли вам профессия Веб дизайнера!`,
			url: '/events/2023-design-2',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Пробный урок курса «Графический Дизайн» и «Web дизайн (UI / UX)» EasyUM в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/events/2023-design-2`,
		},
	};
}

export default function Page() {
	return (
		<section className={styles.page}>
			<div className={styles.bg}></div>
			<div className={'container'}>
				<section className={styles.hero}>
					<div className={styles.header}>
						<div className={styles.header_left}>
							<h1>
								Бесплатный <br /> пробный урок
							</h1>
							<p>Будут рассмотрены курсы:</p>
							<div className={styles.courses}>
								<a href='/courses/design/design-dlya-nachinayshih' className={styles.courses__item}>
									Web дизайн
								</a>
								<a href='/courses/design/graphic-designer' className={styles.courses__item}>
									Графический дизайн
								</a>
								<a href='/courses/design/web-design-ui-ux' className={styles.courses__item}>
									UX&UI Веб-дизайн
								</a>
							</div>
						</div>
						<div className={styles.header_right}>
							<div className={styles.photo_wrapper}>
								<img src={`/bonus/events/photo3.svg`} alt='Преподаватель' className={styles.header_img} />
								<div className={styles.location_tag}>Москва / онлайн</div>
							</div>
						</div>
					</div>

					<div className={styles.info}>
						<div className={styles.info_item}>7 сентября</div>
						<div className={styles.info_item}>13:00 - 15:00</div>
						<div className={styles.info_item}>Офлайн / онлайн</div>
						<div className={styles.info_item}>Бесплатно</div>
						<div className={styles.info_item}>Места ограничены</div>
					</div>
				</section>

				<section className={styles.description}>
					<p>
						Дизайнер – креативная и творческая профессия, но со своими тонкостями и правилами. Если вы не знаете,
						изучать графический дизайн или веб-дизайн, или просто хотите понять, подойдет ли та профессия, которую вы
						выбрали – добро пожаловать на бесплатное пробное занятие.
					</p>
					<br />
					<p>
						Мы расскажем об особенностях работы дизайнером, подводных камнях профессии, навыках, инструментах и,
						конечно, перспективах.
					</p>
				</section>

				<section className={styles.learning}>
					<h3>
						<span className='accent'>Что будет</span> на уроке?
					</h3>
					<div className={styles.learning_content}>
						<div className={styles.learning_column}>
							<h4>Обсудим:</h4>
							<ul className={styles.list}>
								<li>Дизайнер и его обязанности</li>
								<li>Какие задачи решают графический и веб-дизайн</li>
								<li>Сделаем обзор главных графических редакторов</li>
								<li>Тренды в веб-дизайне на 2023-2024 годы</li>
								<li>Возможности профессионального развития</li>
								<li>По силе ли вам такая профессия</li>
							</ul>
						</div>
						<div className={styles.learning_column}>
							<h4>Сделаем:</h4>
							<ul className={styles.list}>
								<li>Установим на ваш ноутбук Photoshop</li>
								<li>Создадим первый дизайн проект</li>
								<li>Разработаем визитку для компании</li>
							</ul>
							<p className={styles.note}>
								*по возможности берите на занятие свой ноутбук, так как будем практиковаться.
							</p>
						</div>
					</div>
					<div className={styles.telegram_container}>
						<a href='https://t.me/+76jmoSv6_eQ1MzIy' target='_blank' className={styles.telegram_button}>
							Вступить в чат Telegram <img src='/bonus/events/icons/telegram.svg' alt='Telegram' />
						</a>
					</div>
				</section>
			</div>
		</section>
	);
}
