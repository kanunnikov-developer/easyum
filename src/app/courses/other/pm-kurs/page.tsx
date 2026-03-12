import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[25].course,
	description_one:
		'Научитесь управлять IT-проектом от расстановки приоритетов по задачам до коммуникации с клиентом и составления документации.',
	description_two:
		'Освоите ключевые инструменты проджект-менеджера, hard и soft skills. Сможете зарабатывать без навыков программирования наравне с разработчиками.',
	img: 'other/pm-kurs/hero.svg',
	date: dateStart[25].date,
	duration: '2 месяца',
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
