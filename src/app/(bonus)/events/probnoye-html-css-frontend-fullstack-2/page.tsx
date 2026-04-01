import styles from './styles.module.css';

export default function Page() {
	return(
		<section className={styles.page}>
			<div className={styles.bg}></div>
			<div className={'container'}>
				<section className={styles.hero}>
					<div className={styles.header}>
						<div className={styles.header_left}>
							<h1>Бесплатный <br /> пробный урок</h1>
							<p>Будут рассмотрены курсы:</p>
							<div className={styles.courses}>
								<a href="/courses/web-development/javascript-front-end" className={styles.courses__item}>
									Front End
								</a>
								<a href="/courses/web-development/java-script-full-stack" className={styles.courses__item}>
									Full Stack
								</a>
								<a href="/courses/web-development/html-css-moskow" className={styles.courses__item}>
									HTML&CSS
								</a>
							</div>
						</div>
						<div className={styles.header_right}>
							<div className={styles.photo_wrapper}>
								<img src={`/bonus/events/photo4.svg`} alt='Преподаватель' className={styles.header_img}/>
								<div className={styles.location_tag}>
									 Москва / онлайн
								</div>
							</div>
						</div>
					</div>

					<div className={styles.info}>
						<div className={styles.info_item}>11 сентября</div>
						<div className={styles.info_item}>19:30 - 21:30</div>
						<div className={styles.info_item}>Офлайн / онлайн</div>
						<div className={styles.info_item}>Бесплатно</div>
						<div className={styles.info_item}>Места ограничены</div>
					</div>
				</section>

				<section className={styles.description}>
					<p>Разработка сайтов – одна из самых востребованных IT-сфер. Изучив язык JavaScript и верстку на HTML&CSS, вы точно не останетесь без работы. Бизнес массово переходит в онлайн, и ему позарез нужны специалисты.</p>
					<br />
					<p>Если вы не можете определиться, стать ли Front-end разработчиком или Full-Stack, посетите пробный урок. Узнаете, чем занимается каждый из этих специалистов, какие навыки требуются и как новичку покорить профессию в сжатые сроки.</p>
				</section>

				<section className={styles.learning}>
					<h3><span className='accent'>Что будет</span> на уроке?</h3>
					<div className={styles.learning_content}>
						<div className={styles.learning_column}>
							<h4>Обсудим:</h4>
							<ul className={styles.list}>
								<li>Этапы веб-разработки</li>
								<li>Кто такой Front-end и Full-Stack разработчик</li>
								<li>Основные инструменты разработчиков</li>
								<li>Ключевые навыки для создания качественного сайта</li>
								<li>Взаимодействие с другими специалистами из сферы</li>
								<li>Какие перспективы в 2023-2024 годах</li>
								<li>Где и как найти свою первую работу</li>
								<li>Перспективы ЗП</li>
							</ul>
						</div>
						<div className={styles.learning_column}>
							<h4>Сделаем:</h4>
							<ul className={styles.list}>
								<li>Рассмотрим базовый инструментарий веб-разработчиков</li>
								<li>Разберем основные теги и атрибуты</li>
								<li>Установим вам на ноутбук все необходимые программы для разработки</li>
								<li>Попрактикуем и разработаем первую свою страницу сайта</li>
							</ul>
							<p className={styles.note}>
								*по возможности берите на занятие свой ноутбук, так как будем практиковаться.
							</p>
						</div>
					</div>
					<div className={styles.telegram_container}>
						<a href="https://t.me/+6kxNGwgRLlxlYjky" target='_blank' className={styles.telegram_button}>
							Вступить в чат Telegram <img src='/bonus/events/icons/telegram.svg' alt='Telegram' />
						</a>
					</div>
				</section>
			</div>
		</section>
	)
}
