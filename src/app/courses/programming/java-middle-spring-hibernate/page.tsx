import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';

const course = {
	title: dateStart[5].course,
	description_one:
		'Погрузитесь в мир высокопроизводительных технологий и освоите передовые инструменты программирования.',
	description_two:
		'В программе: Lombok, Docker, Spring BOOT, Spring Security, Kafka, Netty, RabbitMQ и пр. технологии, необходимые для работы Middle разработчиком. \n\n Разработаете свой микросервис на основе Swagger Contract (OpenAPI)',
	img: 'programming/java-middle/hero.svg',
	date: dateStart[5].date,
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
