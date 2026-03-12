import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[22].course,
	description_one: 'Научитесь создавать приложения под Android',
	description_two:
		'Соберете привлекательное портфолио из 4-х проектов, сможете решать реальные задачи Junior разработчика и подготовитесь к трудоустройству в IT-компанию.',
	img: 'mobile/java-android/hero.svg',
	date: dateStart[22].date,
	duration: '4,5 месяца',
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
