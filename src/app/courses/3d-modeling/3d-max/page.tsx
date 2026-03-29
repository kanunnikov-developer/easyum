import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Image from 'next/image';
import Suitable from '../../_components/Suitable/suitable';
import FinalProject from '../../_components/FinalProject/FinalProject';
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
	title: dateStart[24].course,
	description_one: 'Научитесь разрабатывать трехмерные здания, интерьеры и анимированных персонажей.',
	description_two:
		'Освоите ключевые инструменты Autodesk 3ds Max. Соберете портфолио и сможете брать проекты на фрилансе или начать карьеру в 3D моделировании.',
	img: 'threeD/3d-max/hero.svg',
	date: dateStart[24].date,
	duration: '2,5 месяца',
	duration_number: 2.5,
	price: dateStart[24].price,
	imgCourse: dateStart[24].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description:
			'С нуля погрузитесь в 3D разработку на Autodesk 3ds Max и сможете брать первые проекты уже через 2,5 месяца.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: '2D-художникам',
		description:
			'Получите новые знания, навыки и практический опыт отрисовки. Перейдете в 3D и станете универсальным художником.',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Дизайнерам',
		description:
			'Освоите новый востребованный редактор, научитесь создавать 3D персонажей, интерьеры и здания, работать с анимацией.',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Архитекторам',
		description:
			'Научитесь создавать реалистичную визуализацию архитектурных проектов. Сможете повысить стоимость своих услуг.',
	},
];

const learning = [
	{
		title: 'Autodesk 3ds Max',
		description: 'Познакомитесь с интерфейсом и функционалом редактора. Освоите базовые инструменты',
		img: '/courses/ui/learning/39.svg',
		number: '01',
	},
	{
		title: 'Создание объектов',
		description: 'Научитесь создавать простые и сложные 3D объекты, применять модификаторы и сплайн моделирование',
		img: '/courses/ui/learning/40.svg',
		number: '02',
	},
	{
		title: 'Материалы и текстуры',
		description: 'Узнаете, зачем нужны материалы и как их настраивать. Поработаете с текстурами разного типа',
		img: '/courses/ui/learning/41.svg',
		number: '03',
	},
	{
		title: 'Освещение',
		description: 'Поработаете с разными источниками света и их параметрами, научитесь создавать тени объектов',
		img: '/courses/ui/learning/42.svg',
		number: '04',
	},
	{
		title: 'Работа с камерами',
		description:
			'Научитесь настраивать камеры в разных помещениях. Познакомитесь с видами съемки и сможете находить выгодный ракурс для вашего кадра',
		img: '/courses/ui/learning/43.svg',
		number: '05',
	},
	{
		title: 'Анимация',
		description: 'Узнаете, как заставить персонажа двигаться, моргать, улыбаться и имитировать речь',
		img: '/courses/ui/learning/44.svg',
		number: '06',
	},
];

