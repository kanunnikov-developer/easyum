import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';

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

				<GetLesson />

				<Description
					title={`Мир креативных индустрий -`}
					accent={`3D моделирование`}
					description={`Навыки 3D моделирования и анимации сейчас востребованы как никогда. Разработка игр, создание рекламы, фильмов и мультфильмов не обходится без 3D графики. \n\n Если вы не хотите себя ограничивать одной сферой, а желаете освоить Autodesk 3ds Max для выполнения разных задач – этот курс идеально вам подойдет. \n\n Вы на практике научитесь работать с текстурами и материалами, светом и тенями, освоите отрисовку объектов, окружения, зданий, интерьеров и анимацию персонажей.`}
					img='/courses/threeD/3d-max/description.svg'
				/>
			</div>
		</div>
	);
}
