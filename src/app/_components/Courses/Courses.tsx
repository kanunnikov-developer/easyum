import styles from './styles.module.css';
import CoursesTabs from './ui/Tabs';

export default function Courses() {
	return (
		<section className={styles.courses}>
			<h2>
				<span className='accent'>Старт</span> {'\n'}ближайших курсов
			</h2>
			<div className={styles.tabs}>
				<CoursesTabs />
			</div>
		</section>
	);
}
