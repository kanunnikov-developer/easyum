import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[23].course,
	description_one: 'Научитесь создавать приложения для устройств Apple на языке программирования Swift.',
	description_two:
		'Создатите первое приложение прямо на занятиях. Наполните портфолио, составите резюме и будете полностью готовы к должности iOS-разработчик на Swift.',
	img: 'mobile/mobiledev-ios/hero.svg',
	date: dateStart[23].date,
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
