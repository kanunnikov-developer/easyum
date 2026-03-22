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
import TeacherSwiper from '../../_components/TeacherSwiper/TeacherSwiper';
import Reviews from '@/app/_components/Reviews/Reviews';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import { Suspense } from 'react';
import Tariffs from '../../_components/Tariffs/Tariffs';
import getRegion from '@/lib/getRegion';
import FAQ from '../../_components/FAQ/FAQ';

const course = {
	title: dateStart[22].course,
	description_one: 'Научитесь создавать приложения под Android',
	description_two:
		'Соберете привлекательное портфолио из 4-х проектов, сможете решать реальные задачи Junior разработчика и подготовитесь к трудоустройству в IT-компанию.',
	img: 'mobile/java-android/hero.svg',
	date: dateStart[22].date,
	duration: '4,5 месяца',
	price: dateStart[22].price,
	imgCourse: dateStart[22].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Вы не программировали и не работали в IT, но очень хотите стать мобильным разработчиком.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Начинающим',
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
		description: 'Вы мастерски владеете другим языком программирования, но появилась потребность освоить Android',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/java.svg',
		title: 'Java',
		description: 'Объектно-ориентированный язык программирования',
	},
	{
		img: '/courses/ui/instruments/kotlin.svg',
		title: 'Kotlin',
		description: 'Фреймворк для разработки Java-приложений',
	},
	{
		img: '/courses/ui/instruments/android.svg',
		title: 'Android Studio',
		description: 'Интегрированная среда разработки для работы с платформой Android,',
	},
	{
		img: '/courses/ui/instruments/git.svg',
		title: 'Git',
		description: 'Распределенная система управления версиями.',
	},
	{
		img: '/courses/ui/instruments/googleplay.svg',
		title: 'Google Play',
		description: 'Распределенная система потоковой обработки данных',
	},
	{
		img: '/courses/ui/instruments/maven.svg',
		title: 'Maven',
		description: 'Инструмент автоматизации сборки и управления проектами',
	},
	{
		img: '/courses/ui/instruments/log.svg',
		title: 'Log4j',
		description: 'Библиотека для логирования Java программ',
	},
	{
		img: '/courses/ui/instruments/sqlite.svg',
		title: 'SQLite',
		description: 'Компактная встраиваимая система управления базой данных',
	},
	{
		img: '/courses/ui/instruments/javafx.svg',
		title: 'JavaFX',
		description: 'Java-платформа для создания графического интерфейса приложений',
	},
	{
		img: '/courses/ui/instruments/gradle.svg',
		title: 'Gradle',
		description: 'Система для автоматической сборки приложений',
	},
];

const learning = [
	{
		title: 'Программировать на Java и Kotlin',
		description:
			'Изучите базовые понятия, синтаксис, объектно-ориентированное программирование, сможете решать задачи с помощью алгоритмов',
		img: '/courses/ui/learning/11.svg',
		number: '01',
	},
	{
		title: 'Работать в Android Studio',
		description:
			'Разработаете логику приложений, спроектируете экраны, а также научитесь выкладывать приложения в Google Play',
		img: '/courses/ui/learning/36.svg',
		number: '02',
	},
	{
		title: 'Работать с базами данных',
		description: 'Научитесь писать SQL запросы, проектировать базы данных для приложений',
		img: '/courses/ui/learning/23.svg',
		number: '03',
	},
	{
		title: 'Делать анимацию',
		description: 'Спроектируете и реализуете необычные экраны, а также переходы между состояниями приложения',
		img: '/courses/ui/learning/37.svg',
		number: '04',
	},
	{
		title: 'Тестировать проект',
		description: 'Научитесь проверять работоспособность приложения в процессе разработки',
		img: '/courses/ui/learning/13.svg',
		number: '05',
	},
	{
		title: 'Презентации',
		description: 'Работать с заказчиком - как проводить поиск клиентов, брифинг, презентацию работ',
		img: '/courses/ui/learning/38.svg',
		number: '06',
	},
];

const programs = [
	{
		title: 'Основы языка Java. Изучение алгоритмов. ',
	},
	{
		title: 'ООП в Java: Классы, Интерфейсы, Анонимные классы, Внутренние и Абстрактные классы.',
	},
	{
		title:
			'Стандартные технологии Java SE (Коллекции, Многопоточность, Exception, Логирование, Maven). Версия контроля - Git.',
	},
	{
		title: 'Новые технологии Java: Stream API, Лямбда-выражения.',
	},
	{
		title: 'Работа клиент-серверных приложений. Работа с сетевым чатом, сокетами.',
	},
	{
		title:
			'Знакомство с основами мобильной разработки и средой Android Studio: установка, интерфейс, создание проектов',
	},
	{
		title: 'Разработка пользовательского интерфейса в XML: виджеты, слои, разметка, цвета и стили. Синтаксис XML.',
	},
	{
		title:
			'UI. Построение пользовательского интерфейса с текстом, кнопками, изображениями. Работа со строками, размеры, цвета.',
	},
	{
		title:
			'Отображение контента. Методы отображения графического контента: setImageResource, setImageBitmap, setImageDrawable, ImageView и другие.',
	},
	{
		title:
			'Мобильные базы данных. Взаимодействие с базами данных SQLite на Android: создание таблиц, запросы, курсоры.',
	},
	{
		title: 'Основы реактивного программирования на Android с RxJava и RxAndroid.',
	},
	{
		title:
			'Контроль версий приложения в Git. Сборка и управление зависимостями в Gradle. Обзор библиотеки ButterKnife. ',
	},
	{
		title: 'Публикация и монетизация Android приложений в Google Play Market.',
	},
	{
		title: 'Введение в язык программирования Kotlin для разработки на Android. ',
	},
	{
		title:
			'GUI Android: Фрагменты, Activity, CustomView. Создание приложения c навигацией – хостингом фрагментов, рассмотрение разницы между фрагментом и активностью. Создание кастомных элементов пользовательского интерфейса',
	},
	{
		title:
			'Работа с локальными базами данных Sqlite, Room. Работа с портативными базами даных. Сохранение данных в постоянной памяти устройства',
	},
	{
		title: 'Работа с файловой системой. Чтение и запись в файлы устройства, SharedPreferences',
	},
	{
		title:
			'Многопоточное программирование на Android: потоки, асинхронная обработка, конкурентность. Воспроизведение графики, музыки, запросы в фоновом потоке',
	},
	{
		title:
			'Работа с сервером. Клиент-серверное взаимодействие по HTTP/WebSocket протоколам. Создание приложения клиента, получающего данные с удаленного сервера',
	},
	{
		title: 'Основные компоненты Android: сервисы, бродкаст-ресиверы, контент-провайдеры, активности.',
	},
	{
		title: 'Написание unit-тестов приложения',
	},
	{
		title:
			'Итоговое крупное приложение для Android «Бронирование и оплата электрозаправки», объединяющее все изученные аспекты',
	},
	{
		title: 'Проработка часто-задаваемых вопросов на собеседовании по Java разработке',
	},
];

