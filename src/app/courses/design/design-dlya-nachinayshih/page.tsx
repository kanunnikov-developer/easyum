import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Learning from '../../_components/Learning/Learning';
import Image from 'next/image';
import Suitable from '../../_components/Suitable/suitable';
import FinalProject from '../../_components/FinalProject/FinalProject';
import Instruments from '../../_components/Instruments/Instruments';
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

const course = {
	title: dateStart[17].course,
	description_one:
		'Научитесь работать в популярных графических редакторах: Photoshop, Illustrator, Figma и After Effects.',
	description_two:
		'Подготовитесь к обучению на специализированных курсах дизайна – графический, веб-, моушн-дизайн и прочие.',
	img: 'design/design-dlya-nachinayshih/hero.svg',
	date: dateStart[17].date,
	duration: '2 месяца',
	price: dateStart[17].price,
	imgCourse: dateStart[17].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Не умеете работать в графических редакторах и не разбираетесь в дизайне.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Неопределившимся',
		description: 'Вы готовы научиться чему-то новому, но еще не решили чем хотите заняться.',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Начинающим',
		description: 'Если вы пробовали работать в редакторах, но знаний и навыков недостаточно для успеха.',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Другим специалистам',
		description: 'Навыки дизайна нужны вам для работы. Хотите освоить азы и сразу применять на практике.',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/photoshop.svg',
		title: 'Adobe Photoshop',
		description: 'Многофункциональный графический редактор',
	},
	{
		img: '/courses/ui/instruments/illustrator.svg',
		title: 'Adobe Illustrator',
		description: 'Программа для создания векторой графики',
	},
	{
		img: '/courses/ui/instruments/figma.svg',
		title: 'Figma',
		description: 'Онлайн-сервис для разработки интерфейсов и прототипирования',
	},
	{
		img: '/courses/ui/instruments/pinterest.svg',
		title: 'Pinterest',
		description: 'Открытый фотосервис для поиска визуальных идей',
	},
	{
		img: '/courses/ui/instruments/pexels.svg',
		title: 'Pexels',
		description: 'Сервис для поиска стоковых фото',
	},
	{
		img: '/courses/ui/instruments/freepik.svg',
		title: 'Freepik',
		description: 'Сервис для поиска стоковой графики',
	},
	{
		img: '/courses/ui/instruments/canva.svg',
		title: 'Canva',
		description: 'Кроссплатформенный сервис для графического дизайна',
	},
	{
		img: '/courses/ui/instruments/uxui.svg',
		title: 'UX&UI',
		description: 'Проектирование удобных и эстетичных интерфейсов',
	},
];

const learning = [
	{
		title: 'Основы дизайна',
		description: 'Узнаете законы композиции и цвета, научитесь работать по сетке',
		img: '/courses/ui/learning/30.svg',
		number: '01',
	},
	{
		title: 'Мышление дизайнера',
		description: 'Будете осмысленно выбирать шрифты, цвета и элементы дизайна',
		img: '/courses/ui/learning/31.svg',
		number: '02',
	},
	{
		title: 'Работа в Figma',
		description: 'Познакомитесь с интерфейсом, инструментами и возможностями',
		img: '/courses/ui/learning/32.svg',
		number: '03',
	},
	{
		title: 'Дизайн в Photoshop',
		description: 'Освоите популярные инструменты. Научитесь делать обработку и базовый дизайн',
		img: '/courses/ui/learning/33.svg',
		number: '04',
	},
	{
		title: 'Графика в Illustrator',
		description: 'Научитесь использовать инструменты для разработки графических элементов',
		img: '/courses/ui/learning/34.svg',
		number: '05',
	},
	{
		title: 'Верстка в InDesign',
		description: 'Будете разбираться в интерфейсе редактора и работать с полиграфией',
		img: '/courses/ui/learning/35.svg',
		number: '06',
	},
];

