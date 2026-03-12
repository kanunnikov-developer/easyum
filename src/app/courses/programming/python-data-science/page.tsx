import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[2].course,
	description_one:
		'Освоите профессию с нуля за 5 месяцев. Научитесь обрабатывать данные и находить в них пользу для бизнеса',
	description_two:
		'Познакомитесь с Python, SQL, Pandas, NumPu и машинным обучением. Создадите собственное приложение для отслеживания погоды.',
	img: 'programming/python-data-science/hero.svg',
	date: dateStart[2].date,
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
