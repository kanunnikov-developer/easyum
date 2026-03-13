import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Lider from '../../_components/Lider/Lider';

const course = {
	title: dateStart[4].course,
	description_one:
		'Освоите веб-разработку на Python с нуля за 5 месяцев. Сможете создавать сайты и приложения с помощью популярного фреймворка Django и готовить их к публикации.',
	description_two: 'Соберете 3 проекта в портфолио и подготовитесь к реальной работе в IT-компании.',
	img: 'programming/python-web-development/hero.svg',
	date: dateStart[4].date,
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

				<GetLesson />

				<Description
					title={`Почему`}
					accent='Python?'
					description={`Python – это про будущее. Код на Python пишется в разы легче и быстрее, чем на других языках. Это обеспечило ему невероятную популярность и повсеместность использования. Google, YouTube, Dropbox, Spotify и Netflix и множество других компаний активно используют его в своих продуктах. \n\n Веб-разработка на Python станет отличным стартом карьеры для новичка. Его часто рекомендуют для изучения тем, кто никогда не изучал программирование.`}
					img='/courses/programming/python-web-development/description.svg'
				/>

				<Lider
					img='/courses/programming/python-web-development/lider.svg'
					title='–  ваш главный партнер по работе'
					accent='Python'
				/>
			</div>
		</div>
	);
}
