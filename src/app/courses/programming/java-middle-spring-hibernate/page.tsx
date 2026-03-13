import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Sallary from '../../_components/Salary/Salary';

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

				<GetLesson />

				<Description
					title={`Почему`}
					accent='Java Middle?'
					description={`Пройдя курс вы сможете претендовать на должность Middle-разработчика. Такие специалисты очень ценятся за способность самостоятельно решать поставленные задачи и получают более высокую зарплату, чем начинающий Junior. \n\n Вы научитесь создавать безопасные и эффективные веб-приложения с использованием Spring Boot, Spring MVC и Spring Security, исследуете Spring Data JDBC для работы с базами данных, а также познакомитесь с Java Memory Model, потокобезопасными коллекциями и асинхронным программированием. \n\n Также курс включает в себя более 20 java-технологий, которые крайне необходимы для работы Java Middle разработчиком, по тенденциям 2025 года.`}
					img='/courses/programming/javajunior/description.svg'
				/>

				<Sallary min={70000} max={570000} />
			</div>
		</div>
	);
}
