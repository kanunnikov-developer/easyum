import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Image from 'next/image';
import Sallary from '../../_components/Salary/Salary';
import Suitable from '../../_components/Suitable/suitable';
import Instruments from '../../_components/Instruments/Instruments';
import SwiperProjects from '../../_components/SwiperProjects/SwiperProjects';
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
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import Tariffs from '../../_components/Tariffs/Tariffs';
import { Suspense } from 'react';
import getRegion from '@/lib/getRegion';
import FAQ from '../../_components/FAQ/FAQ';
import Discount from '@/app/_components/Discount/Discount';
import DiscountTariff from '../../_components/Discount/Discount';
import Circle from '@/app/_components/Circle/Circle';

const course = {
	title: dateStart[0].course,
	description_one:
		'Освоите профессию с нуля за 5,5 месяцев. Наполните портфолио мощными проектами еще в процессе учебы.',
	description_two: 'Изучите Java-классику и современные фишки (Spring, лямбда-выражения, Stream API, микросервисы)',
	img: 'programming/javajunior/hero.svg',
	date: dateStart[0].date,
	duration: '5,5 месяцев',
	duration_number: 5.5,
	price: dateStart[0].price,
	imgCourse: dateStart[0].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/9.svg',
		title: 'Новичкам',
		description: 'Вы никогда не работали в IT, но теперь твердо решили быстро туда попасть.',
	},
	{
		img: '/courses/ui/suitable/10.svg',
		title: 'Неопределившимся',
		description: 'Вы хотите научиться программировать, но не знаете с какого языка начать. Java – самый надежный выбор',
	},
	{
		img: '/courses/ui/suitable/11.svg',
		title: 'Смежным специалистам',
		description: 'Вы работали тестировщиком, HR или другим специалистом в IT, но решили сменить направление',
	},
	{
		img: '/courses/ui/suitable/10.svg',
		title: 'IT - профи',
		description: 'Вы мастерски владеете другим языком программирования, но появилась потребность освоить Java',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/java.svg',
		title: 'Java',
		description: 'Объектно-ориентированный язык программирования',
	},
	{
		img: '/courses/ui/instruments/git.svg',
		title: 'Git',
		description: 'Распределенная система управления версиями',
	},
	{
		img: '/courses/ui/instruments/mysql.svg',
		title: 'MySQL',
		description: 'Реляционная система управления базами данных',
	},
	{
		img: '/courses/ui/instruments/spring.svg',
		title: 'Spring',
		description: 'Фреймворк для создания веб-приложений на Java',
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
		img: '/courses/ui/instruments/json.svg',
		title: 'JSON',
		description: 'Формат обмена данными (структурированный текст)',
	},
	{
		img: '/courses/ui/instruments/ajax.svg',
		title: 'AJAX',
		description: 'Позволяет веб-страницам обновляться без перезагрузки',
	},
];

const projects_swiper = [
	{
		img: '/courses/programming/javajunior/projects/1.svg',
		description: 'Сервис email-рассылок',
	},
	{
		img: '/courses/programming/javajunior/projects/2.svg',
		description: 'CRM-система студентов и их оценок',
	},
	{
		img: '/courses/programming/javajunior/projects/3.svg',
		description: 'Игра Сапер',
	},
	{
		img: '/courses/programming/javajunior/projects/4.svg',
		description: 'Игра Black Jack',
	},
];

const learning = [
	{
		title: ' Писать на Java',
		description: 'Изучите базовые понятия, синтаксис, ООП, сможете решать задачи с помощью алгоритмов',
		img: '/courses/ui/learning/1.svg',
		number: '01',
	},
	{
		title: 'Back-end разработка',
		description: 'Сможете создавать серверную часть сервисов и приложений',
		img: '/courses/ui/learning/2.svg',
		number: '02',
	},
	{
		title: 'Архитектура',
		description: 'Будете писать чистый и понятный другим код, который легко читать и редактировать',
		img: '/courses/ui/learning/3.svg',
		number: '03',
	},
	{
		title: 'Создание приложений',
		description: 'Напишете собственные приложения на Java и добавите их в портфолио Java-разработчика',
		img: '/courses/ui/learning/4.svg',
		number: '04',
	},
	{
		title: 'Создание баз данных',
		description: 'Создадите базы данных для приложений, изучите SQL и MySQL',
		img: '/courses/ui/learning/5.svg',
		number: '05',
	},
	{
		title: 'Основы DevOps',
		description: 'Научитесь доставлять код в продакшн и применять контейнеризацию',
		img: '/courses/ui/learning/6.svg',
		number: '06',
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
		title: 'Микросервисы. Функциональные интерфейсы',
	},
	{
		title: 'Разработка финального проекта. Микросервис - email-рассылок.',
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
				<Circle />

				<Hero
					title={course.title}
					description_one={course.description_one}
					description_two={course.description_two}
					img={course.img}
					date={course.date}
					duration={course.duration}
				/>

				<GetLesson course={course.title} />
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

				<section className={styles.popular}>
					<h2>
						Для новичка в программировании <br />
						<span className='accent'>популярность Java – огромный плюс:</span>
					</h2>
					<div className={styles.popular__grid}>
						<div className={styles.popular_item}>
							<span>1</span>
							<p>
								<b>Спрос </b>- миллиарды приложений были написаны на Java за 30 лет, которые нужно постоянно
								дорабатывать и поддерживать
							</p>
						</div>
						<div className={styles.popular_item}>
							<span>2</span>
							<p>
								<b>Серьезность </b>- если нужно разработать что-то сложное и с большой логикой - в основном выбирают
								именно Java
							</p>
						</div>
						<div className={styles.popular_item}>
							<span>3</span>
							<p>
								<b>Солидность </b>- Java разработчиков принято считать наивысшей категорией разработчиков, что
								благоприятно сказывается на зарплате
							</p>
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
									<span>Сбербанк, Альфа Банк, ВТБ</span>
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
					<div className={styles.java__footer_dsc}>
						<p>
							Миллиарды приложений, которыми мы пользуемся каждый день,{' '}
							<span className='accent'>работают благодаря языку Java.</span>
						</p>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<SwiperProjects
					title={`создадим \n 4 проекта`}
					accent='На курсе'
					description='Все проекты оформим в виде портфолио и направим в резюме вашему будущему работодателю.'
					items={projects_swiper}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock course={course.title} />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/programming/javajunior/certificate.svg' />

				<Work company_title='Java-разработчиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='shulga.svg'
					course={dateStart[0].course}
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
							mounth={course.duration_number}
						/>
					}
				>
					<Wrapper />
				</Suspense>

				<DiscountTariff />

				<FAQ />
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
			mounth={course.duration_number}
		/>
	);
}
