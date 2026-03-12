import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[6].course,
	description_one:
		'Освоите популярнейший язык, лежащий в основе большинства сайтов в интернете. Пополните портфолио первыми бизнес-приложениями и коммерческим веб-сайтом.',
	description_two:
		'Научитесь поддерживать работу сайтов и приложений на PHP, что сделает вас востребованным специалистом после курса.',
	img: 'programming/php-junior/hero.svg',
	date: dateStart[6].date,
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
			</div>
		</div>
	);
}
