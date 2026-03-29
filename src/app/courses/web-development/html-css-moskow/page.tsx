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
import Circle from '@/app/_components/Circle/Circle';

const course = {
	title: dateStart[13].course,
	description_one: 'Научитесь верстать лендинги, многостраничные сайты, интернет-магазины и мобильные приложения.',
	description_two:
		'Освоите HTML&CSS с нуля до уровня Junior. Сможете начать фрилансить через 2 месяца и продолжать развиваться в веб-разработке на курсе Front-end или Full-Stack.',
	img: 'web/html-css-moskow/hero.svg',
	date: dateStart[13].date,
	duration: '2 месяца',
	duration_number: 2,
	price: dateStart[13].price,
	imgCourse: dateStart[13].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'У вас нет опыта в верстке. Хотите быстро освоить профессию, связанную с разработкой сайтов.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Неопределившимся',
		description: 'Вы не знаете с какой профессии начать карьеру. Верстка – отличный вариант для новичка в IT.',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Начинающим',
		description:
			'Вы учили HTML&CSS, но знаний недостаточно для трудоустройства. Хотите повысить навыки и добавить проекты в портфолио.',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Другим программистам',
		description: 'Вы работаете в IT, но не там, где хотелось бы. Курс поможет перестроить маршрут на новую должность.',
	},
];

const instruments = [
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
		title: 'HTML&CSS',
		description: 'Научитесь использовать HTML для создания структуры сайта, а CSS для стилизации элементов',
		img: '/courses/ui/learning/2.svg',
		number: '01',
	},
	{
		title: 'Фреймворк Bootstrap',
		description: 'Сможете создавать собственные компоненты, пользоваться готовыми, повышать скорость работы',
		img: '/courses/ui/learning/14.svg',
		number: '02',
	},
	{
		title: 'Автоматизация',
		description: 'Научитесь использовать SASS, Pug, Gulp и автоматизировать рутинные задачи',
		img: '/courses/ui/learning/12.svg',
		number: '03',
	},
	{
		title: 'Адаптивность',
		description: 'Сможете адаптировать сайты под разные устройства и браузеры',
		img: '/courses/ui/learning/6.svg',
		number: '04',
	},
	{
		title: 'Основы JavaScript',
		description: 'Научитесь добавлять слайдеры, выпадающие меню и другие креативные элементы',
		img: '/courses/ui/learning/15.svg',
		number: '05',
	},
	{
		title: 'Командная работа',
		description: 'Освоите систему контроля версий Git, чтобы эффективно работать в команде',
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
					accent='верстальщик?'
					description={`Верстальщик переводит макет дизайнера в код, понятный браузерам. \n\n Обязанность верстальщика – оформление веб-страницы, начиная с размера и начертания шрифта до размещения элементов на странице и правильности отображения информации на всех устройствах. \n\n Так как красота, простота и удобство в использовании сайта значительно влияют на продажи и имидж бренда, профессиональные верстальщики сегодня на вес золота.`}
					img='/courses/web/html-css-moskow/description.svg'
				/>

				<Description
					title={`Вас ждет максимум`}
					accent='практики'
					description={`Вы будете выполнять реальные задачи верстальщика на уроках и дома. По окончанию курса сформируете портфолио, которое позволит соревноваться за проекты наравне с практикующими специалистами. \n\n На каждом этапе вас будет поддерживать преподаватель. Не стесняйтесь задавать ему вопросы в любое время в общем чате группы.`}
					img='/courses/web/html-css-moskow/why.svg'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/web/java-script-full-stack/finalProject.svg'
					title='Адаптивный, кроссбраузерный сайт интернет-магазина'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Свободно использовать HTML&CSS',
						'Создавать веб-страницы сайта',
						'Делать адаптивную верстку',
						'Заниматься кроссбраузерной версткой',
						'«Оживлять» сайт анимированными элементами',
					]}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock course={course.title} />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/web/html-css-moskow/certificate.svg' />

				<Work company_title='Верстка сайтов' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='kopnaev.svg'
					course={course.title}
					name='Копанев Илья. Профессиональный веб-разработчик. Опыт разработки 9+ лет.'
					description='Ведущий инженер-программист в государственной организации'
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
