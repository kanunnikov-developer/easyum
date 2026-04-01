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
								<a href="/courses/programming/python-data-science" className={styles.courses__item}>
									Python <br /> (веб-разработчик)
								</a>
								<a href="/courses/programming/python-data-science" className={styles.courses__item}>
									Python Data Science <br /> (для анализа)
								</a>
							</div>
						</div>
						<div className={styles.header_right}>
							<div className={styles.photo_wrapper}>
								<img src={`/bonus/events/photo1.svg`} alt='Преподаватель' className={styles.header_img}/>
								<div className={styles.location_tag}>
									 Москва / онлайн
								</div>
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
					<p>Python – молодой, но очень востребованный язык программирования. Освоив этот язык, вы сможете заниматься как веб-разработкой, так и созданием серьезных программ для работы с большими данными.</p>
					<br />
					<p>Если у вас накопилось много вопросов касаемо разработки на Python, необязательно часами искать ответы в интернете. Приходите на бесплатное пробное занятие по Python разработке и услышите главную информацию об этом языке, профессиях и перспективах из уст практикующего программиста на Python.</p>
				</section>

				<section className={styles.learning}>
					<h3><span className='accent'>Что будет</span> на уроке?</h3>
					<div className={styles.learning_content}>
						<div className={styles.learning_column}>
							<h4>Обсудим:</h4>
							<ul className={styles.list}>
								<li>Введение в Python</li>
								<li>Задачи, которые решает Python</li>
								<li>Что такое компилятор</li>
								<li>Что такое интерпретатор</li>
								<li>Обзор среды разработки для Python</li>
								<li>Перспективы языка и карьерного роста в 2023 году</li>
								<li>Обсудим как найти свою первую работу в IT</li>
							</ul>
						</div>
						<div className={styles.learning_column}>
							<h4>Сделаем:</h4>
							<ul className={styles.list}>
								<li>Установим на ваш ноутбук весь необходимый инструментарий для разработки на Python</li>
								<li>Разберем основы языка Python</li>
								<li>Создадим и запустим свою первую программу</li>
							</ul>
							<p className={styles.note}>
								*по возможности берите на занятие свой ноутбук, так как будем практиковаться.
							</p>
						</div>
					</div>
					<div className={styles.telegram_container}>
						<a href="https://t.me/+mYTj4Sdff3U2ODM6" target='_blank' className={styles.telegram_button}>
							Вступить в чат Telegram <img src='/bonus/events/icons/telegram.svg' alt='Telegram' />
						</a>
					</div>
				</section>
			</div>
		</section>
	)
}