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
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import EasyUm from '../../_components/EasyUm/Easyum';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Learning from '../../_components/Learning/Learning';
import Reviews from '@/app/_components/Reviews/Reviews';
import Work from '../../_components/Work/Work';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import Programm from '../../_components/Programm/Programm';
import Certificate from '../../_components/Certificate/Certificate';
import Metodist from '../../_components/Metodist/Metodist';
import getRegion from '@/lib/getRegion';
import Tariffs from '../../_components/Tariffs/Tariffs';
import { Suspense } from 'react';
import FAQ from '../../_components/FAQ/FAQ';

const course = {
	title: dateStart[23].course,
	description_one: 'Научитесь создавать приложения для устройств Apple на языке программирования Swift.',
	description_two:
		'Создатите первое приложение прямо на занятиях. Наполните портфолио, составите резюме и будете полностью готовы к должности iOS-разработчик на Swift.',
	img: 'mobile/mobiledev-ios/hero.svg',
	date: dateStart[23].date,
	duration: '4 месяца',
	price: dateStart[23].price,
	imgCourse: dateStart[23].imgCourse,
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
		description: 'Систематизируете знания, теорию закрепите на практике и получите поддержку ментора на каждом этапе.',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Android-разработчикам',
		description: 'Освоите новый язык, разработаете первые приложения и станете универсальным мобильным разработчиком.',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Программистам',
		description:
			'Если вам нужно быстро освоить программирование на Swift или вы давно мечтаете создавать приложения для Apple.',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/ios.svg',
		title: 'iOS',
		description: 'Операционная система от компании Apple',
	},
	{
		img: '/courses/ui/instruments/swift.svg',
		title: 'Swift',
		description: 'Язык программирования разработанный компанией Apple',
	},
	{
		img: '/courses/ui/instruments/xcode.svg',
		title: 'XCode',
		description: 'Интегрированная среда разработки для платформ macOS, iOS, watchOS и tvOS',
	},
	{
		img: '/courses/ui/instruments/uikit.svg',
		title: 'UiKit',
		description: 'Swift-фреймворк, позволяющий создавать пользовательские интерфейсы',
	},
	{
		img: '/courses/ui/instruments/appstore.svg',
		title: 'AppStore',
		description: 'Магазин приложений для устройств Apple',
	},
	{
		img: '/courses/ui/instruments/git.svg',
		title: 'git',
		description: 'Распределенная система управления версиями',
	},
	{
		img: '/courses/ui/instruments/coredata.svg',
		title: 'CoreData',
		description: 'Фреймворк для работы с базой данных, встроенный в iOS и MacOS',
	},
	{
		img: '/courses/ui/instruments/arc.svg',
		title: 'ARC',
		description: 'Технология для автоматического управления памятью приложения',
	},
];

const learning = [
	{
		title: 'Программирование на Swift',
		description:
			'Изучите базовые понятия, синтаксис, объектно-ориентированное программирование, сможете решать задачи с помощью алгоритмов',
		img: '/courses/ui/learning/11.svg',
		number: '01',
	},
	{
		title: 'Разработка приложений',
		description: 'Познакомитесь со средой разработки Xcode и научитесь описывать логику приложений',
		img: '/courses/ui/learning/14.svg',
		number: '02',
	},
	{
		title: 'Верстка интерфейсов',
		description:
			'Познакомитесь с Figma. Сможете верстать элементы интерфейса. Научитесь делать кнопки, переходы, анимации и другие элементы.',
		img: '/courses/ui/learning/12.svg',
		number: '03',
	},
	{
		title: 'Адаптирование',
		description:
			'Научитесь адаптировать мобильные приложения под разные платформы и операционные системы: iPad, Apple Watch, Apple TV.',
		img: '/courses/ui/learning/6.svg',
		number: '04',
	},
	{
		title: 'Тестирование проектов',
		description: 'Узнаете, как проверять работоспособность. Поработаете с эмуляторами и симуляторами',
		img: '/courses/ui/learning/15.svg',
		number: '05',
	},
	{
		title: 'Публикация в App Store',
		description: 'Сможете загружать и управлять приложениями с помощью App Store Connect',
		img: '/courses/ui/learning/8.svg',
		number: '06',
	},
];

