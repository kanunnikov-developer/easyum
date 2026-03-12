import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[14].course,
	description_one:
		'Освоите профессию с нуля и будете готовы к первой работе уже через 4 месяца. Научитесь создавать крутые интерфейсы для сайтов и приложений на JavaScript.',
	description_two: 'Наполните портфолио и сможете соревноваться за должность с практиками.',
	img: 'web/java-script-language/hero.svg',
	date: dateStart[14].date,
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
