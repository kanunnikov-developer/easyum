import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Sallary from '../../_components/Salary/Salary';

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

				<GetLesson />

				<Description
					title={`С++ разработчик`}
					accent='- это почетно!'
					description={`Язык программирования С++ очень гибкий, быстрый и высокопроизводительный. За 40 лет нем было написано огромное количество важнейших для мировой экономики продуктов. Разработчики на С++ востребованы не останутся без работы в любых условиях. \n\n Современный программист Си Плюс Плюс может разрабатывать игры, графические движки, компоненты для операционных систем, сетевые и серверные приложения, драйверы устройств, базы данных и многое другое.`}
					img='/courses/programming/c-plus-plus/description.svg'
				/>

				<Sallary min={50000} max={200000} />
			</div>
		</div>
	);
}
