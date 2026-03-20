import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Suitable from '../../_components/Suitable/suitable';
import Lider from '../../_components/Lider/Lider';
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
import TeacherSwiper from '../../_components/TeacherSwiper/TeacherSwiper';
import Reviews from '@/app/_components/Reviews/Reviews';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import { Suspense } from 'react';
import Tariffs from '../../_components/Tariffs/Tariffs';
import getRegion from '@/lib/getRegion';

const course = {
	title: dateStart[14].course,
	description_one:
		'Освоите профессию с нуля и будете готовы к первой работе уже через 4 месяца. Научитесь создавать крутые интерфейсы для сайтов и приложений на JavaScript.',
	description_two: 'Наполните портфолио и сможете соревноваться за должность с практиками.',
	img: 'web/java-script-language/hero.svg',
	date: dateStart[14].date,
	duration: '4 месяца',
	price: dateStart[14].price,
	imgCourse: dateStart[14].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Вы никогда не работали в IT, но теперь твердо решили быстро туда попасть.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Начинающим',
		description: 'Хотите структурировать знания, попрактиковаться и получить обратную связь от ментора',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Верстальщикам',
		description:
			'Работали верстальщиком, но поняли, что способны на большее. 1/4 часть Front-end вы уже знаете – поэтому вперед!',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Другим программистам',
		description:
			'Вы знаете другой язык программирования или даже несколько, но появилась необходимость изучить JavaScript.',
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
		img: '/courses/ui/instruments/node.svg',
		title: 'Node',
		description: 'Фреймворк для быстрой и адаптивной веб-разработки',
	},
	{
		img: '/courses/ui/instruments/jQuery.svg',
		title: 'jQuery',
		description: 'Библиотека для упрощения работы с JavaScript и взаимодействия с HTML',
	},
	{
		img: '/courses/ui/instruments/ajax.svg',
		title: 'XHR и AJAX',
		description: 'Технологии для асинхронного обмена данными между браузером и сервером.',
	},
	{
		img: '/courses/ui/instruments/vue.svg',
		title: 'Vue',
		description: 'Прогрессивный фреймворк для создания гибких веб-приложений',
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

const teachers = [
	{
		img: '/courses/ui/TeacherSwiper/kopanev.svg',
		name: 'Илья Копанев',
		description: 'Ведущий инженер-программист в государственной организации. Опыт в разработке 9+ лет',
	},
	{
		img: '/courses/ui/TeacherSwiper/vershkov.svg',
		name: 'Алексей Вершков',
		description: 'Middle Full-Stack Developer в финтех проекте. Опыт в разработке 3+ лет',
	},
	{
		img: '/courses/ui/TeacherSwiper/gugin.svg',
		name: 'Дмитрий Гущин',
		description: 'Senior Frontend-Developer. на фрилансе. Опыт в разработке 4+ лет',
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
					title={`Чем занимается \n`}
					accent='Frontend разработчик?'
					description={`Front-end это специалист, который создает внешнюю часть сайтов и приложений. Именно его работу вы видите, когда заходите в интернет-магазин или мобильное приложение. \n\n Он переносит дизайн-макет в код, заботится об оформлении контента, работе кнопок и ссылок. Его главная задача – чтобы всё на сайте работало быстро и было удобным для пользователя.`}
					img='/courses/web/javascript-front-end/description.svg'
				/>

				<Lider
					img='/courses/web/javascript-front-end/lider.svg'
					title='–  ваш главный партнер по работе'
					accent='Javascript'
				/>

				<Description
					title={`Не переживайте,`}
					accent='спрос на Front-end разработчиков не снизится'
					description={`Российский и мировой бизнес активно переходит в онлайн. Всем нужны крутые сайты и приложения, чтобы держать бизнес на плаву и не выглядеть хуже конкурентов. \n\n Только на hh.ru доступно больше 2 тысяч вакансий от компаний уровня CберБанк, Wildberries, kaspersky и подобных.`}
					img='/courses/web/javascript-front-end/demand.svg'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/web/java-script-language/finalProject.svg'
					title='Система управления проектами по методологии канбан-доски.'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Свободно программировать на JavaScript',
						'Использовать Node.js и React.js',
						'Разрабатывать сайты на Vue.js',
						'Создавать интерактивный интерфейс',
						'Публиковать сайты на хостинге',
					]}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/web/java-script-language/certificate.svg' />

				<Work company_title='Frontend-разработчиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='voggaev.svg'
					course={course.title}
					name='Вожжаев Владлен. Профессиональный веб-разработчик на нескольких языках. Опыт разработки 10+ лет.'
					description='Руководитель подразделения AC Soft, Центра креативных индустрий МГТУ им. Н.Э.Баумана. Автор учебника по HTML. Разработчик отечественного конструктора форм.'
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
