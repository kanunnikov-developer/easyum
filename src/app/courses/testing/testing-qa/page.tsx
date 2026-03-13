import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';

const course = {
	title: dateStart[8].course,
	description_one: 'Тестировщик ПО входит в ТОП-5 самых востребованных it-профессий в 2025 году.',
	description_two:
		'На практике освоите всё необходимое для должности Junior-тестировщика. Найдете первые баги и составите баг-репорт прямо на занятиях.',
	img: 'testing/testing-qa/hero.svg',
	date: dateStart[8].date,
	duration: '3 месяца',
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
					title={`Что делает \n`}
					accent='Тестировщик ПО?'
					description={`Тестировщик ПО занимается выявлением ошибок в работе сайта или сервиса и отправляет их на доработку. \n\n Одна из задач тестировщика – представить себя обычным пользователем и детально проверить корректность работы программы. Вы будете моделировать все возможные ситуации, в которые может попасть пользователь, и смотреть, всё ли работает корректно. А так же научитесь пользоваться специализированными инструментами.`}
					img='/courses/testing/qa-pro/description.svg'
				/>
			</div>
		</div>
	);
}
