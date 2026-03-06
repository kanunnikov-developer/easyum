import styles from './styles.module.css';

export default function Statistics() {
	return (
		<section className={styles.statistics}>
			<h2>
				Что такое <span className='accent'>it-курсы EasyUM?</span>
			</h2>
			<div className={styles.statistics__grid}>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/1.svg' alt='9 лет опыта' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/2.svg' alt='5-7 месяцев обучения' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/3.svg' alt='Группы по 12 человек' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/4.svg' alt='Помощь с первой работой' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/5.svg' alt='Готовое портфолио' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/6.svg' alt='Больше тысячи выпускников' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/7.svg' alt='В 11 городах России' />
				</div>
				<div className={styles.statistics__item}>
					<img src='/main/statistics/8.svg' alt='80% практики' />
				</div>
			</div>
		</section>
	);
}
