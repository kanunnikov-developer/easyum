import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Image from 'next/image';
import Suitable from '../../_components/Suitable/suitable';
import FinalProject from '../../_components/FinalProject/FinalProject';
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
import getRegion from '@/lib/getRegion';
import Tariffs from '../../_components/Tariffs/Tariffs';
import { Suspense } from 'react';
import FAQ from '../../_components/FAQ/FAQ';

const course = {
	title: dateStart[6].course,
	description_one:
		'Освоите популярнейший язык, лежащий в основе большинства сайтов в интернете. Пополните портфолио первыми бизнес-приложениями и коммерческим веб-сайтом.',
	description_two:
		'Научитесь поддерживать работу сайтов и приложений на PHP, что сделает вас востребованным специалистом после курса.',
	img: 'programming/php-junior/hero.svg',
	date: dateStart[6].date,
	duration: '4 месяца',
	duration_number: 4,
	price: dateStart[6].price,
	imgCourse: dateStart[6].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description:
			'У вас нет опыта программирования и знаний из сферы, но есть желание изменить работу и повысить зарплату.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Неопределившимся',
		description: 'Изучали PHP, но решили получить структурированные знания от ментора и пополнить портфолио',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Смежным специалистам',
		description: 'Вы работали тестировщиком, HR или другим специалистом в IT, но решили сменить направление',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'IT - профи',
		description: 'Вы мастерски владеете другим языком программирования, но появилась потребность освоить PHP',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/php.svg',
		title: 'PHP',
		description: 'Объектно-ориентированный язык программирования',
	},
	{
		img: '/courses/ui/instruments/PhpStorm.svg',
		title: 'PhpStorm',
		description: 'Библиотека JavaScript с открытым кодом для создания интерфейсов',
	},
	{
		img: '/courses/ui/instruments/http.svg',
		title: 'HTTP',
		description: 'Протокол, позволяющий получать различные ресурсы, например HTML-документы',
	},
	{
		img: '/courses/ui/instruments/git.svg',
		title: 'Git',
		description: 'Распределенная система управления версиями.',
	},
	{
		img: '/courses/ui/instruments/oop.svg',
		title: 'ООП',
		description: 'ООП - объектно ориентированное программирование на PHP',
	},
	{
		img: '/courses/ui/instruments/laravel.svg',
		title: 'Laravel',
		description: 'Фреймворк для разработки с использованием архитектурной модели MVC',
	},
	{
		img: '/courses/ui/instruments/mysql.svg',
		title: 'MySQL',
		description: 'Объектно-реляционная система управления базами данных',
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
		img: '/courses/ui/instruments/PhpUnit.svg',
		title: 'PhpUnit',
		description: 'Фреймворк для модульного тестирования скриптов PHP',
	},
];

const learning = [
	{
		title: 'Программировать на PHP',
		description: 'Изучите базовые понятия, синтаксис и архитектуру. Будете применять принципы ООП в разработке',
		img: '/courses/ui/learning/10.svg',
		number: '01',
	},
	{
		title: 'Фреймворк Laravel',
		description: 'Освоите современный инструмент для ускоренной и удобной разработки на PHP',
		img: '/courses/ui/learning/14.svg',
		number: '02',
	},
	{
		title: 'Тестированию',
		description:
			'Покроете код автоматическими Unit-тестами, научитесь отладке в Xdebug, чтобы не допустить баги в продакшн',
		img: '/courses/ui/learning/12.svg',
		number: '03',
	},
	{
		title: 'Верстке',
		description: 'Делать адаптивную верстку с помощью HTML, применять каскадные таблицы стилей CSS',
		img: '/courses/ui/learning/6.svg',
		number: '04',
	},
	{
		title: 'Работа с данными и файлами',
		description: 'Освоите SQL, подключите базу данных и сможете управлять ей. Познакомитесь с XML И JSON.',
		img: '/courses/ui/learning/15.svg',
		number: '05',
	},
	{
		title: 'Инфраструктуре',
		description:
			'Познакомитесь с Git для работы в команде, Docker для контейнеризации и Composer для управления библиотеками',
		img: '/courses/ui/learning/8.svg',
		number: '06',
	},
];

