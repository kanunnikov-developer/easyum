import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import TeacherVideo from '../../_components/TeacherVideo/TeacherVideo';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';

const course = {
	title: dateStart[20].course,
	description_one: 'Научитесь настраивать, запускать и анализировать рекламные компании в Яндексе.',
	description_two:
		'Освоите главные инструменты специалиста по контекстной рекламе и разработаете проект для портфолио. Всего через 2 месяца будете полностью готовы к работе по специальности.',
	img: 'marketing/reklama-ppc/hero.svg',
	date: dateStart[20].date,
	duration: '2 месяца',
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

				<TeacherVideo />

				<GetLesson />

				<Description
					title={`Контекстолог привлекает \n`}
					accent={`новых клиентов`}
					description={`Главная задача специалиста по контекстной рекламе – рекламировать бизнес в интернете и привлекать новых клиентов. \n\n Контекстолог подбирает ключевые слова, настраивает рекламные кампании, анализирует показатели каналов и креативов, ищет способы улучшить результаты и оптимизирует расходы.`}
					img='/courses/testing/qa-avtomation/description.svg'
				/>
			</div>
		</div>
	);
}
