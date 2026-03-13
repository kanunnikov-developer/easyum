import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Lider from '../../_components/Lider/Lider';

const course = {
	title: dateStart[10].course,
	description_one:
		'Научитесь тестировать приложения с нуля. Напишите первые автотесты с использованием Python и Selenium прямо на занятиях',
	description_two: 'Освоите актуальные технологии: Jenkins, Docker, Maven, PyCharm, PyTest',
	img: 'testing/python-qa-avtomation/hero.svg',
	date: dateStart[10].date,
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
					title={`Зачем обучаться \n`}
					accent='автотестам?'
					description={`Автоматизация рутинных проверок, ускорение процесса поиска багов – то, к чему движется вся сфера тестирования. \n\n Если вы хотите оставаться востребованным тестировщиком с высокой зарплатой, без автоматизированного тестирования не обойтись. \n\n Освоив написание автотестов на Python, вы сможете быстрее проводить проверки, меньше ошибаться и качественнее выполнять работу. `}
					img='/courses/testing/qa-avtomation/description.svg'
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
