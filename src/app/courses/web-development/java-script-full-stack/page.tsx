import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[11].course,
	description_one:
		'Станете самодостаточным веб-разработчиком и сможете самостоятельно выполнять все задачи по созданию сайтов и веб-приложений.',
	description_two:
		'Создадите 4 крупных проекта в портфолио с помощью современных технологий JavaScript и сможете устроиться на позицию Junior в IT-компанию.',
	img: 'web/java-script-full-stack/hero.svg',
	date: dateStart[11].date,
	duration: '6 месяцев',
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