const programs = [
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
			'Установка и настройка среды разработки PhpStorm. Запуск первой программы на PHP. Знакомство с версией контроля - Git. Принцип работы веб-серверов и динамических сайтов.',
	},
	{
		title:
			'Разбор основного синтаксиса. Переменные и типы данных. Примитивные и ссылочные типы. Структура кода, методы встроенных объектов. Цепочка видимости. Принципы ветвления, визуализация, блок-схемы.',
	},
	{
		title:
			'Операторы, приоритеты операций. Логические и арифметические операции. Строковые, условные и битовые операторы. Работа с циклами/утверждениями switch, while, for, do/while, break. Тернарный оператор. Области видимости переменных.',
	},
	{
		title:
			'Одномерные и многомерные массивы в PHP. Функции. Аргументы функций. Рекурсия. Применение циклов для работы с массивами. Работа с файлами. Чтение и запись в файл. Файловая система и переадресация.',
	},
	{
		title:
			'HTTP-методы GET и POST. Cookies и сессии. Передача данных из форм и сохранение их в БД MySQL. Реализация загрузки файлов на сервер.',
	},
	{
		title:
			'Авторизация на сайте. Роли пользователей. Реализация доступа к разделам сайта. Шифрование пользовательских данных. Работа с встроенными и пользовательскими функциями.',
	},
	{
		title:
			'Введение в объектно-ориентированное программирование в PHP. Жизненный цикл объекта. Классы и наследование. Полиморфизм и инкапсуляция данных. Что такие интерфейс? Перегрузка методов и рекурсия.',
	},
	{
		title:
			'Примеси. Анонимные функции. Магические методы, контроль типов, трейты, паттерны. Шаблонизаторы. Работа с Twig. Обработка ошибок и исключений в программе.',
	},
	{
		title:
			'Model-View-Controller (MVC) шаблон и как с ним работать. Разбор основных MVC фреймворков. Стандартизация кода.',
	},
	{
		title:
			'Взаимодействие MySQL и PHP. Выборка данных их БД и отображение их на сайте. Разработка собственного веб-проекта с использованием полученных знаний. Написание тестов с помощью PHPUnit.',
	},
	{
		title:
			'Установка Laravel. Настройка Virtual Hosts. Запуск первого Laravel-проекта. MVC в Laravel. Параметры маршрутизации. Создание контроллеров.',
	},
	{
		title:
			'Представления Laravel. Наследование представлений. Master layout. Основы Blade templating engine. Подключение и работа с базой данных MySQL. Работа с Laravel Migrations. CRUD-операции.',
	},
	{
		title:
			'Формы и валидация. Основы валидации. Загрузка файлов. Чтение данных. Передача данных из формы и запись их в базу данных. Middleware. Сброс данных. Отправка Email. Работа с сессией. Работа с mailgun.',
	},
	{
		title:
			'Аутентификация. Реализация привилегий, сброса пароля, аутентификация пользователя, личный кабинет, перенаправление при входе. Разбор популярных фреймворков: Symfony, Yii, Laravel. Краткий обзор каждого. Основные отличия и преимущества.',
	},
	{
		title:
			'Установка и настройка веб-сервера на хостинге Heroku. Настройка домена. Написание и защита финального проекта.',
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
					title={`Чем занимается \n`}
					accent='PHP-разработчик?'
					description={`Сейчас российский и мировой бизнес активно переходит в онлайн. Всем нужны крутые сайты и веб-приложения, которые будут быстрыми и удобными. Большинство из них работает на PHP. \n\n Особенной популярностью язык пользуется в регионах России. Его ценят за простоту, скорость разработки и удобство в обслуживании. Поэтому, зная PHP вы не останетесь без работы - сможете поддерживать существующие продукты, и создавать новые, удовлетворяющие требования рынка. \n\n Только на hh.ru сейчас доступно более 1300 вакансий, от региональных и федеральных компаний.`}
					img='/courses/programming/php-junior/description.svg'
				/>

				<section className={styles.developer}>
					<h2>
						Эти сайты <span className='accent'>написаны</span> на PHP:
					</h2>
					<Image src='/courses/programming/php-junior/develop.svg' width={1170} height={278} alt='Картинка' />
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/programming/php-junior/finalProject.svg'
					title='Корпоративный сайт канцелярского магазина «Кнопка. Арт»'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Программировать на языке PHP',
						'Проектировать базы данных',
						'Создавать файлообменники',
						'Разрабатывать сайты с нуля',
						'Публиковать сайты на хостинге',
					]}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock course={course.title} />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/programming/php-junior/certificate.svg' />

				<Work company_title='Backend-разработчиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='voggaev.svg'
					course={course.title}
					name='Вожжаев Владлен. Профессиональный веб-разработчик на нескольких языках. Опыт разработки 10+ лет.'
					description='Руководитель подразделения AC Soft, Центра креативных индустрий МГТУ им. Н.Э.Баумана. Автор учебника по HTML. Разработчик отечественного конструктора форм.'
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
