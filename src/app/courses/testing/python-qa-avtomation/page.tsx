import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Lider from '../../_components/Lider/Lider';
import Suitable from '../../_components/Suitable/suitable';
import Instruments from '../../_components/Instruments/Instruments';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Programm from '../../_components/Programm/Programm';
import Certificate from '../../_components/Certificate/Certificate';
import Work from '../../_components/Work/Work';
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import EasyUm from '../../_components/EasyUm/Easyum';
import Reviews from '@/app/_components/Reviews/Reviews';
import Metodist from '../../_components/Metodist/Metodist';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import { Suspense } from 'react';
import Tariffs from '../../_components/Tariffs/Tariffs';
import getRegion from '@/lib/getRegion';
import FAQ from '../../_components/FAQ/FAQ';

const course = {
	title: dateStart[10].course,
	description_one:
		'Научитесь тестировать приложения с нуля. Напишите первые автотесты с использованием Python и Selenium прямо на занятиях',
	description_two: 'Освоите актуальные технологии: Jenkins, Docker, Maven, PyCharm, PyTest',
	img: 'testing/python-qa-avtomation/hero.svg',
	date: dateStart[10].date,
	duration: '4 месяца',
	duration_number: 4,
	price: dateStart[10].price,
	imgCourse: dateStart[10].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Вы никогда не работали в IT, но теперь твердо решили быстро туда попасть.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Неопределившимся',
		description:
			'Вы уже достигли в ручном тестировании высокого уровня и хотите стать автотестировщиком, повысить профессионализм и зарабатывать больше',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Python-разработчикам',
		description: 'Вы программируете на Python и хотели бы освоить инструменты для написания автотестов',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Специалистам на других языках',
		description: 'Вы связаны с IT (например, работали HR-менеджером) и хотите сменить должность. Самое время начать!',
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
		title: 'Pytest',
		description: 'Работа с данными для решения задач бизнеса.',
	},
	{
		img: '/courses/ui/instruments/pycharm.svg',
		title: 'PyCharm',
		description: 'Библиотека для обработки и анализа данных в Python',
	},
	{
		img: '/courses/ui/instruments/api.svg',
		title: 'API',
		description: 'Интерфейс для взаимодействия программ и сервисов.',
	},
	{
		img: '/courses/ui/instruments/docker.svg',
		title: 'Docker',
		description: 'Платформа для контейнеризации приложений и сервисов',
	},
	{
		img: '/courses/ui/instruments/selenium.svg',
		title: 'Selenium IDE',
		description: 'Автоматизация тестирования веб-приложений.',
	},
	{
		img: '/courses/ui/instruments/sql.svg',
		title: 'SQL',
		description: 'Язык, с помощью которого отправляются запросы в базу данных.',
	},
	{
		img: '/courses/ui/instruments/mysql.svg',
		title: 'Jenkins',
		description: 'Свободная реляционная система управления базами данных.',
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
			'Введение в автоматизированное тестирование. Разбор целей автоматизации. Знакомство с Pytest. Разработка первого автотеста на Pytest.',
	},
	{
		title: 'Параметризация тестов. Подключение API. Тестирование реальных приложений.',
	},
	{
		title: 'Протоколы передачи данных: http(s), gRPC(protobuf), GraphQL. Requests.',
	},
	{
		title:
			'Знакомство с контрактными тестами. Работа над усложнением тестов. Data Driven Testing (DDT) для API. Обучение работе с базами данных.',
	},
	{
		title: 'Разработка автотестов. SDK, теймплейты, статичные входные данные. Генерация.',
	},
	{
		title:
			'Веб-автоматизация на Python. UI-тестирование и автоматизация. Фреймворк Selenium WebDriver. Поиск элементов с помощью WebDriver.',
	},
	{
		title: 'Селекторы CSS. Сложные CSS-локаторы и ожидания элементов. XPath-локаторы. Разработка автотеста.',
	},
	{
		title: 'Введение в Docker. Контейнеризация. Оркестрация и взаимодействие контейнеров.',
	},
	{
		title: 'Непрерывная интеграция, Jenkins. Построение тестовых окружений.',
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
					title={`Зачем обучаться \n`}
					accent='автотестам?'
					description={`Автоматизация рутинных проверок, ускорение процесса поиска багов – то, к чему движется вся сфера тестирования. \n\n Если вы хотите оставаться востребованным тестировщиком с высокой зарплатой, без автоматизированного тестирования не обойтись. \n\n Освоив написание автотестов на Python, вы сможете быстрее проводить проверки, меньше ошибаться и качественнее выполнять работу. `}
					img='/courses/testing/qa-avtomation/description.svg'
				/>

				<Lider
					img='/courses/programming/python-web-development/lider.svg'
					title='–  ваш главный партнер по работе'
					accent='Python'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<Instruments instrument={instruments} />

				<GetLessonBlock course={course.title} />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/testing/python-qa-avtomation/certificate.svg' />

				<Work company_title='Автотестировщиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='Troshin.svg'
					course={course.title}
					name='Трошин Максим. Senior Python-разработчик. Опыт разработки 9+ лет.'
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
							mounth={course.duration_number}
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
			mounth={course.duration_number}
		/>
	);
}
