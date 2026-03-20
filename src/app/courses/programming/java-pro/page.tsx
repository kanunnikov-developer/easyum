import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Image from 'next/image';
import Sallary from '../../_components/Salary/Salary';
import SwiperProjects from '../../_components/SwiperProjects/SwiperProjects';
import Instruments from '../../_components/Instruments/Instruments';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Programm from '../../_components/Programm/Programm';
import Certificate from '../../_components/Certificate/Certificate';
import Work from '../../_components/Work/Work';
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import EasyUm from '../../_components/EasyUm/Easyum';
import Metodist from '../../_components/Metodist/Metodist';
import TeacherSwiper from '../../_components/TeacherSwiper/TeacherSwiper';
import Reviews from '@/app/_components/Reviews/Reviews';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import { Suspense } from 'react';
import Tariffs from '../../_components/Tariffs/Tariffs';
import getRegion from '@/lib/getRegion';

const course = {
	title: dateStart[1].course,
	description_one:
		'Углубленный курс разработки на Java для уверенного старта в IT. Погрузитесь в тонкости языка, научитесь использовать Spring Framework и создавать микросервисы, используя Kafka и Docker.',
	description_two:
		'За 8 месяцев освоите стек технологий с 0 для уровня Middle и соберете портфолио профессионального разработчика.',
	img: 'programming/javapro/hero.svg',
	date: dateStart[1].date,
	duration: '9,5 месяцев',
	price: dateStart[1].price,
	imgCourse: dateStart[1].imgCourse,
};

const projects_swiper = [
	{
		img: '/courses/programming/javapro/projects/1.svg',
		description: 'Сервис email-рассылок',
	},
	{
		img: '/courses/programming/javapro/projects/2.svg',
		description: 'CRM-система студентов и их оценок',
	},
	{
		img: '/courses/programming/javapro/projects/3.svg',
		description: 'Игра Сапер',
	},
	{
		img: '/courses/programming/javapro/projects/4.svg',
		description: 'Игра Black Jack',
	},
	{
		img: '/courses/programming/javapro/projects/5.svg',
		description: 'Бот-эмулятор действий на компьютере',
	},
	{
		img: '/courses/programming/javapro/projects/6.svg',
		description: 'Чат-бот бронирования конференц-зала',
	},
	{
		img: '/courses/programming/javapro/projects/7.svg',
		description: 'Онлайн-сервис тематических тестов',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/java.svg',
		title: 'Java',
		description: 'Объектно-ориентированный язык программирования',
	},
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
		img: '/courses/ui/instruments/git.svg',
		title: 'Git',
		description: 'Распределенная система управления версиями',
	},
	{
		img: '/courses/ui/instruments/kafka.svg',
		title: 'Kafka',
		description: 'Распределенная система потоковой обработки данных',
	},
	{
		img: '/courses/ui/instruments/maven.svg',
		title: 'Maven',
		description: 'Инструмент автоматизации сборки и управления проектами',
	},
	{
		img: '/courses/ui/instruments/apache.svg',
		title: 'Apache Tomcat',
		description: 'Веб-сервер для Java-приложений',
	},
	{
		img: '/courses/ui/instruments/docker.svg',
		title: 'Docker',
		description: 'Контейнеризации приложений и сервисов',
	},
	{
		img: '/courses/ui/instruments/mysql.svg',
		title: 'MySQL',
		description: 'Реляционная система управления базами данных',
	},
	{
		img: '/courses/ui/instruments/json.svg',
		title: 'JSON',
		description: 'Формат обмена данными (структурированный текст)',
	},
];