const programs = [
	{
		title: 'Введение в Swift',
	},
	{
		title: 'Циклы',
	},
	{
		title: 'Функции и клоужеры.',
	},
	{
		title: 'Перечисления и структуры. Решение задач',
	},
	{
		title: 'Введение в ООП.',
	},
	{
		title: 'Классы в Swift',
	},
	{
		title: 'Какие минусы есть у наследования и для чего нужны протоколы? Разбор расширений.',
	},
	{
		title: 'Механизм Automatic Reference Counting для управления памятью в Swift ',
	},
	{
		title: 'Итоги изучения основ Swift.',
	},
	{
		title: 'Изучение фреймворка UIKit.',
	},
	{
		title: 'Теория по всем архитектурам приложения',
	},
	{
		title: 'Приложение TodoList. Часть 1 ',
	},
	{
		title: 'Приложение TodoList. Часть 2',
	},
	{
		title: 'Многопоточность и работа с сетью. Изучение REST API и Grand Central Dispatch ',
	},
	{
		title: 'Приложение Rick and Morty. Часть 1 ',
	},
	{
		title: 'Приложение Rick and Morty. Часть 2 ',
	},
	{
		title: 'Вводный урок по SwiftUI',
	},
	{
		title: 'Приложение новости на SwiftUI. Часть 1',
	},
	{
		title: 'Приложение новости на SwiftUI. Часть 2',
	},
	{
		title: 'Введение в реактивное программирование.',
	},
	{
		title: 'Музыĸальный плеер на SwiftUI ',
	},
	{
		title: 'Финальный проект: Магазин одежды.',
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
					title={`Чем занимается`}
					accent={`мобильный разработчик на iOS?`}
					description={`iOS-разработчик отвечает за все этапы создания приложения: разрабатывает архитектуру, проектирует интерфейс, тестирует код и выгружает готовый проект в App Store. \n\n Также программист поддерживает уже разработанное приложение. Он правит баги, пишет обновления, добавляет новые функции.`}
					img='/courses/testing/qa-avtomation/description.svg'
				/>

				<section className={styles.why_work}>
					<h2>
						<span className='accent'>Кем вы сможете работать</span>
						{`\n`}после окончания курса
					</h2>
					<p>
						Пройдя курс по SMM-продвижению от EasyUM вы получите необходимые знания по 5-ти востребованным профессиям в
						сфере digital-маркетинга. Вы сможете выбрать, в каком направлении углублять свои знания, или продолжите
						развиваться как специалист широкого профиля.
					</p>
					<div className={styles.why_work__grid}>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_description}>
									Таргетолог — это человек, который настраивает и запускает рекламу в социальных сетях. Название
									профессии происходит от английского слова target, «цель»
								</p>
							</div>

							<p className={styles.why_work_number}>01</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_description}>
									Маркетолог — это специалист, который создает стратегию продвижения продуктов и услуг, чтобы увеличить
									продажи и общий доход компании
								</p>
							</div>

							<p className={styles.why_work_number}>02</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_description}>
									PR-менеджер — это специалист по связям с общественностью. Выстраивает и контролирует отношения
									компании с целевой аудиторией, партнерами и инвесторами.
								</p>
							</div>

							<p className={styles.why_work_number}>03</p>
						</div>
					</div>
				</section>

				<section className={styles.ideal}>
					<div className={styles.ideal_text}>
						<h2>Для учебы на курсе нужен MacBook или iMac</h2>
						<p>
							Будем использовать среду разработки Xcode. Чтобы ее установить, нужен компьютер c версией macOS не ниже
							Monterey.
						</p>
					</div>
					<div className={styles.ideal_image}>
						<Image
							src='/courses/mobile/mobiledev-ios/imageIdeal.svg'
							alt='Картинка'
							width={456}
							height={314}
							className={styles.ideal_img}
						/>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/mobile/mobiledev-ios/finalProject.svg'
					title='Приложение для iOS «Магазин одежды»'
					description='Мы напишем полноценное приложение с авторизацией, логиĸой, сложной верстĸой при помощи SwiftUI, но при этом не будем забывать про UIKit при помощи ĸоторого мы сделаем много ĸастомных вещей.'
					list={[
						'Научимся работать в ĸоманде и у ĸаждого будут индивидуальные задания. Стеĸ технологий: SwiftUI, UIKit, Firebase, Combine, REST API, Swift Package Manager, MVVM.',
					]}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock course={course.title}/>

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/mobile/mobiledev-ios/certificate.svg' />

				<Work company_title='iOS разработчиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='gitova.svg'
					course={course.title}
					name={`Житова Дарья. Профессиональный IOS разработчик в MadiSpace. Коммерческий опыт разработки 2+ года`}
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
