import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Sallary from '../../_components/Salary/Salary';
import Image from 'next/image';
import Instruments from '../../_components/Instruments/Instruments';
import Learning from '../../_components/Learning/Learning';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Programm from '../../_components/Programm/Programm';
import Certificate from '../../_components/Certificate/Certificate';
import Work from '../../_components/Work/Work';
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import EasyUm from '../../_components/EasyUm/Easyum';
import Metodist from '../../_components/Metodist/Metodist';
import TeacherSwiper from '../../_components/TeacherSwiper/TeacherSwiper';
import Reviews from '@/app/_components/Reviews/Reviews';
import PhotosComponent from '@/components/photos/photosComponent';

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

const instruments = [
	{
		img: '/courses/ui/instruments/spring.svg',
		title: 'Spring',
		description: 'Фреймворк для создания веб-приложений на Java',
	},
	{
		img: '/courses/ui/instruments/hibernate.svg',
		title: 'Hibernate',
		description: 'ORM-технология для работы с базами данных',
	},
	{
		img: '/courses/ui/instruments/spring1.svg',
		title: 'Spring Security',
		description: 'Библиотека для обеспечения безопасности в Java-приложениях',
	},
	{
		img: '/courses/ui/instruments/kafka.svg',
		title: 'Kafka',
		description: 'Распределенная система потоковой обработки данных',
	},
	{
		img: '/courses/ui/instruments/lombok.svg',
		title: 'Lombok',
		description: 'Библиотека для упрощения создания Java-кода через аннотации',
	},
	{
		img: '/courses/ui/instruments/docker.svg',
		title: 'Docker',
		description: 'Платформа для контейнеризации приложений и сервисов',
	},
	{
		img: '/courses/ui/instruments/kubernetes.svg',
		title: 'Kubernetes',
		description: 'Оркестратор контейнеров для автоматизации и управления приложениями',
	},
	{
		img: '/courses/ui/instruments/webflux.svg',
		title: 'Spring Webflux',
		description: 'Фреймворк для реактивного программирования в Spring',
	},
	{
		img: '/courses/ui/instruments/mockito.svg',
		title: 'Mockito',
		description: 'Фреймворк для создания мок-объектов в тестировании',
	},
	{
		img: '/courses/ui/instruments/powerMock.svg',
		title: 'PowerMock',
		description: 'Расширение Mockito для тестирования статических методов и конструкторов',
	},
	{
		img: '/courses/ui/instruments/nosql.svg',
		title: 'NoSQL',
		description: 'Группа баз данных, не использующих традиционный SQL.',
	},
	{
		img: '/courses/ui/instruments/RabbitMQ.svg',
		title: 'RabbitMQ',
		description: 'Брокер сообщений для асинхронного обмена данными',
	},
	{
		img: '/courses/ui/instruments/Netty.svg',
		title: 'Netty',
		description: 'Фреймворк для создания высокопроизводительных сетевых приложений',
	},
	{
		img: '/courses/ui/instruments/Prometheus.svg',
		title: 'Prometheus',
		description: 'Инструмент мониторинга и сбора метрик в реальном времени',
	},
	{
		img: '/courses/ui/instruments/Grafana.svg',
		title: 'Grafana',
		description: 'Платформа визуализации данных и мониторинга',
	},
	{
		img: '/courses/ui/instruments/Gradle.svg',
		title: 'Gradle',
		description: 'Инструмент для автоматизации сборки и управления зависимостями',
	},
];

const learning = [
	{
		title: 'Разработка и тестирование микросервисов',
		description: 'Проектировать и разрабатывать гибкие и современные приложения с микросервисной архитектурой',
		img: '/courses/programming/java-middle/learning/1.svg',
		number: '01',
	},
	{
		title: 'Параллелизм и асинхронное программирование',
		description: 'Создавать производительные и отзывчивые приложения',
		img: '/courses/programming/java-middle/learning/2.svg',
		number: '02',
	},
	{
		title: 'Мониторинг и оптимизация использования ресурсов',
		description: 'Выявлять и устранять узкие места в системе для повышения производительности и экономии ресурсов',
		img: '/courses/programming/java-middle/learning/3.svg',
		number: '03',
	},
	{
		title: 'Реактивное программирование',
		description: 'Обеспечивать высокую отзывчивость приложений независимо от нагрузки и сложности операций',
		img: '/courses/programming/java-middle/learning/4.svg',
		number: '04',
	},
	{
		title: 'Работа с брокерами сообщений',
		description:
			'С помощью Kafka и RabbitMQ управлять асинхронным обменом данными между различными компонентами системы',
		img: '/courses/programming/java-middle/learning/5.svg',
		number: '05',
	},
	{
		title: 'Контейнеризация и оркестрация',
		description: 'Научитесь использовать инструмент Docker, доставлять код в продакшн и применять контейнеризацию',
		img: '/courses/programming/java-middle/learning/6.svg',
		number: '06',
	},
];

