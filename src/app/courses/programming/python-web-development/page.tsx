import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[4].course,
	description_one:
		'Освоите веб-разработку на Python с нуля за 5 месяцев. Сможете создавать сайты и приложения с помощью популярного фреймворка Django и готовить их к публикации.',
	description_two: 'Соберете 3 проекта в портфолио и подготовитесь к реальной работе в IT-компании.',
	img: 'programming/python-web-development/hero.svg',
	date: dateStart[4].date,
	duration: '5 месяцев',
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