const programs = [
	{
		title: 'Основы языка Java. Изучение алгоритмов.',
	},
	{
		title: 'ООП в Java: Классы, Интерфейсы, Анонимные классы, Внутренние и Абстрактные классы.',
	},
	{
		title:
			'Стандартные технологии Java SE (Коллекции, Многопоточность, Exception, Логирование, Maven). Версия контроля - Git.',
	},
	{
		title:
			'Новые технологии Java: Stream API, Лямбда-выражения. Работа клиент-серверных приложений. Работа с сетевым чатом, сокетами.',
	},
	{
		title: 'Основы баз данных: MySQL + SQL.',
	},
	{
		title: 'Основы веб разработки: верстка на HTML и CSS.',
	},
	{
		title: 'Основы JavaScript для Java разработчиков.',
	},
	{
		title:
			'Технологии Java EE (веб-разработки на Java): HTTP, JSON, Servlet, JSP, AJAX, Filters. Контейнер сервлетов Tomcat. Работа с Lombok. Разработка финального проекта - написание CRM-системы по учету студентов и успеваемости.',
	},
	{
		title: 'Шаблоны проектирования',
	},
	{
		title: 'Хостинг, домены, аренда и настройка java-сервера (vps). Linux сервера. Администрирование java-сервера.',
	},
	{
		title: 'Введение в Spring. Настройка проекта. Spring web MVС.',
	},
	{
		title: 'Введение в Hibernate. Spring JPA, Spring Data.',
	},
	{
		title:
			'Spring Boot приложения. Основы работы с Docker. Разработка финального проекта - онлайн сервис тематических тестов.',
	},
	{
		title: 'Микросервисы. Функциональные интерфейсы, работа с Appache Kafka.',
	},
	{
		title: 'Разработка финального проекта. Микросервис - email-рассылок.',
	},
	{
		title: 'Введение в DevOps технологии.',
	},
	{
		title: 'Проработка часто-задаваемых вопросов на собеседовании по Java разработке. ',
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
					title={`Легендарная профессия\n`}
					accent='Java разработчик'
					description={`Данный курс включает в себя все самые актуальные и востребованные технологии, которые хотят видеть работодатели в 2025 году: Spring (самый популярный Framework на Java), Spring Boot, Spring MVC, работа с микросервисами, основы DevOps и прочее. \n\n Обучение начинается полностью с 0, и не требует дополнительной подготовки. Во время обучения вы разработаете 4 проекта, среди которых crm-система, 2 игры, сервис отправки массовой рассылки писем, и пр. Данные проекты фактически будут гарантировать вам легкое и успешное прохождение собеседования на позицию Java разработчик.`}
					img='/courses/programming/javajunior/description.svg'
				/>

				<section className={styles.why}>
					<div className={styles.why__row}>
						<div className={styles.why__text}>
							<h2>
								Почему Java <span className='accent'>- мощный старт в программировании?</span>
							</h2>
							<div className={styles.why__description}>
								<h2>Почти 30 лет</h2>
								<p>
									Java занимает первые места в рейтингах популярности десятки лет. Его используют Tesla, Amazon, PayPal,
									Netflix, на нем написана соцсеть Одноклассники и серверная часть РЖД.
								</p>
							</div>
						</div>
						<div className={styles.why__image}>
							<Image src='/courses/programming/hh.svg' alt='' width={500} height={450} className={styles.img} />
						</div>
					</div>
				</section>

				<Sallary min={70000} max={570000} />

				<section className={styles.top_ten}>
					<div className={styles.top_ten__row}>
						<h2>Java входит в топ-10 самых востребованных языков программирования в мире по данным TIOBE</h2>
						<div className={styles.top_ten__desctop_image}>
							<Image src='/courses/programming/topTen_desctop.svg' alt='' width={1170} height={314} />
						</div>
						<div className={styles.top_ten__dessctop_image}>
							<Image src='/courses/programming/topTen_mobile.svg' alt='' width={350} height={430} />
						</div>
					</div>
				</section>

				<Description
					title={`В 2025 году,`}
					accent='спрос на Java разработчиков не снизился!'
					description={`По результату опроса GitHub в 2025 году, почти половина (42%) IT-специалистов рекомендует начать карьеру с программирования на Java. \n\n Такой специалист универсален, и может решать сложные бизнес-задачи, что делает его незаменимым сотрудником.`}
					img='/courses/programming/javajunior/demand.svg'
				/>

				<section className={styles.developer_java}>
					<h2>
						Что можно <span className='accent'>разрабатывать на Java</span>
					</h2>
					<div className={styles.developer_java__grid}>
						<div className={styles.java__column__left}>
							<div className={styles.java__item_left}>
								<div className={styles.java__text}>
									<p>Высоконагруженные системы</p>
									<span>Google, Yandex</span>
								</div>
								<div className={styles.java__image}>
									<Image
										src='/courses/programming/javajunior/developer_java/1.svg'
										alt='Картинка'
										width={135}
										height={135}
										className={styles.java__img}
									/>
								</div>
							</div>
							<div className={styles.java__item_left}>
								<div className={styles.java__text}>
									<p>Банковские приложения</p>
									<span>Сбербанк, Альфа Банк, ВТБ 24</span>
								</div>
								<div className={styles.java__image}>
									<Image
										src='/courses/programming/javajunior/developer_java/2.svg'
										alt='Картинка'
										width={135}
										height={135}
										className={styles.java__img}
									/>
								</div>
							</div>
							<div className={styles.java__item_left}>
								<div className={styles.java__text}>
									<p>Игры</p>
									<span>Minecraft</span>
								</div>
								<div className={styles.java__image}>
									<Image
										src='/courses/programming/javajunior/developer_java/3.svg'
										alt='Картинка'
										width={135}
										height={135}
										className={styles.java__img}
									/>
								</div>
							</div>
						</div>
						<div className={styles.java__7}>
							<Image src='/courses/programming/javajunior/developer_java/7.svg' alt='' width={250} height={259} />
						</div>
						<div className={styles.java__column}>
							<div className={styles.java__item__right}>
								<div className={styles.java__text}>
									<p>Искусственный интеллект</p>
									<span>Whatson, ViaVoice</span>
								</div>
								<div className={styles.java__image}>
									<Image
										src='/courses/programming/javajunior/developer_java/4.svg'
										alt='Картинка'
										width={135}
										height={135}
										className={styles.java__img}
									/>
								</div>
							</div>
							<div className={styles.java__item__right}>
								<div className={styles.java__text}>
									<p>Интернет-магазины</p>
									<span>Ebay, Amazon</span>
								</div>
								<div className={styles.java__image}>
									<Image
										src='/courses/programming/javajunior/developer_java/5.svg'
										alt='Картинка'
										width={135}
										height={135}
										className={styles.java__img}
									/>
								</div>
							</div>
							<div className={styles.java__item__right}>
								<div className={styles.java__text}>
									<p>Мобильные приложения</p>
									<span>Telegram, Signal</span>135
								</div>
								<div className={styles.java__image}>
									<Image
										src='/courses/programming/javajunior/developer_java/6.svg'
										alt='Картинка'
										width={135}
										height={135}
										className={styles.java__img}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<SwiperProjects title={`создадим \n 7 проектов`} accent='На курсе' items={projects_swiper} />

				<Instruments instrument={instruments} />

				<GetLessonBlock />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/programming/javapro/certificate.svg' />

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

				<Duration mounth={course.duration} programs={course.title} />

				<section className={styles.photos}>
					<h2>
						<span className='accent'>Фото очных</span> занятий {`\n`} в EasyUM
					</h2>
					<PhotosComponent />
				</section>

				<Suspense
					fallback={
						<Tariffs
							city='Москва'
							price={course.price}
							course={course.title}
							sale={sale.tariffs}
							imgCourse={course.imgCourse}
						/>
					}
				>
					<Wrapper />
				</Suspense>
			</div>
		</div>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return (
		<Tariffs
			city={region?.city}
			price={course.price}
			course={course.title}
			sale={sale.tariffs}
			imgCourse={course.imgCourse}
		/>
	);
}
