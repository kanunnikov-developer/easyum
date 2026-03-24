import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Lider from '../../_components/Lider/Lider';
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
	title: dateStart[4].course,
	description_one:
		'Освоите веб-разработку на Python с нуля за 5 месяцев. Сможете создавать сайты и приложения с помощью популярного фреймворка Django и готовить их к публикации.',
	description_two: 'Соберете 3 проекта в портфолио и подготовитесь к реальной работе в IT-компании.',
	img: 'programming/python-web-development/hero.svg',
	date: dateStart[4].date,
	duration: '4 месяца',
	price: dateStart[4].price,
	imgCourse: dateStart[4].imgCourse,
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
		description: 'Хотите структурировать знания, попрактиковаться и получить обратную связь от ментора',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Смежным специалистам',
		description: 'Вы работали тестировщиком, HR или другим IT-специалистом, но решили сменить направление',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'IT - профи',
		description: 'Вы мастерски владеете другим языком программирования, но теперь появилась потребность освоить Python',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/python.svg',
		title: 'Python',
		description: 'Объектно-ориентированный язык программирования',
	},
	{
		img: '/courses/ui/instruments/pycharm.svg',
		title: 'PyCharm',
		description: 'Библиотека для обработки и анализа данных в Python',
	},
	{
		img: '/courses/ui/instruments/html.svg',
		title: 'HTML 5',
		description: 'Язык разметки для структурирования содержимого веб-страниц',
	},
	{
		img: '/courses/ui/instruments/css.svg',
		title: 'CSS 3',
		description: 'Язык стилей для оформления визуального вида веб-страниц',
	},
	{
		img: '/courses/ui/instruments/git.svg',
		title: 'GitHub',
		description: 'Крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки.',
	},
	{
		img: '/courses/ui/instruments/django.svg',
		title: 'Django',
		description: 'Python веб-фреймворк, который позволяет быстро создавать безопасные веб-сайты',
	},
	{
		img: '/courses/ui/instruments/figma.svg',
		title: 'Figma',
		description: 'Онлайн-сервис для разработки интерфейсов и прототипирования',
	},
	{
		img: '/courses/ui/instruments/unittest.svg',
		title: 'Unittest',
		description: 'Фреймворк для тестирования, входящий в стандартную библиотеку языка Python',
	},
];

