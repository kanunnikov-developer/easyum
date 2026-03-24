import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import SwiperProjects from '../../_components/SwiperProjects/SwiperProjects';
import Image from 'next/image';
import Suitable from '../../_components/Suitable/suitable';
import Instruments from '../../_components/Instruments/Instruments';
import Learning from '../../_components/Learning/Learning';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Programm from '../../_components/Programm/Programm';
import Certificate from '../../_components/Certificate/Certificate';
import Work from '../../_components/Work/Work';
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import EasyUm from '../../_components/EasyUm/Easyum';
import Metodist from '../../_components/Metodist/Metodist';
import Reviews from '@/app/_components/Reviews/Reviews';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import { Suspense } from 'react';
import Tariffs from '../../_components/Tariffs/Tariffs';
import getRegion from '@/lib/getRegion';
import FAQ from '../../_components/FAQ/FAQ';

const course = {
	title: dateStart[2].course,
	description_one:
		'Освоите профессию с нуля за 5 месяцев. Научитесь обрабатывать данные и находить в них пользу для бизнеса',
	description_two:
		'Познакомитесь с Python, SQL, Pandas, NumPu и машинным обучением. Создадите собственное приложение для отслеживания погоды.',
	img: 'programming/python-data-science/hero.svg',
	date: dateStart[2].date,
	duration: '4 месяца',
	price: dateStart[2].price,
	imgCourse: dateStart[2].imgCourse,
};

const projects_swiper = [
	{
		img: '/courses/programming/python-data-science/projects/1.svg',
		description: 'Автопилот Tesla',
	},
	{
		img: '/courses/programming/python-data-science/projects/2.svg',
		description: 'Автоматическая постановка диагноза',
	},
	{
		img: '/courses/programming/python-data-science/projects/3.svg',
		description: 'Построение маршрута в навигаторе',
	},
	{
		img: '/courses/programming/python-data-science/projects/4.svg',
		description: 'Поиск товара по фотографии',
	},
	{
		img: '/courses/programming/python-data-science/projects/5.svg',
		description: 'Алгоритм рекомендаций музыки',
	},
	{
		img: '/courses/programming/python-data-science/projects/6.svg',
		description: 'Таргетированная и контекстная реклама',
	},
	{
		img: '/courses/programming/python-data-science/projects/7.svg',
		description: 'Поиск товара по фотографии',
	},
	{
		img: '/courses/programming/python-data-science/projects/8.svg',
		description: 'Нейросети - ChatGPT, Midjourney, Dal-EE и тд.',
	},
];

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Вы никогда не работали в IT, но теперь твердо решили быстро туда попасть.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Неопределившимся',
		description: 'Для нашего курса не нужно математическое образование - мы всему вас научим.',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Смежным специалистам',
		description: 'Вы работали тестировщиком, HR или другим специалистом в IT, но решили сменить направление',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'IT - профи',
		description: 'Вы владеете другим языком программирования, но хотите освоить аналитику на Python',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/python.svg',
		title: 'Python',
		description: 'Объектно-ориентированный язык программирования',
	},
	{
		img: '/courses/ui/instruments/datascience.svg',
		title: 'Data Science',
		description: 'Работа с данными для решения задач бизнеса.',
	},
	{
		img: '/courses/ui/instruments/pycharm.svg',
		title: 'PyCharm',
		description: 'Библиотека для обработки и анализа данных в Python',
	},
	{
		img: '/courses/ui/instruments/numpy.svg',
		title: 'NumPy',
		description: 'Библиотека для математических исчислений',
	},
	{
		img: '/courses/ui/instruments/sql.svg',
		title: 'SQL',
		description: 'Язык, с помощью которого отправляются запросы в базу данных.',
	},
	{
		img: '/courses/ui/instruments/mysql.svg',
		title: 'MySQL',
		description: 'Свободная реляционная система управления базами данных.',
	},
	{
		img: '/courses/ui/instruments/postgresql.svg',
		title: 'PostgreSQL',
		description: 'Свободная объектно-реляционная система управления базами данных',
	},
	{
		img: '/courses/ui/instruments/mongo.svg',
		title: 'MongoBD',
		description: 'No-SQL система управления базами данных',
	},
];

const learning = [
	{
		title: 'Программирование на Python',
		description: 'Изучите базовые понятия, синтаксис, ООП, сможете решать задачи с помощью алгоритмов',
		img: '/courses/ui/learning/1.svg',
		number: '01',
	},
	{
		title: 'Базы данных',
		description: 'Научитесь писать SQL запросы, проектировать базы данных для приложений',
		img: '/courses/ui/learning/5.svg',
		number: '02',
	},
	{
		title: 'Аналитическое мышление',
		description: 'Сможете применять A/B тесты, решать задачи и анализировать большие данные с помощью Python',
		img: '/courses/ui/learning/7.svg',
		number: '03',
	},
	{
		title: 'Инструменты',
		description: 'Будете применять библиотеки Pandas и NumPu',
		img: '/courses/ui/learning/8.svg',
		number: '04',
	},
	{
		title: 'Современные технологии',
		description: 'Научитесь разрабатывать модели машинного обучения',
		img: '/courses/ui/learning/9.svg',
		number: '05',
	},
	{
		title: 'Презентация решений',
		description: 'Сможете формулировать, обосновывать и визуализировать свои аналитические выводы',
		img: '/courses/ui/learning/10.svg',
		number: '06',
	},
];