const programs = [
	{
		title: 'Основы графического дизайна. Базовые термины и понятия. Задачи графического дизайна в веб-интерфейсах. ',
	},
	{
		title:
			'Начало работы в Adobe Photoshop. Создание нового файла. Настройка рабочей среды: форматы, разрешения, размеры.',
	},
	{
		title:
			'Фигуры и объекты. Трансформирование объектов. Работа с пером и кистью. Работа с цветом. Цветовые профили. Цветокоррекция. Палитра.',
	},
	{
		title:
			'Базовые инструменты ретуши фотографий. Корректирующий слой. Маска. Инструменты изменения изображения: штамп, заплатка, архивная кисть.',
	},
	{
		title:
			'Типографика. Шрифты и общие принципы работы с текстом. Модульная сетка. Анимация в Photoshop. Создадим анимированный баннер.',
	},
	{
		title:
			'Начало работы в Adobe Illustrator. Создание нового файла. Настройка рабочей среды: форматы, разрешения, размеры. Подготовка к печати. ',
	},
	{
		title: 'Инструмент «Перо». Создадим набор линейных иконок. Поля, сетки, направляющие. Создадим Пиксель арт.',
	},
	{
		title:
			'Стильные иллюстрации. Фигуры, линии, направляющие. Создадим иллюстрацию в стиле Flat дизайна. Монтажная область. Паттерны. Создадим бесшовный узор.',
	},
	{
		title:
			'Цвет. Заливка, виды заливок, градиент. Создадим стикер для общения в Telegram. Изометрия. Инструмент «Переход». Создадим изометрический дизайн',
	},
	{
		title:
			'Начало работы с Adobe Indesign. Область применения InDesign. Сверстаем шаблон резюме. Модульные сетки Adobe Indesign. Сделаем верстку 5 страниц своего журнала.',
	},
	{
		title: 'Файлы .psd. Интеграция файлов .psd. Работа с цветами в документе. Создадим маркетинг-кит.',
	},
	{
		title: 'Начало работы в Figma. Работа с Фреймами, фигурами, текстом.',
	},
	{
		title: 'Использование плагинов в Figma. Стили. Создадим концепт для Dribbble.',
	},
	{
		title: 'Компоненты. Анимация в Figma. Создадим концепт сайта.',
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
					title={`Графические редакторы –`}
					accent='главные инструменты дизайнера'
					description={`Умение пользоваться графическими редакторами открывает много возможностей как для будущего дизайнера, так и для специалистов других профессий.`}
					img='/courses/design/graphic-designer/description.svg'
				/>

				<section className={styles.section}>
					<h2>
						Этот курс станет надежным {`\n`} <span className='accent'>стартом в дизайне</span>
					</h2>
					<div className={styles.grid}>
						<div className={styles.card}>
							<div className={styles.card__image}>
								<Image
									src='/courses/design/design-dlya-nachinayshih/section/1.svg'
									alt='Картинка'
									width={173}
									height={173}
									className={styles.card__img}
								/>
								<span>01</span>
							</div>
							<div className={styles.card__text}>
								<p>Базовые навыки</p>
								<span>Научитесь работать в графических редакторах и освоите базовую теорию</span>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.card__image}>
								<Image
									src='/courses/design/design-dlya-nachinayshih/section/2.svg'
									alt='Картинка'
									width={173}
									height={173}
									className={styles.card__img}
								/>
								<span>02</span>
							</div>
							<div className={styles.card__text}>
								<p>Портфолио</p>
								<span>Добавите в портфолио 5 крутых проектов, которые реализуете в процессе учебы</span>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.card__image}>
								<Image
									src='/courses/design/design-dlya-nachinayshih/section/3.svg'
									alt='Картинка'
									width={173}
									height={173}
									className={styles.card__img}
								/>
								<span>03</span>
							</div>
							<div className={styles.card__text}>
								<p>Готовность к работе</p>
								<span>Сможете применять навыки на текущей работе, фрилансить или продолжить обучение</span>
							</div>
						</div>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/design/design-dlya-nachinayshih/finalProject.svg'
					title='Айдентика компании'
					description='Портфолио со стильными авторскими иллюстрациям'
					list={[
						'Уверенно пользоваться графическими редакторами',
						'Разрабатывать авторские иллюстрации',
						'Создавать корпоративные стикеры для Telegram',
						'Делать изометрические иллюстрации и работать с их реалистичностью',
					]}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/design/design-dlya-nachinayshih/certificate.svg' />

				<Work company_title='Дизайнеров' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='korostilev.svg'
					course={course.title}
					name={`Коростылев Александр. Senior графический дизайнер. \n Опыт в дизайне 7+ лет.`}
					description='Сотрудничал с такими крупными компаниями как Transportation organizer (Москва) и ПАО «ГРУППА ЧЕРКИЗОВО», а также сетями «Мята», «Густой», «OLIVER SMOKE».'
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
