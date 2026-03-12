import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[12].course,
	description_one:
		'Освоите профессию с нуля и будете готовы к первой работе уже через 5 месяцев. Научитесь создавать крутые интерфейсы для сайтов и приложений на JavaScript.',
	description_two: 'Наполните портфолио 3 проектами и сможете соревноваться за должность с практиками.',
	img: 'web/javascript-front-end/hero.svg',
	date: dateStart[12].date,
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
