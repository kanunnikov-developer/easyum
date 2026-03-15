import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Sallary from '../../_components/Salary/Salary';
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

const course = {
	title: dateStart[3].course,
	description_one:
		'Изучите один из самых универсальных языков в мире и получите фундаментальные знания программиста. Сможете участвовать в разработке сложного высоконагруженного ПО - от видеоигр и умных гаджетов, до банковских продуктов и беспилотных дронов.',
	description_two: 'За 4 месяца освоите инструменты Junior С++ разработчика и соберете проекты для портфолио.',
	img: 'programming/c-plus-plus/hero.svg',
	date: dateStart[3].date,
	duration: '4 месяца',
};

const suitable = [
	{
		img: '/courses/ui/suitable/9.svg',
		title: 'Новичкам',
		description: 'У вас нет опыта в программировании. Будете осваивать профессию с нуля',
	},
	{
		img: '/courses/ui/suitable/10.svg',
		title: 'Начинающим',
		description:
			'Вы самостоятельно изучали С++. Хотите структурировать знания, получить опыт и обратную связь от ментора',
	},
	{
		img: '/courses/ui/suitable/11.svg',
		title: 'Смежным специалистам',
		description: 'Вы работали тестировщиком, HR или другим специалистом в IT, но заитересовались программированием.',
	},
	{
		img: '/courses/ui/suitable/10.svg',
		title: 'IT - профи',
		description: 'Вы мастерски владеете другим языком программирования, но появилась потребность освоить С++',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/С++.svg',
		title: 'С++',
		description: 'Объектно-ориентированный язык программирования',
	},
	{
		img: '/courses/ui/instruments/visualstudio.svg',
		title: 'Visual Studio',
		description: 'Интегрированная среда разработки от Microsoft',
	},
	{
		img: '/courses/ui/instruments/borland.svg',
		title: 'Borland C++',
		description: 'Cреда программирования (IDE) для разработки на C++',
	},
	{
		img: '/courses/ui/instruments/stl.svg',
		title: 'STL',
		description: 'Стандартная библиотека шаблонов для C++',
	},
];

const learning = [
	{
		title: ' Писать на Java',
		description: 'Изучите базовые понятия, синтаксис, ООП, сможете решать задачи с помощью алгоритмов',
		img: '/courses/ui/learning/11.svg',
		number: '01',
	},
	{
		title: 'Back-end разработка',
		description: 'Сможете создавать серверную часть сервисов и приложений',
		img: '/courses/ui/learning/5.svg',
		number: '02',
	},
	{
		title: 'Архитектура',
		description: 'Будете писать чистый и понятный другим код, который легко читать и редактировать',
		img: '/courses/ui/learning/12.svg',
		number: '03',
	},
	{
		title: 'Создание приложений',
		description: 'Напишете собственные приложения на Java и добавите их в портфолио Java-разработчика',
		img: '/courses/ui/learning/8.svg',
		number: '04',
	},
	{
		title: 'Создание баз данных',
		description: 'Создадите базы данных для приложений, изучите SQL и MySQL',
		img: '/courses/ui/learning/13.svg',
		number: '05',
	},
	{
		title: 'Основы DevOps',
		description: 'Научитесь доставлять код в продакшн и применять контейнеризацию',
		img: '/courses/ui/learning/4.svg',
		number: '06',
	},
];