const programs = [
	{
		title: 'Сборщик проектов Gradle',
	},
	{
		title: 'Unit тесты, PowerMock тесты. Фреймворк Mockito',
	},
	{
		title: 'Библиотека Lombok',
	},
	{
		title: 'Сборщик мусора. Мониторинг памяти и запросов в Java',
	},
	{
		title: 'Java в Docker. Jib плагин в Gradle',
	},
	{
		title: 'Функциональное программирование. Parallel Stream',
	},
	{
		title: 'Шаблоны проектирования: Порождающие, Поведенческие, Структурные',
	},
	{
		title: 'Фреймворк Hibernate. JPQL',
	},
	{
		title: 'Кеширование. Типы ссылок.',
	},
	{
		title: 'Базы данных NoSQL',
	},
	{
		title: 'Фреймворк Spring Boot. Spring MVC',
	},
	{
		title: 'Spring Security',
	},
	{
		title: 'Spring Data JDBC',
	},
	{
		title: 'JMM. Volatile. Happens Before. Lock-free алгоритмы (CAS)',
	},
	{
		title: 'Потокобезопасные коллекции. Concurrent HashMap и пр.',
	},
	{
		title: 'Очереди: RabbitMQ',
	},
	{
		title: 'Брокер сообщений Kafka',
	},
	{
		title: 'Executor. Библиотеки Workers, Executor',
	},
	{
		title: 'Асинхронное программирование. CompletableFuture',
	},
	{
		title: 'Реактивный сервер Netty',
	},
	{
		title: 'Реактивное программирование Spring Webflux',
	},
	{
		title: 'Тестирование микросервисов',
	},
	{
		title: 'Ingress, Egress, Deployment Config, Основные команды Kubernetes, Discovery сервис',
	},
	{
		title: 'Мониторинг: Prometheus, Grafana',
	},
	{
		title: 'System design',
	},
	{
		title: 'Разработка проекта - микросервис на основе Swagger Contract (OpenAPI)',
	},
	{
		title: 'Домашняя работа - разработка микросервиса на основе API. Получение сертификата после сдачи.',
	},
];

const teachers = [
	{
		img: '/courses/ui/TeacherSwiper/Vogaev.svg',
		name: 'Владлен Вожжаев',
		description: 'Руководитель подразделения разработки AC Soft при МГТУ им. Н.Э.Баумана. Опыт в разработке 12+ лет',
	},
	{
		img: '/courses/ui/TeacherSwiper/Muxametov.svg',
		name: 'Дамир Мухаметов',
		description: 'Senior Java разработчик в компании СберФакторинг. Опыт в разработке 8+ лет',
	},
	{
		img: '/courses/ui/TeacherSwiper/Kovaleva.svg',
		name: 'Вита Ковалева',
		description: 'Senior Java-разработчик в Газпромбанке. Технический лид стрима разработки. Опыт в разработке 8+ лет',
	},
];

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

				<section className={styles.suitable}>
					<div className={styles.suitable__text}>
						<h2>
							<span className='accent'>Кому подойдет</span> курс?
						</h2>
						<p>
							Данный курс не рассчитан на новичков. Если вы еще не знакомы с Java, погрузиться в основы языка вы сможете
							на нашем курсе{' '}
							<a href='/courses/programming/java-junior' className={styles.link}>
								Java Junior
							</a>
						</p>
						<span className={styles.suitable__text__description}>
							Если вы уже программируете на Java самостоятельно, или прошли начальное обучение, тогда этот курс для вас.{' '}
							Важно! Запись на курс происходит после предварительного тестирования кандидата на знания основ java
							программирования.
						</span>
					</div>
					<div className={styles.suitable__image}>
						<Image
							src='/courses/testing/qa-avtomation/description.svg'
							alt='Картинка'
							width={374}
							height={268}
							className={styles.img}
						/>
					</div>
				</section>

				{/* ----------------------
							Финальный проект
				---------------------- */}

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/programming/java-middle/certificate.svg' />

				<Work company_title='Java-разработчиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='shulga.svg'
					course={course.title}
					name='Шульга Наталья. Senior Java-разработчик, руководитель академии EasyUM. Опыт разработки 10+ лет.'
					description='Ведущий преподаватель и эксперт программы. Более 30+ выполненных Java-проектов под ее руководством, среди которых crm-системы для зарубежных ресторанов, онлайн казино и пр.'
				/>

				<TeacherSwiper teachers={teachers} />

				<Reviews />

				<section className={styles.photos}>
					<h2>
						<span className='accent'>Фото очных</span> занятий {`\n`} в EasyUM
					</h2>
					<PhotosComponent />
				</section>
			</div>
		</div>
	);
}
