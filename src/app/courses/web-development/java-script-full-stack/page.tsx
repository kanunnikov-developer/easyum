import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Image from 'next/image';
import Sallary from '../../_components/Salary/Salary';
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
import Circle from '@/app/_components/Circle/Circle';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { calculatePrices } from '@/lib/priceCalculator';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Курс Full Stack разработчика на JavaScript | Обучение фуллстек с нуля онлайн в ${city}`,
		description: `Запишитесь на курсы Full Stack разработчика на JavaScript и освойте профессию за 7 месяцев! Обучение онлайн и очно в ${city}, доступные цены и помощь в трудоустройстве!`,
		keywords: [
			'Курсы Full Stack разработчика на JavaScript',
			'Курсы Full Stack разработчика на JavaScript для начинающих',
		],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Курс Full Stack разработчика на JavaScript | Обучение фуллстек с нуля онлайн в ${city}`,
			description: `Запишитесь на курсы Full Stack разработчика на JavaScript и освойте профессию за 7 месяцев! Обучение онлайн и очно в ${city}, доступные цены и помощь в трудоустройстве!`,
			url: '/courses/web-development/java-script-full-stack',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Курс Full Stack разработчика на JavaScript с нуля в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses/web-development/java-script-full-stack`,
		},
	};
}

const course = {
	title: dateStart[11].course,
	description_one:
		'Станете самодостаточным веб-разработчиком и сможете самостоятельно выполнять все задачи по созданию сайтов и веб-приложений.',
	description_two:
		'Создадите 4 крупных проекта в портфолио с помощью современных технологий JavaScript и сможете устроиться на позицию Junior в IT-компанию.',
	img: 'web/java-script-full-stack/hero.svg',
	date: dateStart[11].date,
	duration: '6 месяцев',
	duration_number: 6,
	price: dateStart[11].price,
	imgCourse: dateStart[11].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Новичкам, без опыта программирования - чтобы сразу учиться правильно и эффективно стартовать в IT',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Начинающим',
		description: 'Поможем углубить и систематизировать знания, получить обратную связь от опытных наставников',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Разработчикам',
		description:
			'Если вы занимаетесь фронтенд или бэкенд разработкой, то мы поможем расширить свои навыки и повысить зарплату.',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Специалистам',
		description: 'Вы работаете в смежной области и хотите сменить направление, чтобы больше зарабатывать',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/javascript.svg',
		title: 'Javascipt',
		description: 'Язык программирования для создания динамических веб-сайтов',
	},
	{
		img: '/courses/ui/instruments/react.svg',
		title: 'React',
		description: 'Библиотека JavaScript с открытым кодом для создания интерфейсов',
	},
	{
		img: '/courses/ui/instruments/redux.svg',
		title: 'Redux',
		description: 'Библиотека управления состоянием для приложений на React',
	},
	{
		img: '/courses/ui/instruments/git.svg',
		title: 'GitHub',
		description: 'Крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки.',
	},
	{
		img: '/courses/ui/instruments/vue.svg',
		title: 'Vue',
		description: 'Прогрессивный фреймворк для создания гибких веб-приложений',
	},
	{
		img: '/courses/ui/instruments/bootstrap.svg',
		title: 'Bootstrap',
		description: 'Фреймворк для быстрой и адаптивной веб-разработки',
	},
	{
		img: '/courses/ui/instruments/jQuery.svg',
		title: 'jQuery',
		description: 'Библиотека для упрощения работы с JavaScript и взаимодействия с HTML',
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
		img: '/courses/ui/instruments/ajax.svg',
		title: 'XHR и AJAX',
		description: 'Технологии для асинхронного обмена данными между браузером и сервером.',
	},
];

const learning = [
	{
		title: 'Программирование на JavaScript',
		description:
			'Изучите базовые понятия, синтаксис, объектно-ориентированное программирование, сможете решать задачи с помощью алгоритмов',
		img: '/courses/ui/learning/2.svg',
		number: '01',
	},
	{
		title: 'Публикации',
		description: 'Сможете самостоятельно публиковать ваш сайт в интернете',
		img: '/courses/ui/learning/14.svg',
		number: '02',
	},
	{
		title: 'Современные инструменты',
		description: 'Познакомитесь с библиотеками Redux, React и фреймворком Vue.js',
		img: '/courses/ui/learning/12.svg',
		number: '03',
	},
	{
		title: 'Front-end разработка',
		description: 'Сможете разрабатывать интерактивные, живые интерфейсы',
		img: '/courses/ui/learning/6.svg',
		number: '04',
	},
	{
		title: 'Работа в команде',
		description: 'Сможете эффективно работать в команде с другими разработчиками, дизайнерами и тимлидами.',
		img: '/courses/ui/learning/15.svg',
		number: '05',
	},
	{
		title: 'Основы Back-end',
		description: 'Научитесь соединять клиентскую и серверную части, поработаете с API и платформой Node.js.',
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
			'Photoshop для верстальщика. Начало верстки макета. Семантическая верстка. HTML 5. Верстка сайта по готовому макету в формате PSD. Отработка элементов чекбоксов, радио-кнопок.',
	},
	{
		title:
			'Адаптивная верстка. Медиа выражения. Верстка сайта с помощью Desktop похода. Подробный разбор SASS, LESS, SASS, PostCSS. Верстка сайта с помощью Mobile first подхода. Flexbox layout. Обзор графического редактора Figma.',
	},
	{
		title:
			'Методологии верстки БЭМ, OOCSS, SMACSS, Atomic CSS.SVG и WEBP изображения. Разбор и верстка сложных блоков. Flexbox и его свойства.',
	},
	{
		title:
			'Оживляем сайт. Выбор и подключение библиотеки на страницу. Работа с JavaScript. Популярные jQuery-плагины. Создание слайдера на основе плагина Slick.js',
	},
	{
		title:
			'Трансформации. Плавные переходы. Анимации. Обзор готовой анимации Animate.css. Система контроля версий Git. Сборщик проектов Gulp. Настройка и автоматизация задач с помощью Gulp.',
	},
	{
		title:
			'Знакомство с Javascript. Среда разработки WebStorm. Создание своего проекта и первой программы на Javascript. Обзор Git - системы управления версиями.',
	},
	{
		title:
			'Синтаксис JS. Переменные, выражения, операторы, их типы и взаимодействие. Идентификаторы, литералы. Типы данных в Javascript.',
	},
	{
		title:
			'Функции в Javascript. Стрелочные и анонимные функции. Функциональные выражения. Создание и инициализация массива. Команды Pop/Push, Shift/Unshift.',
	},
	{
		title:
			'DOM (Дерево). Определение и функции DOM в JS. Навигация по DOM-элементам (getElement* и querySelector*). Основы работы с событиями. Библиотека jQuery.',
	},
	{
		title:
			'Ajax. Фоновая отправка формы. Загрузка данных в фоне. Прототипное программирование. ОПП в Javascript. Классы. Модули в JS. WebPacker. NodeJS.',
	},
	{
		title:
			'Установка VueJS, знакомство со средой разработки. Написание первого приложения «Hello, world». Изучение директивов: v-if, v-for, v-on, v-model.',
	},
	{
		title:
			'Компоненты во VueJS и их структура. Входящие данные: props. События компонента: $emit. Значения по-умолчанию для props. Составные компоненты. Зоны ответственности. Mixins. Однофайловые компоненты. Работа с приложением «Список дел».',
	},
	{
		title:
			'Изучение принципа DRY. Повторное использование кода. Примеси Mixins. Навигация в приложениях. Работа с библиотекой VueRouter. Схема маршрутов приложения. Вложенные маршруты. Ссылки перехода router-link. Программная навигация. Передача параметров в машруте. Props и параметры маршрута.',
	},
	{
		title:
			'Управление состоянием приложения. Изучение библиотеки Vuex. Работа с хранилищем. Мутации. Геттеры. Работа с приложением “Складской учет”.',
	},
	{
		title:
			'Взаимодействие с сервером. Изучение библиотеки VueResource. Архитектура приложения, на API. Обработка ответа. Авторизация в приложении.',
	},
	{
		title:
			'Шаблон собственного проекта. Утилита vue-cli. Сборка и публикация финальной работы курса: “Интернет магазин спортивных товаров” на хостинге.',
	},
	{
		title:
			'Основы ES2015. Основы React.js. Понятие Виртуальный DOM. React state. React Props. Реакт-элемент. Построение компонентов на JSX. Webpack + Babel.',
	},
	{
		title:
			'Жизненный цикл компонентов. Иерархия компонентов. Состояние компонентов. Сборщик приложений Webpack. React Mixins. React Pure Render. Создание компонентов с помощью ES6 классов. Higher Order Components. Functional Components. Знакомство с Redux.',
	},
	{
		title: 'Middleware в Redux. Redux dev tools. Архитектура React / Redux приложений. Асинхронные actions в Redux. ',
	},
	{
		title:
			'React Router. React Router Hooks. Работа с навигацией в приложении, ссылки и переходы по странице, авторизация пользователя. Интеграция React Router и Redux. Flux. Обзор и структура.',
	},
	{
		title:
			'Работа с иммутабельными данными в приложении. Библиотека ImmutableJS от Facebook. Тестирование приложения. Написание unit-тестов для функций, reducers, actions и компонентов. Enzyme.',
	},
	{
		title: 'Селекторы, нормализация кода. Работа с React Performance. Архитектура приложений на React.',
	},
	{
		title:
			'Установка Node.js. Запуск первой программы. Система модулей. Разбор основных модулей: Path, File System, Readline и др. Знакомство с менеджером пакетов - NPM.',
	},
	{
		title:
			'Асинхронные и синхронные запросы. Особенности работы с Event Loop. Потоки в Node.JS. Node.js как веб-сервер. Работа с файлами, модуль fs. Фреймворк Koa.JS. Конфигурация через модуль config.',
	},
	{
		title:
			'Способы работы с асинхронным кодом. Модуль EventEmitter. Промисы (promises). Async/Await. Работа с модулем Step. Создание собственных событий.',
	},
	{
		title:
			'MVC-фреймворк Express.js. Шаблонизация с помощью Pug или Handlebars. Работа с cookie. Обработка ошибок. Сессия, работа с посетителями. Работа с базой данных Mongo DB в связке с Mongoose. Middleware.',
	},
	{
		title:
			'Библиотека Socket.IO. Реализация простого часа с помощью Socket.IO и Express.js. Авторизация с помощью Passport.JS.',
	},
	{
		title:
			'Тестирование Express приложения. Работа с Mocha и Chai. Практикуем развертывание приложения на примере известных хостингов (Heroku, DigitalOcean). ',
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
					title={`Чем занимается \n`}
					accent='Fullstack разработчик?'
					description={`Fullstack - это программист, разрабатывающий сайты и другие приложения с нуля. У любого сайта есть фронтенд - интерфейс, видимая часть, с которой взаимодействует пользователь, и бэкенд - программный код, внутренняя логика и структура, его серверная часть. Fullstack-специалист объединяет в себе навыки для разработки обеих частей. \n\n Такие специалисты универсальны. Поэтому компании, особенно стартапы или частные заказчики, часто стремятся нанять одного человека под все задачи разработки. Fullstack-специалисты одни из самых востребованных на рынке труда, и их работа достойно оплачивается.`}
					img='/courses/web/java-script-full-stack/description.svg'
				/>

				<section className={styles.block_photos}>
					<div className={styles.photos_top}>
						<div className={styles.photos_item}>
							<div className={styles.photos_image}>
								<Image
									src='/courses/web/java-script-full-stack/photos/1.svg'
									alt='Картинка'
									width={284}
									height={284}
									className={styles.photos_img}
								/>
							</div>
							<p>Верстает и адаптирует страницы на HTML и CSS</p>
						</div>
						<div className={styles.photos_item}>
							<div className={styles.photos_image}>
								<Image
									src='/courses/web/java-script-full-stack/photos/2.svg'
									alt='Картинка'
									width={284}
									height={284}
									className={styles.photos_img}
								/>
							</div>
							<p>Создает пользовательский интерфейс на Vue или React.js</p>
						</div>
					</div>

					<div className={styles.photos_bottom}>
						<div className={styles.photos_item_bottom}>
							<p>Делает сайт “живым” на JavaScript</p>
							<div className={styles.photos_image}>
								<Image
									src='/courses/web/java-script-full-stack/photos/3.svg'
									alt='Картинка'
									width={284}
									height={284}
									className={styles.photos_img}
								/>
							</div>
						</div>
						<div className={styles.photos_item_bottom}>
							<p>Пишет весь backend на Node.js</p>
							<div className={styles.photos_image}>
								<Image
									src='/courses/web/java-script-full-stack/photos/4.svg'
									alt='Картинка'
									width={284}
									height={284}
									className={styles.photos_img}
								/>
							</div>
						</div>
					</div>
				</section>

				<Sallary min={50000} max={290000} />

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/web/java-script-full-stack/finalProject.svg'
					title='Адаптивный, кроссбраузерный сайт интернет-магазина'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Писать чистый код на языке JavaScript',
						'Верстать сайты с помощью HTML&CSS',
						'Разрабатывать клиентскую часть сайта – Front-end',
						'Тестировать готовый проект',
						'Размещать сайт на хостинге',
					]}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock course={course.title} />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/web/java-script-full-stack/certificate.svg' />

				<Work company_title='Fullstack-разработчиков' />

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
							prices={calculatePrices(course.duration_number, 'it')}
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
	const prices = calculatePrices(course.duration_number, region?.subdomain);
	return (
		<Tariffs
			city={region?.city}
			prices={prices}
			course={course.title}
			sale={sale.tariffs}
			imgCourse={course.imgCourse}
			mounth={course.duration_number}
		/>
	);
}
