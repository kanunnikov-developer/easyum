import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[9].course,
	description_one:
		'Научитесь тестировать приложения с нуля. Напишите первые автотесты с использованием Java и Selenium прямо на занятиях',
	description_two: 'Освоите актуальные технологии: Jenkins, Docker, Maven, PyCharm, PyTest',
	img: 'testing/qa-avtomation/hero.svg',
	date: dateStart[9].date,
	duration: '4 месяца',
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