const programs = [
	{
		title:
			'Введение в Python. Что такие компилятор, интерпретатор. Разбор основных сред разработки. Установка PyCharm.',
	},
	{
		title: 'Работа с примитивными типами, примитивные операции. Логические операторы и функции.',
	},
	{
		title:
			'Менеджмент памяти в Python - что такое и как использовать? Общие ведомости о "Модуле" в Python. Макеты модулей. Среда и алгоритм применения.',
	},
	{
		title:
			'Итератор и генераторы в Python. Бесконечные циклы. Строки. Оператор len. Оператор in. Разбор (parsing) строк',
	},
	{
		title: 'ООП на Python. Разбор ключевых моментов',
	},
	{
		title:
			'Классы в Python. Строение класса. Конструкторы, переменные и методы. Их применение на практике. Поля и методы класса в Python.',
	},
	{
		title:
			'Инкапсуляция. Общедоступные и внутренние атрибуты - работа с ними. Наследование. Родительские и дочерние классы. Класс Mydict.',
	},
	{
		title:
			'Полиморфизм методов. "Утиная" типизация. Проблемы иерархической типизации и Duck typing как метод её решения. абота с исключениями в Python. Конструкция try - except.',
	},
	{
		title:
			'Установка СУБД MySQL. Термины и определения. Агрегация данных. Введение в реляционную модель данных. Разбор архитектуры и основных компонентов.',
	},
	{
		title:
			'Создание многотабличной реляционной базы данных. Отношения между элементами. Проектирование целостности данных.',
	},
	{
		title:
			'SQL 1 .Основы: разбор SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY, GROUP BY, HAVING, DISTINCT, AND & OR.',
	},
	{
		title: 'SQL 2. Объединение нескольких таблиц с помощью: LEFT JOIN, INNER JOIN, RIGHT JOIN, FULL JOIN, CROSS JOIN.',
	},
	{
		title:
			'SQL 3. Основные функции языка SQL: COUNT(), MIN(), SUM(), ROUND() и другие. Разбор основных функции СУБД MySQL и PostgreSQL. Создание пользовательских функций.',
	},
	{
		title: 'Установка СУБД PostgreSQL. Разбор основных возможностей и отличий.',
	},
	{
		title: 'Ввод в нереляционные СУБД. Термины и характеристики NoSQL, на примере СУБД MongoBD.',
	},
	{
		title:
			'Особенности языка программирования Python в контексте Data Science. Исследование и подготовка данных к анализу',
	},
	{
		title:
			'Особенности языка программирования Python в контексте Data Science. Исследование и подготовка данных к анализу',
	},
	{
		title:
			'Проблемы подготовки данных к анализу и пути их решения. Преобразование факторных переменных, мультиколлинеарность.',
	},
	{
		title: 'Введение в машинное обучение. Теория вероятности и линейная алгебра в программировании.',
	},
	{
		title:
			'Классификации и регрессии. Методы ближайшего соседа и опорных векторов (SVM). Деревья решений и ансамбли. Random forest, XGBOOST, lightgbm.',
	},
	{
		title:
			'Нейронные сети. Введение, алгоритм работы, структура. Сборка финального проекта - приложения "Прогноз погоды в Москве"',
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

				<GetLesson course={course.title} />

				<Description
					title={`Что же такое`}
					accent='Data Science?'
					description={`Data Science (или Аналитика данных) – наука по работе с большими объемами данных. Благодаря ей можно быстро решать задачи, требующие обработки огромных массивов данных. \n\n С помощью результа анализа данных, который предоставляет Python Data Science специалист (Data Scientist), бизнес может принимать обоснованные решения и предугадывать желания клиентов.`}
					img='/courses/programming/python-data-science/description.svg'
				/>

				<SwiperProjects
					title='впечатляют!'
					accent='Возможности Data Science'
					description='Этого не было бы, если бы не Data Science:'
					items={projects_swiper}
					col={4}
				/>

				<section className={styles.accent_block}>
					<div className={styles.accent_block__row}>
						<h2>Специалисты Data Science в 3 раза востребованнее других IT-профессий</h2>
						<div className={styles.accent_block__image}></div>
						<Image
							src='/courses/programming/python-data-science/accent_block.svg'
							alt='Картинка'
							width={396}
							height={230}
							className={styles.accent_block__img}
						/>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				{/* -------------------------------------
										Финальный проект
				------------------------------------- */}

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock course={course.title} />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/programming/python-data-science/certificate.svg' />

				<Work company_title='Аналитиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='Troshin.svg'
					course={course.title}
					name={`Трошин Максим. Senior Python-разработчик. \n Опыт разработки 9+ лет.`}
					description='Ведущий преподаватель и эксперт программы.'
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
		/>
	);
}