const learning = [
	{
		title: 'Программирование на Python',
		description:
			'Изучите базовые понятия, синтаксис, объектно-ориентированное программирование, сможете решать задачи с помощью алгоритмов',
		img: '/courses/ui/learning/1.svg',
		number: '01',
	},
	{
		title: 'Работа с базами данных',
		description:
			'Сможете сохранять и изменять информацию в базе данных, отправлять запросы и настраивать взаимодействие приложения и БД',
		img: '/courses/ui/learning/2.svg',
		number: '02',
	},
	{
		title: 'Фреймворк Django',
		description: 'Будете создавать архитектуру веб-приложений, используя шаблоны проектирования',
		img: '/courses/ui/learning/3.svg',
		number: '03',
	},
	{
		title: 'Верстка',
		description: 'Будете верстать сайты с помощью HTML, применять каскадные таблицы стилей CSS',
		img: '/courses/ui/learning/6.svg',
		number: '04',
	},
	{
		title: 'Работа в команде',
		description: 'Научитесь проверять работоспособность приложения в процессе разработки и анализировать ошибки',
		img: '/courses/ui/learning/7.svg',
		number: '05',
	},
	{
		title: 'Основы DevOps',
		description: 'Научитесь использовать инструмент Docker, доставлять код в продакшн и применять контейнеризацию',
		img: '/courses/ui/learning/8.svg',
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
			'Введение в веб-разработку и интернет. Разбор основных терминов. Разбор всех этапов создания сайта. Ввод в язык разметки - HTML. Блочные и строчные элементы. Поток документа.',
	},
	{
		title: 'Виды элементов. Атрибуты элементов. Гиперссылки. Работа с изображениями и их разновидности.',
	},
	{
		title: 'Основы CSS: базовый синтаксис, селекторы, классы, наследование и каскадирование.',
	},
	{
		title:
			'Сложные селекторы, псевдоклассы и псевдоэлементы. Работа со шрифтами. Семейства, начертания, способы подключения.',
	},
	{
		title:
			'Фоны. Все свойства background. Табличная верстка. Списки. Формы. Создание интерактивной формы обратной связи. Все виды поля input и его атрибуты. Отправка данных на сервер.',
	},
	{
		title:
			'Блочная верстка. Понятие Box Model. Отступы. Обтекание. Блочно-строчные элементы. Позиционирование. Рамки. Верстка карточек товаров.',
	},
	{
		title:
			'Установка Django. Настройка среды разработки. Разбор технических возможностей. Структура проекта Django. Запуск веб-сервера для разработки.',
	},
	{
		title:
			'Подключение системы администрирования Django. Понятие "Пользователя" в Django. Создание иерархии пользователей. Отображение объектов, подключение моделей.',
	},
	{
		title: 'Настройка системы администрирования Django. Использование шаблонов.',
	},
	{
		title: 'База данных. Способы хранения данных, создание и администрирование базы данных сайты в Django.',
	},
	{
		title:
			'Работа со страницами и формами в Django. Создание первого View. Использование шаблонов HTML в Django. Фильтры и работа с ними.',
	},
	{
		title:
			'Работа с файлами в Django. Настройка работы с файлами, добавление статических файлов, работа с медиа-файлами.',
	},
	{
		title: 'Модульное тестирование. Средства тестирования. Настройка веб-сервера для Django',
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
					title={`Почему`}
					accent='Python?'
					description={`Python – это про будущее. Код на Python пишется в разы легче и быстрее, чем на других языках. Это обеспечило ему невероятную популярность и повсеместность использования. Google, YouTube, Dropbox, Spotify и Netflix и множество других компаний активно используют его в своих продуктах. \n\n Веб-разработка на Python станет отличным стартом карьеры для новичка. Его часто рекомендуют для изучения тем, кто никогда не изучал программирование.`}
					img='/courses/programming/python-web-development/description.svg'
				/>

				<Lider
					img='/courses/programming/python-web-development/lider.svg'
					title='–  ваш главный партнер по работе'
					accent='Python'
				/>

				<section className={styles.why}>
					<h2>
						Почему Python <span className='accent'>советуют новичкам</span>
					</h2>
					<div className={styles.why__grid}>
						<div className={styles.why__card}>
							<div className={styles.why__image}>
								<Image
									src='/courses/programming/python-web-development/why/1.svg'
									alt='Картинка'
									width={200}
									height={200}
									className={styles.why__img}
								/>
							</div>
							<div className={styles.why__text}>
								<p>Простой в изучении и работе</p>
								<span>
									Синтаксис Python проще чем у других популярных языков. Он понятно и логично спроектирован, разобраться
									в нем новичку проще и быстрее. Чтобы написать ПО вам потребуется в разы меньше кода.
								</span>
							</div>
						</div>
						<div className={styles.why__card}>
							<div className={styles.why__image}>
								<Image
									src='/courses/programming/python-web-development/why/2.svg'
									alt='Картинка'
									width={200}
									height={200}
									className={styles.why__img}
								/>
							</div>
							<div className={styles.why__text}>
								<p>Разнообразное применение</p>
								<span>
									Python открывает перед вами много дверей: веб-сайты, мобильные и десктоп приложения, автотестирование,
									машинное обучение, нейросети и даже научные исследования.
								</span>
							</div>
						</div>
						<div className={styles.why__card}>
							<div className={styles.why__image}>
								<Image
									src='/courses/programming/python-web-development/why/3.svg'
									alt='Картинка'
									width={200}
									height={200}
									className={styles.why__img}
								/>
							</div>
							<div className={styles.why__text}>
								<p>Очень высокий спрос</p>
								<span>
									Язык очень популярен как в стартапах, так и в больших компаниях с крупными проектами. По данным hh.ru,
									больше 8 000 вакансий открыты на должность Python-разработчик.
								</span>
							</div>
						</div>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock course={course.title} />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/programming/python-web-development/certificate.svg' />

				<Work company_title='Python-разработчиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='troshin.svg'
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
