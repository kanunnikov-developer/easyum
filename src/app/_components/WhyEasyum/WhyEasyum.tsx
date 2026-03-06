import styles from './styles.module.css';
import cn from 'classnames';

export default function WhyEasyum() {
	return (
		<section className={styles.section}>
			<div className={styles.section__row}>
				<h2>
					<span className='accent'>Почему EasyUM</span> помогает изучить новую профессию и найти ту самую работу
				</h2>
				<div className={styles.stats}>
					<div className={styles.statsGrid}>
						<div className={styles.statItem}>
							<div className={styles.statNumber}>77</div>
							<div className={styles.statLabel}>городов для {`\n`} очного обучения</div>
						</div>

						<div className={cn(styles.statItem, styles.mobile)}>
							<div className={styles.statNumber}>05</div>
							<div className={styles.statLabel}>месяцев средняя {`\n`} длительность курса</div>
						</div>

						<div className={styles.statItem}>
							<div className={styles.statNumber}>09</div>
							<div className={styles.statLabel}>лет опыта {`\n`} в IT-образовании</div>
						</div>

						<div className={cn(styles.statItem, styles.mobile)}>
							<div className={styles.statNumber}>26</div>
							<div className={styles.statLabel}>курсов всех {`\n`} направлений</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
