import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[1].course,
	description_one:
		'Углубленный курс разработки на Java для уверенного старта в IT. Погрузитесь в тонкости языка, научитесь использовать Spring Framework и создавать микросервисы, используя Kafka и Docker.',
	description_two:
		'За 8 месяцев освоите стек технологий с 0 для уровня Middle и соберете портфолио профессионального разработчика.',
	img: 'programming/javapro/hero.svg',
	date: dateStart[1].date,
	duration: '9,5 месяцев',
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
