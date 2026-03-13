import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';

const course = {
	title: dateStart[2].course,
	description_one:
		'Освоите профессию с нуля за 5 месяцев. Научитесь обрабатывать данные и находить в них пользу для бизнеса',
	description_two:
		'Познакомитесь с Python, SQL, Pandas, NumPu и машинным обучением. Создадите собственное приложение для отслеживания погоды.',
	img: 'programming/python-data-science/hero.svg',
	date: dateStart[2].date,
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
					title={`Что же такое`}
					accent='Data Science?'
					description={`Data Science (или Аналитика данных) – наука по работе с большими объемами данных. Благодаря ей можно быстро решать задачи, требующие обработки огромных массивов данных. \n\n С помощью результа анализа данных, который предоставляет Python Data Science специалист (Data Scientist), бизнес может принимать обоснованные решения и предугадывать желания клиентов.`}
					img='/courses/programming/python-data-science/description.svg'
				/>
			</div>
		</div>
	);
}
