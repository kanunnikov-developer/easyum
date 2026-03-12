import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[0].course,
	description_one:
		'Освоите профессию с нуля за 5,5 месяцев. Наполните портфолио мощными проектами еще в процессе учебы.',
	description_two: 'Изучите Java-классику и современные фишки (Spring, лямбда-выражения, Stream API, микросервисы)',
	img: 'programming/javajunior/hero.svg',
	date: dateStart[0].date,
	duration: '5,5 месяцев',
};

export default function Page() {
	return (
		<div className='container'>
			<div className={styles.page}>
				<Breadcrumbs />

				<Hero
					title={course.title}
					description_one={course.description_one}
					description_two={course.description_two}
					img={course.img}
					date={course.date}
					duration={course.duration}
				/>
			</div>
		</div>
	);
}
