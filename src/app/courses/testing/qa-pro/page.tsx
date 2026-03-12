import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[7].course,
	description_one:
		'Углубленный курс мануального и автоматизированного тестирования. Изучите передовые методологии тестирования, научитесь создавать эффективные и всесторонние тест-кейсы.',
	description_two:
		'Сможете автоматизировать ручные тест-кейсы на Java с помощью Selenium. Получите практический опыт и будет готовы к трудоустройству уже через 3 месяца.',
	img: 'testing/qa-pro/hero.svg',
	date: dateStart[7].date,
	duration: '7 месяцев',
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
