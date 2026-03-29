import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Sallary from '../../_components/Salary/Salary';
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
import { Suspense } from 'react';
import Tariffs from '../../_components/Tariffs/Tariffs';
import getRegion from '@/lib/getRegion';
import FAQ from '../../_components/FAQ/FAQ';
import Circle from '@/app/_components/Circle/Circle';

const course = {
	title: dateStart[16].course,
	description_one: 'Научитесь создавать креативный визуал, в котором нуждается бизнес.',
	description_two:
		'Получите практический опыт с первого дня обучения. Собёрете внушительное портфолио из востребованных работ - от рекламного баннера до айдентики бренда.',
	img: 'design/graphic-designer/hero.svg',
	date: dateStart[16].date,
	duration: '4 месяца',
	duration_number: 4,
	price: dateStart[16].price,
	imgCourse: dateStart[16].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/9.svg',
		title: 'Неопределившимся',
		description: 'Когда вы готовы научиться чему-то новому, но еще не решили чему',
	},
	{
		img: '/courses/ui/suitable/10.svg',
		title: 'Новичкам',
		description: 'Даже если вы не умеете рисовать, мы поможем вам освоить графический дизайн.',
	},
	{
		img: '/courses/ui/suitable/11.svg',
		title: 'Веб-дизайнерам',
		description: 'Если вы профессионал в веб-дизайне, хотите прокачать свои навыки и повысить заработок.',
	},
	{
		img: '/courses/ui/suitable/10.svg',
		title: 'Другим специалистам',
		description: 'Если вы работаете в сфере Digital на другой специальности, но хотите освоить дизайн',
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
		img: '/courses/ui/learning/24.svg',
		number: '01',
	},
	{
		title: 'Редакторам',
		description: 'Работе с графическими редакторами - Adobe Photoshop, Illustrator, InDesign',
		img: '/courses/ui/learning/25.svg',
		number: '02',
	},
	{
		title: 'Мышлению дизайнера',
		description: 'Будете осмысленно выбирать шрифты, цвета и элементы дизайна',
		img: '/courses/ui/learning/26.svg',
		number: '03',
	},
	{
		title: 'Визуализации',
		description:
			'Создавать визуальную коммуникацию с потребителем, визуализировать метафоры и смыслы продукта. Создавать нужные ассоциации',
		img: '/courses/ui/learning/27.svg',
		number: '04',
	},
	{
		title: 'Айдентике',
		description: 'Логотип, товарный знак, фирменные цвета, брендбук и прочие составляющие фирменного стиля',
		img: '/courses/ui/learning/28.svg',
		number: '05',
	},
	{
		title: 'Подготовка материалов',
		description: 'Научитесь верстать материалы бренда, от каталога до листовки, в Indesign',
		img: '/courses/ui/learning/29.svg',
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
	{
		title:
			'Айдентика. Как правильно провести интервью для айдентики с заказчиком? Работа с техническим заданием и техническими требованиями.',
	},
	{
		title: 'Логотипы и их виды. Создадим несколько вариантов логотипа (изобразительный и шрифтовый).',
	},
	{
		title: 'Леттеринг, каллиграфия и шрифт в айдентике. Процесс создания шрифтов. Лицензии на использование шрифтов.',
	},
	{
		title:
			'Метафора бренда. Как создавались легендарные логотипы. Анализ конкурентов. Упаковка. Виды и типы. Подготовка к печати: топ-10 пунктов, которые стоит проверить дважды. Создадим упаковку товара.',
	},
	{
		title:
			'Паспорт стандартов и брендбук. Сформируем собственный гайдлайн. Точки контакта с потребителем. Дизайн коммуникаций. Подготовим несколько вариантов рекламных макетов.',
	},
	{
		title: 'Персонажи и талисманы (маскоты). Нарисуем продуктовую иллюстрацию.',
	},
	{
		title:
			'Работа с референсами. Источники поиска референсов. Финализация логотипа. Графическая система. Построение собственной графической системы на основе разработанных элементов.',
	},
	{
		title:
			'Презентация айдентики. Грамотная подача кейса. Подготовим кейс для презентации клиенту. Презентация кейсов - выпускных работ. Анализ работ одногруппников.',
	},
	{
		title: 'Поиск клиентов №1. Регистрация на Behance. Оформим ваш проект для портфолио на Behance.',
	},
	{
		title:
			'Поиск клиентов №2. Обзор бирж фриланса. Регистрация на биржах фриланса. Оформление профиля фрилансера. Портфолио. Виды заказчиков.',
	},
	{
		title:
			'Продающий Instagram. Как упаковать себя как дизайнера в Instagram. Личный бренд. Другие источники поиска клиентов. Бриф. Создадим свой бриф для клиентов.',
	},
	{
		title:
			'Обзор сервиса Upwork. Лучшая биржа фриланса. Зарегистрируемся на Upwork и оформили профиль. Изучим систему работы Upwork.',
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
					accent='графический дизайнер?'
					description={`Графический дизайнер создает визуальное оформление бренда. \n\n Его задача сделать запоминающийся и уникальный дизайн, который полюбится покупателям и поможет продать продукт. \n\n Вы будете разрабатывать логотипы, создавать иллюстрации, придумывать упаковку, фирменный стиль бренда и делать множество других коммерческих задач.`}
					img='/courses/design/graphic-designer/description.svg'
				/>

				<Sallary min={50000} max={200000} />

				<section className={styles.every_day}>
					<h2>
						Работы графических дизайнеров {`\n`} окружают нас <span className='accent'>каждый день</span>
					</h2>
					<div className={styles.every_grid}>
						<div className={styles.every_item}>
							<div className={styles.every_image}>
								<Image src='/courses/design/graphic-designer/every/1.svg' width={262} height={210} alt='Картинка' />
							</div>
							<p>Рисует афиши мероприятий и наружную рекламу</p>
						</div>
						<div className={styles.every_item}>
							<div className={styles.every_image}>
								<Image src='/courses/design/graphic-designer/every/2.svg' width={262} height={210} alt='Картинка' />
							</div>
							<p>Придумывает упаковку ваших любимых продуктов</p>
						</div>
						<div className={styles.every_item}>
							<div className={styles.every_image}>
								<Image src='/courses/design/graphic-designer/every/3.svg' width={262} height={210} alt='Картинка' />
							</div>
							<p>Создает визуальное выражение для ассоциаций</p>
						</div>
						<div className={styles.every_item}>
							<div className={styles.every_image}>
								<Image src='/courses/design/graphic-designer/every/4.svg' width={262} height={210} alt='Картинка' />
							</div>
							<p>Разрабатывает визуальную стратегию бренда</p>
						</div>
					</div>
				</section>

				<section className={styles.ican}>
					<div className={styles.ican_text}>
						<h2>
							Какие работы <span className='accent'>я смогу выполнять</span> в процессе обучения?
						</h2>
					</div>
					<div className={styles.ican_image}>
						<Image src='/courses/design/graphic-designer/ican.svg' alt='картинка' width={1170} height={96} />
					</div>
					<div className={styles.ican_grid}>
						<div className={styles.ican_item}>
							<div>
								<p className={styles.ican_title}>Через 3 недели</p>
								<p className={styles.ican_description}>Ретушировать фото и создавать коллажи в Adobe Photoshop</p>
							</div>
							<span className={styles.span}>от 150₽ за фото</span>
						</div>
						<div className={styles.ican_item}>
							<div>
								<p className={styles.ican_title}>Через 1 месяц</p>
								<p className={styles.ican_description}>Создавать дизайн карточек товаров для маркетплейсов</p>
							</div>
							<span className={styles.span}>от 550₽ за фото</span>
						</div>
						<div className={styles.ican_item}>
							<div>
								<p className={styles.ican_title}>Через 1,5 месяца</p>
								<p className={styles.ican_description}>
									Создавать векторные иллюстрации и авторские шрифты в Adobe Illustrator
								</p>
							</div>
							<span className={styles.span}>от 1500₽ за фото</span>
						</div>
						<div className={styles.ican_item}>
							<div>
								<p className={styles.ican_title}>Через 2 месяца</p>
								<p className={styles.ican_description}>Верстать много-страничные макеты в Adobe Indesign</p>
							</div>
							<span className={styles.span}>от 3000₽</span>
						</div>
						<div className={styles.ican_item}>
							<div>
								<p className={styles.ican_title}>Через 3 месяца</p>
								<p className={styles.ican_description}>Разрабатывать логотипы и создавать визуальную адентику бренда</p>
							</div>
							<span className={styles.span}>от 15000₽</span>
						</div>
					</div>
				</section>

				<Description
					title={`Как`}
					accent='мы поможем?'
					description={`70% времени на наших занятих уделяется практическим задачам графического дизайнера. Проходя курс вы сможете выполнять все более сложные заказы на фрилансе и начать зарабатывать. \n\n По окончании курса вы сможете претендовать на позицию Junior-дизайнера в агентстве.`}
					img='/courses/web/html-css-moskow/why.svg'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/design/graphic-designer/finalProject.svg'
					title='Айдентика компании'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Уверенно пользоваться Photoshop и Illustrator',
						'Разрабатывать логотипы для брендов',
						'Создавать рекламную полиграфию (дизайны упаковок, блокнотов, футболок, брошюр)',
						'Делать 3D иллюстрации и работать с их реалистичностью',
						'Готовить макеты к печати',
					]}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock course={course.title} />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/design/graphic-designer/certificate.svg' />

				<Work company_title='Графических дизайнеров' />

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
