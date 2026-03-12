import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[13].course,
	description_one: 'Научитесь верстать лендинги, многостраничные сайты, интернет-магазины и мобильные приложения.',
	description_two:
		'Освоите HTML&CSS с нуля до уровня Junior. Сможете начать фрилансить через 2 месяца и продолжать развиваться в веб-разработке на курсе Front-end или Full-Stack.',
	img: 'web/html-css-moskow/hero.svg',
	date: dateStart[13].date,
	duration: '3 месяца',
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
