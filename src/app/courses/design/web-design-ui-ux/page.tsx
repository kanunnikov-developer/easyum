import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[15].course,
	description_one:
		'На практике научитесь проектировать удобные и креативные сайты, применяя современные технологии веб-дизайна.',
	description_two:
		'Освоите необходимые навыки и инструменты, соберете крутое портфолио. Сможете с нуля проектировать веб-сайты и мобильные приложения, и претендовать на позицию Junior.',
	img: 'design/web-design-ui-ux/hero.svg',
	date: dateStart[15].date,
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
			</div>
		</div>
	);
}
