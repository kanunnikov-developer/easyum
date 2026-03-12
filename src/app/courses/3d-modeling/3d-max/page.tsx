import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[24].course,
	description_one: 'Научитесь разрабатывать трехмерные здания, интерьеры и анимированных персонажей.',
	description_two:
		'Освоите ключевые инструменты Autodesk 3ds Max. Соберете портфолио и сможете брать проекты на фрилансе или начать карьеру в 3D моделировании.',
	img: 'threeD/3d-max/hero.svg',
	date: dateStart[24].date,
	duration: '2,5 месяца',
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
