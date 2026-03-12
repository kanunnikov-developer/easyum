import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[26].course,
	description_one:
		'Изучите основы работы с крупнейшими маркетплейсами, включая Wildberries, Ozon, «Яндекс.Маркет», AliExpress и «СберМегаМаркет».',
	description_two:
		'Научитесь правильно оформлять карточки товаров, освоите основные принципы их продвижения и анализа эффективности на платформах.',
	img: 'other/manager-marketplace/hero.svg',
	date: dateStart[26].date,
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
			</div>
		</div>
	);
}
