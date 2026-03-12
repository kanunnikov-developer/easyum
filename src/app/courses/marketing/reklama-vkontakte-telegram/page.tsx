import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[21].course,
	description_one:
		'Научитесь настраивать эффективную таргетированную рекламу в социальных сетях. Освоите все доступные в 2025 году площадки и запустите первые рекламные кампании с реальным бюджетом.',
	description_two: 'Оформите ваш первый крупный кейс в портфолио и будете готовы брать заказы уже через 1,5 месяца.',
	img: 'marketing/reklama-vkontakte-telegram/hero.svg',
	date: dateStart[21].date,
	duration: '1,5 месяца',
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
