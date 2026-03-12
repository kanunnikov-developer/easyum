import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[3].course,
	description_one:
		'Изучите один из самых универсальных языков в мире и получите фундаментальные знания программиста. Сможете участвовать в разработке сложного высоконагруженного ПО - от видеоигр и умных гаджетов, до банковских продуктов и беспилотных дронов.',
	description_two: 'За 4 месяца освоите инструменты Junior С++ разработчика и соберете проекты для портфолио.',
	img: 'programming/c-plus-plus/hero.svg',
	date: dateStart[3].date,
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
