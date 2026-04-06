import getRegion from '@/lib/getRegion';
import styles from './styles.module.css';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Пробное занятие курса «С++ программист (Си плюс плюс)» в школе программирования EasyUM в ${city}`,
		description: `Пробный урок по С++ разработке (Си Плюс Плюс) в школе программирования EasyUM. Очное обучение в ${city} С++ разработке.`,
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Пробное занятие курса «С++ программист (Си плюс плюс)» в школе программирования EasyUM в ${city}`,
			description: `Пробный урок по С++ разработке (Си Плюс Плюс) в школе программирования EasyUM. Очное обучение в ${city} С++ разработке.`,
			url: '/events/c_plus_plus',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Пробное занятие курса «С++ программист (Си плюс плюс)» EasyUM в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/events/c_plus_plus`,
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
								<a href='/courses/programming/c-plus-plus' className={styles.courses__item}>
									C++ разработчик
								</a>
							</div>
						</div>
						<div className={styles.header_right}>
							<div className={styles.photo_wrapper}>
								<img src={`/bonus/events/photo2.svg`} alt='Преподаватель' className={styles.header_img} />
								<div className={styles.location_tag}>Москва / онлайн</div>
							</div>
						</div>
					</div>

					<div className={styles.info}>
						<div className={styles.info_item}>5 сентября</div>
						<div className={styles.info_item}>19:30 - 21:30</div>
						<div className={styles.info_item}>Офлайн / онлайн</div>
						<div className={styles.info_item}>Бесплатно</div>
						<div className={styles.info_item}>Места ограничены</div>
					</div>
				</section>

				<section className={styles.description}>
					<p>
						С++ - один из самых серьезных языков программирования в мире. На нем пишут операционные системы, банковское
						ПО, движки для компьютерных игр и многое многое другое. С++ поможет вам лучше понять взаимосвязь между кодом
						и железом компьютера.
					</p>
					<br />
					<p>
						Так как данный язык является низкоуровневым, сложность в изучении данного языка значительно выше, чем у
						высокоуровневых языках, таких как Java и Python. И к этому нужно быть готовым. Но тем не менее, данный язык
						порадует Вас уровнем заработных плат со старта, так как из-за сложности входа в профессию, специалистов по
						С++ постоянно не хватает на рынке труда.
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
								<li>Какие задачи позволяет решать С++</li>
								<li>Что можно писать на С++</li>
								<li>Почему стоит выбрать именно этот язык в 2023 году</li>
								<li>Что нужно знать для успешного трудоустройства</li>
								<li>На какой уровень заработной платы рассчитывать новичку</li>
								<li>Какие перспективы у С++ Middle разработчика</li>
							</ul>
						</div>
						<div className={styles.learning_column}>
							<h4>Сделаем:</h4>
							<ul className={styles.list}>
								<li>Установим на ваш ноутбук весь необходимый инструментарий для разработки на С++</li>
								<li>Запустим свою первую программу на С++</li>
								<li>Изучим основные правила написания кода</li>
							</ul>
							<p className={styles.note}>
								*по возможности берите на занятие свой ноутбук, так как будем практиковаться.
							</p>
						</div>
					</div>
					<div className={styles.telegram_container}>
						<a href='https://t.me/+_CMqbDvI4WtkMjli' target='_blank' className={styles.telegram_button}>
							Вступить в чат Telegram <img src='/bonus/events/icons/telegram.svg' alt='Telegram' />
						</a>
					</div>
				</section>
			</div>
		</section>
	);
}
