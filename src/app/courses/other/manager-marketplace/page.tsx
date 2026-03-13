import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';

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

				<GetLesson />

				<Description
					title={`Маркетплейсы -`}
					accent={`будущее онлайн-бизнеса`}
					description={`На фоне глобального кризиса рынок онлайн торговли в России продолжает демонстрировать устойчивый рост. Доля продаж на маркетплейсах, таких как Wildberries и Ozon, достигла 77% от общего объема онлайн-заказов. \n\n Согласно исследованию «Точка Маркетплейсы», количество продавцов на маркетплейсах в 2024 году выросло на 35%, с лидерами "Яндекс Маркет" (+73%) и Ozon (+67%). Внушительный рост создает конкуренцию и продавцам необходимо эффективно продвигать свои товары.`}
					img='/courses/other/manager-marketplace/description.svg'
				/>
			</div>
		</div>
	);
}
