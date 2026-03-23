import styles from './styles.module.css';

export default function Statistics() {
	return (
		<section className={styles.statistics}>
			<h2>
				Что такое <span className='accent'>it-курсы EasyUM?</span>
			</h2>
			<div className={styles.statistics__grid}>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/1.png' alt='9 лет опыта' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/2.png' alt='5-7 месяцев обучения' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/3.png' alt='Группы по 12 человек' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/4.png' alt='Помощь с первой работой' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/5.png' alt='Готовое портфолио' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/6.png' alt='Больше тысячи выпускников' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/7.png' alt='В 11 городах России' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/8.png' alt='80% практики' />
				</div>
			</div>
		</section>
	);
}