const programs = [
	{
		title:
			'3D Max. Общие сведения: возможности и ограничения функционала программы. Сфера применения. Учимся где скачивать и как устанавливать пакет «3D Max».',
	},
	{
		title:
			'Интерфейс. Особенности и разбор основного меню. Командная панель, панель инструментов, окна проекций. Учимся работать с сеткой координат и создавать простую 3D-сцену.',
	},
	{
		title:
			'Объекты. Общие сведения, категории и их предназначение. Ребра, грани, вершины и их видимость. Габаритный контейнер. Учимся создавать простые объекты и настраивать их параметры.',
	},
	{
		title:
			'Объекты: Группы объектов, их техническое предназначение. Инструменты выделения объектов. Учимся формировать группы объектов и редактировать их (растягивать, сжимать, поворачивать и перемещать).',
	},
	{
		title:
			'Объекты: Модификаторы. Виды и их технические возможности. Панель MODIFY. Сплайны, виды и особенности использования. Учимся создавать и редактировать сложные объекты с помощью 3-мерных модификаторов.',
	},
	{
		title:
			'Текстуры и материалы. Функции, разновидности, технические ограничения и возможности. Библиотеки материалов.',
	},
	{
		title:
			'Свет и камера. Свет: источники, параметры, тени объектов и работа с ними. Камера: создание, параметры настройки и виды съемки. Рисуем тени и учимся искать самый выгодный ракурс для вашей композиции.',
	},
	{
		title:
			'Теоретическая лекция: Рендеринг. Определение, функции. Инструменты по управлению визуализацией. Как создать эффект окружающей среды? Настройка текстуры фона и сцены.',
	},
	{
		title:
			'Подготовка к созданию интерьера в 3D Max. Особенности работы с пространством в 3D Max: декартова система координат, единицы масштаба. Чертежи, использование растровых изображений в 3D Max.',
	},
	{
		title:
			'Помещение. Работа со слоями: создание стен, проёмов. Введение в полимоделинг. Создаём «голый» макет жилого помещения.',
	},
	{
		title:
			'Корпусная мебель. Полимоделинг: моделирование кухни, полок, шкафов. Плинтусы и карнизы. Создание профилированных изделий с BEVEL PROFILE. Варианты моделирования профилированных изделий. Прорисуем карнизы и плинтусы нашего макета.',
	},
	{
		title:
			'Двери и окна. Создание симметричных модульных объектов с помощью модификатора SYMMETRY. Создадим симметричные дверные проёмы для своего помещения.',
	},
	{
		title:
			'Аксессуары. Моделирование люстр, ваз и т.д. Модификаторы элементов интерьера: LOFT, LATHE. Создадим элементы декора для своего помещения.',
	},
	{
		title:
			'Мягкая мебель. Полимоделинг. Симуляции и модификаторы для создания эффекта реальности мягкой мебели: драпировка, мех, неровности и складки. Прорисуем реалистичный дизайн мягкой мебели для жилого помещения.',
	},
	{
		title:
			'Завершение проекта. Настройка освещения и камеры. Рендеринг и постобработка. Научимся переводить трехмерную сцену в цифровое растровое изображения, для предоставления заказчику.',
	},
	{
		title:
			'Теоретическая лекция: «Принципиальные различия игрового дизайна и дизайна интерьеров. Game-design: общие термины, технические особенности и ограничения. Поговорим о самых распространенных ошибках при создании персонажа.',
	},
	{
		title: 'Моделирование LOW POLY фигуры человека. Моделируем фигуру персонажа из примитивных объектов.',
	},
	{
		title:
			'Ретопология поверх LOW POLY фигуры человека. Инструменты и алгоритм создания ретопологии в 3D Max. Создадим модель персонажа и его брони с учётом правильного расположения ретопологии.',
	},
	{
		title: 'Создание полигональной брони персонажа. Смоделируем броню для будущего персонажа.',
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

				<GetLesson course={course.title}/>

				<Description
					title={`Мир креативных индустрий -`}
					accent={`3D моделирование`}
					description={`Навыки 3D моделирования и анимации сейчас востребованы как никогда. Разработка игр, создание рекламы, фильмов и мультфильмов не обходится без 3D графики. \n\n Если вы не хотите себя ограничивать одной сферой, а желаете освоить Autodesk 3ds Max для выполнения разных задач – этот курс идеально вам подойдет. \n\n Вы на практике научитесь работать с текстурами и материалами, светом и тенями, освоите отрисовку объектов, окружения, зданий, интерьеров и анимацию персонажей.`}
					img='/courses/threeD/3d-max/description.svg'
				/>

				<section className={styles.why_work}>
					<h2>
						Вы попробуете себя в роли{`\n`}
						<span className='accent'>4 специалистов:</span>
					</h2>
					<div className={styles.why_work__grid}>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>3D-моделлер</p>
								<p className={styles.why_work_description}>Будете использовать 3ds Max на уверенном уровне</p>
							</div>
							<p className={styles.why_work_number}>01</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>Художник по персонажам</p>
								<p className={styles.why_work_description}>Придумаете и создадите собственного 3D персонажа</p>
							</div>
							<p className={styles.why_work_number}>02</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>3D-аниматор</p>
								<p className={styles.why_work_description}>Оживите вашего персонажа с помощью анимации</p>
							</div>
							<p className={styles.why_work_number}>03</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>Дизайнер интерьеров</p>
								<p className={styles.why_work_description}>Смоделируете дизайн жилого помещения</p>
							</div>
							<p className={styles.why_work_number}>04</p>
						</div>
					</div>
				</section>

				<section className={styles.create}>
					<h2>
						<span className='accent'>Что создают</span> с помощью Autodesk 3ds Max
					</h2>
					<p>
						Фильм «Железный человек», «Аватар», две части «Гарри Поттер и Дары смерти», игра «Mortal Combat» – лишь
						часть известных проектов, графика которых разрабатывалась с помощью этой программы
					</p>
					<div className={styles.create__grid}>
						<div className={styles.create_card}>
							<div className={styles.create_image}>
								<Image
									src='/courses/threeD/3d-max/create/1.svg'
									alt='Картинка'
									width={262}
									height={208}
									className={styles.create_img}
								/>
							</div>
							<p>Архитектурные проекты</p>
						</div>
						<div className={styles.create_card}>
							<div className={styles.create_image}>
								<Image
									src='/courses/threeD/3d-max/create/2.svg'
									alt='Картинка'
									width={262}
									height={208}
									className={styles.create_img}
								/>
							</div>
							<p>Миры компьютерных игр</p>
						</div>
						<div className={styles.create_card}>
							<div className={styles.create_image}>
								<Image
									src='/courses/threeD/3d-max/create/3.svg'
									alt='Картинка'
									width={262}
									height={208}
									className={styles.create_img}
								/>
							</div>
							<p>Дизайн интерьеров</p>
						</div>
						<div className={styles.create_card}>
							<div className={styles.create_image}>
								<Image
									src='/courses/threeD/3d-max/create/4.svg'
									alt='Картинка'
									width={262}
									height={208}
									className={styles.create_img}
								/>
							</div>
							<p>Персонажей и их анимацию</p>
						</div>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/threeD/3d-max/finalProject.svg'
					title='Дизайн жилого помещения и 3D персонажа'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Использовать 3ds Max на уверенном уровне',
						'Моделировать дизайн жилого помещения',
						'Создавать 3D персонажей',
						'Анимировать разработанных персонажей',
						'Работать с камерой и светом',
					]}
				/>

				<Learning items={learning} />

				<GetLessonBlock course={course.title}/>

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/threeD/3d-max/certificate.svg' />

				<Work company_title='3D-моделлеров' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='kolobkova.svg'
					course={course.title}
					name={`Колобкова Наталья. Опыт в дизайне и моделировании более 13 лет.`}
					description='Дизайнер, визуализатор и преподаватель. Обучает дизайнеров и архитекторов работе в профессиональных программах (ArchiCad, 3Ds Max, Adobe Photoshop, и т. д.).'
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
