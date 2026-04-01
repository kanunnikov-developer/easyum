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
								<a href="/courses/marketing/smm" className={styles.courses__item}>
									SMM Менеджер
								</a>
							</div>
						</div>
						<div className={styles.header_right}>
							<div className={styles.photo_wrapper}>
								<img src={`/bonus/events/photo6.svg`} alt='Преподаватель' className={styles.header_img}/>
								<div className={styles.location_tag}>
									 Москва / онлайн
								</div>
							</div>
						</div>
					</div>

					<div className={styles.info}>
						<div className={styles.info_item}>13 сентября</div>
						<div className={styles.info_item}>19:30 - 21:30</div>
						<div className={styles.info_item}>Офлайн / онлайн</div>
						<div className={styles.info_item}>Бесплатно</div>
						<div className={styles.info_item}>Места ограничены</div>
					</div>
				</section>

				<section className={styles.description}>
					<p>SMM менеджер - специалист отвечающий за продвижение в социальных сетях.</p>
					<br />
					<p>На пробном уроке узнаете задачи, инструменты и базовые навыки специалиста. Рассмотрите популярные каналы продвижения в интернете и современные методы раскрутки.</p>
					<br />
					<p>Ведет занятие практикующий интернет-маркетолог и смм специалист с опытом более 8 лет. Если у вас есть вопросы, обязательно задавайте, ведь только опытный специалист сможет дать достоверный ответ.</p>
				</section>

				<section className={styles.learning}>
					<h3><span className='accent'>Что будет</span> на уроке?</h3>
					<div className={styles.learning_content}>
						<div className={styles.learning_column}>
							<h4>Обсудим:</h4>
							<ul className={styles.list}>
								<li>Задачи интернет-маркетолога и smm-менеджера</li>
								<li>Главные особенности СММ-щика</li>
								<li>Разбор ключевых понятий</li>
								<li>Как создать лицо бренда в соц сети</li>
								<li>Перспективы профессионального развития в сфере</li>
								<li>Особенности площадок Вконтакте и Телеграм</li>
							</ul>
						</div>
						<div className={styles.learning_column}>
							<h4>Сделаем:</h4>
							<ul className={styles.list}>
								<li>Разбор анализа конкурентов</li>
								<li>Разберем что сейчас модно а что нет</li>
								<li>Сделаем описание своего целевого клиента</li>
								<li>Разработаем стратегию продвижения в соц сети</li>
							</ul>
							<p className={styles.note}>
								*по возможности берите на занятие свой ноутбук, так как будем практиковаться.
							</p>
						</div>
					</div>
					<div className={styles.telegram_container}>
						<a href="https://t.me/+X5vP3Ukp7Pg0Y2Yy" target='_blank' className={styles.telegram_button}>
							Вступить в чат Telegram <img src='/bonus/events/icons/telegram.svg' alt='Telegram' />
						</a>
					</div>
				</section>
			</div>
		</section>
	)
}
