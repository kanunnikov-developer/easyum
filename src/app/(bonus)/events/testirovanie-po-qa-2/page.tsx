import { headers } from 'next/headers';
import styles from './styles.module.css';
import getRegion from '@/lib/getRegion';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Пробный урок курса «Тестировщик ПО (Ручное тестирование)». В школе EasyUM в ${city}`,
		description: `Пробный урок курса Тестировщик ПО. Поговорим о тестировании, компетенциях тестировщика и о карьерных перспективах начинающего тестировщика.`,
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Пробный урок курса «Тестировщик ПО (Ручное тестирование)». В школе EasyUM в ${city}`,
			description: `Пробный урок курса Тестировщик ПО. Поговорим о тестировании, компетенциях тестировщика и о карьерных перспективах начинающего тестировщика.`,
			url: '/events/testirovanie-po-qa-2',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Пробный урок курса «Тестировщик ПО (Ручное тестирование)» в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/events/testirovanie-po-qa-2`,
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
								<a href='/courses/testing/testing-qa' className={styles.courses__item}>
									Тестировщик ПО
								</a>
							</div>
						</div>
						<div className={styles.header_right}>
							<div className={styles.photo_wrapper}>
								<img src={`/bonus/events/photo5.svg`} alt='Преподаватель' className={styles.header_img} />
								<div className={styles.location_tag}>Москва / онлайн</div>
							</div>
						</div>
					</div>

					<div className={styles.info}>
						<div className={styles.info_item}>12 сентября</div>
						<div className={styles.info_item}>19:30 - 21:30</div>
						<div className={styles.info_item}>Офлайн / онлайн</div>
						<div className={styles.info_item}>Бесплатно</div>
						<div className={styles.info_item}>Места ограничены</div>
					</div>
				</section>

				<section className={styles.description}>
					<p>
						На пробном бесплатном уроке вы углубитесь в тестирование: посмотрите на его место в разработке ПО, оцените
						значимость поиска багов для всего проекта и поймете ответственность, которую несет тестировщик. Также
						поговорим о навыках и технологиях, которыми должен владеть QA Junior. Вдобавок обсудим перспективы, зарплату
						и тонкости при поиске первой работы.
					</p>
					<br />
					<p>
						Ведет урок практикующий тестировщик. Если у вас есть вопросы, не стесняйтесь их задавать. Кто ответит лучше,
						если не человек, который работает на этой должности?
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
								<li>Цели и задачи тестирования в цепочке разработки ПО</li>
								<li>Обязанности и навыки для работы тестировщиком</li>
								<li>Разбор основных терминов</li>
								<li>Виды тестирования ПО</li>
								<li>Рынок труда</li>
								<li>Карьерные перспективы для начинающих тестировщиков</li>
								<li>На какой уровень ЗП рассчитываем по окончанию обучения</li>
							</ul>
						</div>
						<div className={styles.learning_column}>
							<h4>Формат занятия:</h4>
							<ul className={styles.list}>
								<li>Занятие проходит офлайн и онлайн.</li>
								<li>Онлайн: трансляция проходит в телеграмм-чате (ссылка ниже)</li>
								<li>
									Обязательно вступайте в телеграм-чат. Здесь вы найдете всю важную информацию: адрес, ссылку на
									онлайн-трансляцию, запись встречи и коммуникация с преподавателем урока.
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.telegram_container}>
						<a href='https://t.me/+QgnDsdhKWFExMTY6' target='_blank' className={styles.telegram_button}>
							Вступить в чат Telegram <img src='/bonus/events/icons/telegram.svg' alt='Telegram' />
						</a>
					</div>
				</section>
			</div>
		</section>
	);
}