const teachers = [
	{
		img: '/courses/ui/TeacherSwiper/Vogaev.svg',
		name: 'Владлен Вожжаев',
		description: 'Руководитель подразделения разработки AC Soft при МГТУ им. Н.Э.Баумана. Опыт в разработке 12+ лет',
	},
	{
		img: '/courses/ui/TeacherSwiper/Muxametov.svg',
		name: 'Дамир Мухаметов',
		description: 'Senior Java разработчик в компании СберФакторинг. Опыт в разработке 8+ лет',
	},
	{
		img: '/courses/ui/TeacherSwiper/Kovaleva.svg',
		name: 'Вита Ковалева',
		description: 'Senior Java-разработчик в Газпромбанке. Технический лид стрима разработки. Опыт в разработке 8+ лет',
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

				<GetLesson course={course.title}/>

				<Description
					title={`Почему стоит стать \n`}
					accent={`Android разработчиком`}
					description={`Андроид-разработчик создаёт приложения и поддерживает их работу. \n\n Почему стоит стать Android разработчикомПри этом он не только пишет код, но может и заниматься другими вещами: \n\n 1. продумывать интерфейс и логику (если для этого нет дизайнеров) \n 2. защищать данные и устранять уязвимости \n 3. отвечать за производительность приложений \n 4. изучать пользовательские пожелания и делать обновления.`}
					img='/courses/mobile/java-android/description.svg'
				/>

				<section className={styles.android}>
					<div className={styles.android_text}>
						<h2>
							<span className='accent'>Более 2,5 млрд</span> устройств работает на Android!
						</h2>
						<p>И это не только смартфоны, но и ...</p>
					</div>
					<div className={styles.android_grid}>
						<div className={styles.android_card}>
							<div className={styles.android_iamge}>
								<Image
									src='/courses/mobile/java-android/android/1.svg'
									alt='Картинка'
									width={172}
									height={172}
									className={styles.android_img}
								/>
							</div>
							<p>Телевизоры</p>
						</div>
						<div className={styles.android_card}>
							<div className={styles.android_iamge}>
								<Image
									src='/courses/mobile/java-android/android/2.svg'
									alt='Картинка'
									width={172}
									height={172}
									className={styles.android_img}
								/>
							</div>
							<p>Планшеты</p>
						</div>
						<div className={styles.android_card}>
							<div className={styles.android_iamge}>
								<Image
									src='/courses/mobile/java-android/android/3.svg'
									alt='Картинка'
									width={172}
									height={172}
									className={styles.android_img}
								/>
							</div>
							<p>Смарт-часы</p>
						</div>
						<div className={styles.android_card}>
							<div className={styles.android_iamge}>
								<Image
									src='/courses/mobile/java-android/android/4.svg'
									alt='Картинка'
									width={172}
									height={172}
									className={styles.android_img}
								/>
							</div>
							<p>Электронные книги</p>
						</div>
						<div className={styles.android_card}>
							<div className={styles.android_iamge}>
								<Image
									src='/courses/mobile/java-android/android/5.svg'
									alt='Картинка'
									width={172}
									height={172}
									className={styles.android_img}
								/>
							</div>
							<p>Автомобильные системы</p>
						</div>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/mobile/java-android/finalProject.svg'
					title='Приложение для Android «Бронирование и оплата электрозаправки»'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Писать чистый код на Java и Kotlin',
						'Уверенно работать с Android Studio',
						'Разрабатывать мобильные приложения с нуля',
						'Создавать и внедрять анимацию',
						'Монетизировать и публиковать приложения в Google Play',
					]}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock course={course.title}/>

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/mobile/java-android/certificate.svg' />

				<Work company_title='Android-разработчиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='shulga.svg'
					course={dateStart[0].course}
					name='Шульга Наталья. Senior Java-разработчик, руководитель академии EasyUM. Опыт разработки 10+ лет.'
					description='Ведущий преподаватель и эксперт программы. Более 30+ выполненных Java-проектов под ее руководством, среди которых crm-системы для зарубежных ресторанов, онлайн казино и пр.'
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