const programs = [
	{
		title:
			'Введение в С++. Основные типы данных в С++. Ссылочные данные. Операции языка С++. Операция New/Delete. Расширение контекста.',
	},
	{
		title:
			'Функции в С++. Модификатор Inline и встраиваемые функции. Работа с функциями в С++. Аргументы по умолчанию. Перезагрузка.',
	},
	{
		title:
			'Классы. Инкапсуляция в С++. Декларация классов, настройки доступа. Методы класса. Конструкторы и деструкторы.',
	},
	{
		title: 'Члены класса. Статические данных и функции. Константы. Инициализация переменных в С++.',
	},
	{
		title:
			'Перезагрузка основных операций - присваивания и конструктора копирования. Алгоритм работы с потоками данных в С++. Иерархия классов.',
	},
	{
		title:
			'Ввод и вывод данных. Манипуляторы и их использование в С++. Работа с файлами. Перезагрузка операций ввода/вывода.',
	},
	{
		title: 'Наследование. Повторное использование кода. Виртуальные функции и абстрактные классы в С++.',
	},
	{
		title:
			'Множественное наследование одинаковых методов в С++. Виртуальные базовые классы и деструкторы. Закрытое наследование.',
	},
	{
		title:
			'Чистые виртуальные функции и абстрактные классы. Шаблоны и контейнерные классы. Параметры non-type шаблона. Явная, частичная и полная специализация шаблонов в С++.',
	},
	{
		title:
			'Работа с исключениями. Оператор Return. Механизмы обработки ошибок: Cerr() И Exit(), а также Assert(). Исключения в С++ и их обработка. Операторы Catch, Try и Throw,.',
	},
	{
		title:
			'Спецификация исключений. Работа с обработчиком Catch-All. Динамическая идентификация типов времени выполнения (RTTI).',
	},
	{
		title:
			'Стандартная библиотека шаблонов (STL) в С++. Алгоритмы, контейнеры, итераторы. Контейнеры STL: ассоциативные и последовательные. Адаптеры.',
	},
	{
		title:
			'Итераторы STL. Итерация по списку, вектору, ассоциативному массиву, set-у. Основы работы с UML. Изучение диаграмм использования и последовательности.',
	},
	{
		title: 'Отработка паттернов проектирования в C++. Работа с XML-файлами в С++. Создание отчетов. Обработка файлов.',
	},
	{
		title: 'Изучение среды программирования Borland C++. Базы данных. Метапрограммирование.',
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
					title={`С++ разработчик`}
					accent='- это почетно!'
					description={`Язык программирования С++ очень гибкий, быстрый и высокопроизводительный. За 40 лет нем было написано огромное количество важнейших для мировой экономики продуктов. Разработчики на С++ востребованы не останутся без работы в любых условиях. \n\n Современный программист Си Плюс Плюс может разрабатывать игры, графические движки, компоненты для операционных систем, сетевые и серверные приложения, драйверы устройств, базы данных и многое другое.`}
					img='/courses/programming/c-plus-plus/description.svg'
				/>

				<Sallary min={50000} max={200000} />

				<Lider
					img='/courses/programming/c-plus-plus/lider.svg'
					title='крепкий фундамент для работы программистом'
					accent='Освоив С++ в качестве первого языка вы заложите'
					size='small'
				/>

				<section className={styles.writeCplus}>
					<h2>
						<span className='accent'>На языке</span> программирования <span className='accent'>C++</span> написаны:
					</h2>
					<div className={styles.writeCplus_grid}>
						<div className={styles.writeCplus__image}>
							<Image
								src='/courses/programming/c-plus-plus/writeCplus/1.svg'
								alt='Картинка'
								width={262}
								height={212}
								className={styles.writeCplus__img}
							/>
						</div>
						<div className={styles.writeCplus__image}>
							<Image
								src='/courses/programming/c-plus-plus/writeCplus/2.svg'
								alt='Картинка'
								width={262}
								height={212}
								className={styles.writeCplus__img}
							/>
						</div>
						<div className={styles.writeCplus__image}>
							<Image
								src='/courses/programming/c-plus-plus/writeCplus/3.svg'
								alt='Картинка'
								width={262}
								height={212}
								className={styles.writeCplus__img}
							/>
						</div>
						<div className={styles.writeCplus__image}>
							<Image
								src='/courses/programming/c-plus-plus/writeCplus/4.svg'
								alt='Картинка'
								width={262}
								height={212}
								className={styles.writeCplus__img}
							/>
						</div>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				{/* ------------------------------
									Финальный проект
				------------------------------ */}

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/programming/c-plus-plus/certificate.svg' />

				<Work company_title='С++ разработчиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='gudzenko.svg'
					course={course.title}
					name='Гудзенко Артем . Профессиональный веб-разработчик. Опыт разработки 3+ лет.'
					description='Основные навыки: C++, Go, Ruby, Vue.js. Знает основы работы с реляционными базами данных (Oracle, PostgreSQL). Пишет тесты для сайтов с помощью Selenium WebDriver на Python 2.7 и Ruby.'
				/>

				<Reviews />

				<Duration mounth={course.duration} programs={course.title} />

				<section className={styles.photos}>
					<h2>
						<span className='accent'>Фото очных</span> занятий {`\n`} в EasyUM
					</h2>
					<PhotosComponent />
				</section>
			</div>
		</div>
	);
}
