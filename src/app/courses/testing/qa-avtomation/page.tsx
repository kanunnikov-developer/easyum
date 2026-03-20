import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Lider from '../../_components/Lider/Lider';
import Suitable from '../../_components/Suitable/suitable';
import { title } from 'process';
import Instruments from '../../_components/Instruments/Instruments';
import EasyUm from '../../_components/EasyUm/Easyum';
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Learning from '../../_components/Learning/Learning';
import Programm from '../../_components/Programm/Programm';
import Certificate from '../../_components/Certificate/Certificate';
import Work from '../../_components/Work/Work';
import Metodist from '../../_components/Metodist/Metodist';
import Reviews from '@/app/_components/Reviews/Reviews';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import getRegion from '@/lib/getRegion';
import Tariffs from '../../_components/Tariffs/Tariffs';
import { Suspense } from 'react';

const course = {
	title: dateStart[9].course,
	description_one:
		'Научитесь тестировать приложения с нуля. Напишите первые автотесты с использованием Java и Selenium прямо на занятиях',
	description_two: 'Освоите актуальные технологии: Jenkins, Docker, Maven, PyCharm, PyTest',
	img: 'testing/qa-avtomation/hero.svg',
	date: dateStart[9].date,
	duration: '4 месяца',
	price: dateStart[9].price,
	imgCourse: dateStart[9].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description:
			'Вы не работали в IT, не програмировали и не занимались тестированием. Начинайте карьеру с чистого листа!',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Начинающим',
		description: 'Вы уже достигли в ручном тестировании высокого уровня и хотите повысить профессионализм',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Начинающим Java-разработчикам',
		description: 'Вы программируете на Java и хотели бы освоить инструменты для написания автотестов',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Специалистам на других языках',
		description:
			'Вы работали в IT и хотите освоить автотестирование на Java для текущей работы или для смены профессии',
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
		description: 'Фреймворк для разработки Java-приложений',
	},
	{
		img: '/courses/ui/instruments/hibernate.svg',
		title: 'Hibernate',
		description: 'ORM-технология для работы с базами данных',
	},
	{
		img: '/courses/ui/instruments/git.svg',
		title: 'Git',
		description: 'Распределенная система управления версиями.',
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
		description: 'Платформа для контейнеризации приложений и сервисов',
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

const learning = [
	{
		title: 'Программировать на Java',
		description:
			'Изучите базовые понятия, синтаксис, объектно-ориентированное программирование, сможете решать задачи с помощью алгоритмов',
		img: '/courses/ui/learning/11.svg',
		number: '01',
	},
	{
		title: 'Писать автотесты',
		description: 'Научитесь автоматизировать процесс ручного тестирования на Java в Selenium',
		img: '/courses/ui/learning/2.svg',
		number: '02',
	},
	{
		title: 'Тестировать веб-сервисы',
		description: 'Сможете проводить комплексное ручное тестирование и писать тестовую документацию',
		img: '/courses/ui/learning/23.svg',
		number: '03',
	},
	{
		title: 'Работать с фреймворками',
		description:
			'Освоите 2 самых популярных фреймворка для тестировщика и сможете создавать на них тесты разной сложности',
		img: '/courses/ui/learning/22.svg',
		number: '04',
	},
	{
		title: 'Тестировать Rest API',
		description: 'Научитесь проверять реальные программы на соответствие требованиям производительности и надежности',
		img: '/courses/ui/learning/12.svg',
		number: '05',
	},
	{
		title: 'Основам DevOps',
		description: 'Познакомитесь с инструментом Docker и освоите контейнеризацию',
		img: '/courses/ui/learning/4.svg',
		number: '06',
	},
];

const programs = [
	{
		title: 'Основы языка Java. Изучение алгоритмов. ',
	},
	{
		title: 'ООП в Java: Классы, Интерфейсы, Анонимные классы, Внутренние и Абстрактные классы.',
	},
	{
		title:
			'Введение в Selenium. Знакомство с Selenium IDE, установка, запись, сохранение и ручная доработка сценариев.',
	},
	{
		title: 'Разработка тестов. Поиск элементов, проверка, использование переменных и выполнение фрагментов JS-кода.',
	},
	{
		title:
			'Запуск теста. Консоль, запуск в разных браузерах и сохранение тестов. Знакомство с SelBlocks, выполнение сценария с учетом условий. Загрузка данных из внешних файлов.',
	},
	{
		title:
			'Запуск браузеров – как выбрать «правильную» версию? Особенности запуска на разных ОС, Capabilities и Cookies. Работа с несколькими браузерами одновременно.',
	},
	{
		title: 'Элементы и локаторы. Локаторы, типы, отладка и надежность. Элементы, поиск, списки, поиск внутри элемента.',
	},
	{
		title: 'Действия с элементами. Простые и сложные действия. Настройка, запуск, сохранение.',
	},
	{
		title:
			'WebDriverWait. Ожидания: появления, видимости, исчезновения и свойств элемента. PageObjects, определение, виды реализации, альтернативы.',
	},
	{
		title: 'Расширения. Драйверы, альтернативные API и BDD.',
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
					title={`Зачем обучаться \n`}
					accent='автотестам?'
					description={`Автоматизация рутинных проверок, ускорение процесса поиска багов – то, к чему движется вся сфера тестирования. \n\n Если вы хотите оставаться востребованным тестировщиком с высокой зарплатой, без автоматизированного тестирования не обойтись. \n\n Освоив написание автотестов на Java, вы сможете быстрее проводить проверки, меньше ошибаться и качественнее выполнять работу. `}
					img='/courses/testing/qa-avtomation/description.svg'
				/>

				<Lider img='/courses/testing/qa-avtomation/lider.svg' title='–  ваш главный партнер по работе' accent='Java' />

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/testing/qa-avtomation/certificate.svg' />

				<Work company_title='Автотестировщиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='shulga.svg'
					course={course.title}
					name='Шульга Наталья. Senior Java-разработчик, руководитель академии EasyUM. Опыт разработки 10+ лет.'
					description='Ведущий преподаватель и эксперт программы. Более 30+ выполненных Java-проектов под ее руководством, среди которых crm-системы для зарубежных ресторанов, онлайн казино и пр.'
				/>

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
