import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[8].course,
	description_one: 'Тестировщик ПО входит в ТОП-5 самых востребованных it-профессий в 2025 году.',
	description_two:
		'На практике освоите всё необходимое для должности Junior-тестировщика. Найдете первые баги и составите баг-репорт прямо на занятиях.',
	img: 'testing/testing-qa/hero.svg',
	date: dateStart[8].date,
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
