import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';

const course = {
	title: dateStart[16].course,
	description_one: 'Научитесь создавать креативный визуал, в котором нуждается бизнес.',
	description_two:
		'Получите практический опыт с первого дня обучения. Собёрете внушительное портфолио из востребованных работ - от рекламного баннера до айдентики бренда.',
	img: 'design/graphic-designer/hero.svg',
	date: dateStart[16].date,
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
					title={`Чем занимается \n`}
					accent='графический дизайнер?'
					description={`Графический дизайнер создает визуальное оформление бренда. \n\n Его задача сделать запоминающийся и уникальный дизайн, который полюбится покупателям и поможет продать продукт. \n\n Вы будете разрабатывать логотипы, создавать иллюстрации, придумывать упаковку, фирменный стиль бренда и делать множество других коммерческих задач.`}
					img='/courses/design/graphic-designer/description.svg'
				/>
			</div>
		</div>
	);
}
