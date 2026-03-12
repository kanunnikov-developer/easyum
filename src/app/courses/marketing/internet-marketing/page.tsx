import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[19].course,
	description_one:
		'Научитесь составлять стратегии продвижения, работать с таргетированной, контекстной рекламой, SEO, анализировать и оптимизировать результаты кампаний.',
	description_two:
		'Освоите популярные инструменты продвижения и будете полностью готовы к работе интернет-маркетолога в компании или на фрилансе.',
	img: 'marketing/internet-marketing/hero.svg',
	date: dateStart[19].date,
	duration: '4,5 месяца',
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
