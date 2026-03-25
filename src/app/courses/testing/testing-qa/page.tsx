import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Image from 'next/image';
import Lider from '../../_components/Lider/Lider';
import Sallary from '../../_components/Salary/Salary';
import Suitable from '../../_components/Suitable/suitable';
import SwiperProjects from '../../_components/SwiperProjects/SwiperProjects';
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
	title: dateStart[8].course,
	description_one: 'Тестировщик ПО входит в ТОП-5 самых востребованных it-профессий в 2025 году.',
	description_two:
		'На практике освоите всё необходимое для должности Junior-тестировщика. Найдете первые баги и составите баг-репорт прямо на занятиях.',
	img: 'testing/testing-qa/hero.svg',
	date: dateStart[8].date,
	duration: '3 месяца',
	duration_number: 3,
	price: dateStart[8].price,
	imgCourse: dateStart[8].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/9.svg',
		title: 'Новичкам',
		description: 'Вы никогда не работали в IT, но теперь твердо решили быстро туда попасть.',
	},
	{
		img: '/courses/ui/suitable/10.svg',
		title: 'Неопределившимся',
		description: 'Вы хотите в IT, но не знаете, в какую профессию лучше податься. Тестирование – лучший вариант.',
	},
	{
		img: '/courses/ui/suitable/11.svg',
		title: 'Без языка',
		description: 'Языки программирования снятся в кошмарах. Хорошо, что на курсах тестирования их не придется учить.',
	},
	{
		img: '/courses/ui/suitable/10.svg',
		title: 'Требующий перемен',
		description: 'Вы связаны с IT (например, работали HR-менеджером) и хотите сменить должность. Самое время начать!',
	},
];

const projects_swiper = [
	{
		img: '/courses/testing/qa-pro/projects/1.svg',
		description: 'Тестирование онлайн CRM-системы учета студентов университета. Заведение баг-репортов в Jira',
	},
	{
		img: '/courses/testing/qa-pro/projects/2.svg',
		description: 'Тестирование мобильного приложения интернет-магазина обуви. Тестирование оплаты, регистрации, и пр.',
	},
	{
		img: '/courses/testing/qa-pro/projects/3.svg',
		description: 'API-тестирование портала онлайн бронирования отелей с помощью Postman',
	},
	{
		img: '/courses/testing/qa-pro/projects/4.svg',
		description: 'Нагрузочное тестирование с помощью JMeter интернет-портала бронирования билетов.',
	},
	{
		img: '/courses/testing/qa-pro/projects/5.svg',
		description:
			'Автоматизированное тестирование с помощью Selenium IDE онлайн сервиса по доставке груза в разные города.',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/jira.svg',
		title: 'Jira',
		description: 'Система управления проектами для разработчиков и команд.',
	},
	{
		img: '/courses/ui/instruments/api.svg',
		title: 'API',
		description: 'Интерфейс для взаимодействия программ и сервисов.',
	},
	{
		img: '/courses/ui/instruments/postman.svg',
		title: 'Postman',
		description: 'Инструмент тестирования и разработки API.',
	},
	{
		img: '/courses/ui/instruments/selenium.svg',
		title: 'Selenium IDE',
		description: 'Автоматизация тестирования веб-приложений.',
	},
	{
		img: '/courses/ui/instruments/swagger.svg',
		title: 'Swagger',
		description: 'Средство проектирования и документирования API.',
	},
	{
		img: '/courses/ui/instruments/charles.svg',
		title: 'Charles Proxy',
		description: 'Отладчик для мониторинга и анализа сетевых запросов.',
	},
	{
		img: '/courses/ui/instruments/fiddler.svg',
		title: 'Fiddler',
		description: 'Веб-отладчик для анализа и манипуляции трафиком.',
	},
	{
		img: '/courses/ui/instruments/http.svg',
		title: 'HTTP-протокол',
		description: 'Основной протокол передачи данных в интернете.',
	},
	{
		img: '/courses/ui/instruments/sql.svg',
		title: 'SQL',
		description: 'Язык структурированных запросов для работы с базами данных.',
	},
	{
		img: '/courses/ui/instruments/jmeter.svg',
		title: 'JMeter',
		description: 'Инструмент для нагрузочного тестирования и анализа производительности.',
	},
];

const learning = [
	{
		title: 'Ручное Тестирование ПО',
		description: 'Научитесь качественно тестировать десктопные и веб-приложения',
		img: '/courses/ui/learning/16.svg',
		number: '01',
	},
	{
		title: 'Баг-трекинговые системы',
		description: 'Сможете пользоваться популярными баг-трекинговыми системами. Разберете методологии Agile и Scrum.',
		img: '/courses/ui/learning/17.svg',
		number: '02',
	},
	{
		title: 'Тестирование мобильных и веб приложений',
		description: 'Попрактикуетесь составлять тест-планы, тест-кейсы, баг-репорты',
		img: '/courses/ui/learning/18.svg',
		number: '03',
	},
	{
		title: 'API-тестирование с Postman',
		description: 'Разберем, что такое API и его виды. Научимся делать перехват трафика и писать простые авто-тесты.',
		img: '/courses/ui/learning/19.svg',
		number: '04',
	},
	{
		title: 'SQL и работа с базами данных',
		description: 'Анализировать эффективность своих действий, корректировать стратегию и делать наглядные отчеты',
		img: '/courses/ui/learning/20.svg',
		number: '05',
	},
	{
		title: 'Selenium IDE',
		description: 'Освоите основы автоматизированного тестирования с помощью инструмента Selenium Driver.',
		img: '/courses/ui/learning/21.svg',
		number: '06',
	},
];

const programs = [
	{
		title: 'Теория тестирования. Типы тестирования',
	},
	{
		title: 'Методологии Agile и Scrum. Kanban и XP. Анализ требований',
	},
	{
		title: 'Техники тест-дизайна',
	},
	{
		title: 'Тестовая документация. Тест-план. Тест-кейсы и чек-листы. Баг-репорты',
	},
	{
		title: 'Разбор баг-трекинговых систем',
	},
	{
		title: 'Работа в Jira. Заведение баг-репортов. ',
	},
	{
		title: 'Тестирование Веб-приложений. Сетевая модель TCP/IP',
	},
	{
		title: 'Тестирование Баз данных. PostgreSQL / MySQL. Язык запросов SQL',
	},
	{
		title: 'API - тестирование c Postman. Инструмент Swagger',
	},
	{
		title: 'Тестирование мобильных приложений. Разбор инструментов для перехвата трафика. Charles Proxy и Fiddler',
	},
	{
		title: 'Нагрузочное тестирование. JMeter',
	},
	{
		title: 'Консоль браузера DevTools',
	},
	{
		title: 'Ввод в автоматизированное тестирование. Разбор Selenium IDE',
	},
	{
		title: 'Проработка часто-задаваемых вопросов на собеседовании по Тестированию ПО. Сертификация ISTQB',
	},
];

const teachers = [
	{
		img: '/courses/ui/TeacherSwiper/narseeve.svg',
		name: 'Анна Нарсеева',
		description: 'Ведущий инженер по тестированию Hilti Corporation, Мюнхен Германия. Опыт в тестировании 5+ лет',
	},
	{
		img: '/courses/ui/TeacherSwiper/asrianc.svg',
		name: 'Левон Асриянц',
		description:
			'TeamLead нескольких QA-команд, работал в проектах от Амазона, Магнит, QSOFT, GFC. Опыт в тестировании 4+ лет',
	},
	{
		img: '/courses/ui/TeacherSwiper/gabdulaxkova.svg',
		name: 'Диляра Габдулахкова',
		description: 'QA Engineer в компании ТТК Digital. Опыт в Тестировании 3+ года',
	},
	{
		img: '/courses/ui/TeacherSwiper/matveev.svg',
		name: 'Иван Матвеев',
		description: 'TeamLead в отделе тестирования. Опыт в тестировании 5+ лет',
	},
	{
		img: '/courses/ui/TeacherSwiper/goncharov.svg',
		name: 'Илья Гончаров',
		description: 'Руководитель проекта в ГК «Калашников». Коммерческий опыт 5+ лет',
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
					title={`Что делает \n`}
					accent='Тестировщик ПО?'
					description={`Тестировщик ПО занимается выявлением ошибок в работе сайта или сервиса и отправляет их на доработку. \n\n Одна из задач тестировщика – представить себя обычным пользователем и детально проверить корректность работы программы. Вы будете моделировать все возможные ситуации, в которые может попасть пользователь, и смотреть, всё ли работает корректно. А так же научитесь пользоваться специализированными инструментами.`}
					img='/courses/testing/qa-pro/description.svg'
				/>

				<section className={styles.why}>
					<h2>
						<span className='accent'>Почему Тестировщик ПО </span>
						{`\n`}
						идеальный старт для новичков
					</h2>
					<div className={styles.why_grid}>
						<div className={styles.item}>
							<div className={styles.image}>
								<Image
									src='/courses/testing/testing-qa/why/1.svg'
									alt='Картинка'
									width={205}
									height={205}
									className={styles.img}
								/>
							</div>
							<p>Не нужно учить язык программирования</p>
							<span>
								Язык программирования – самая сильная головная боль для новичка в IT. Вам не придется его учить, ведь
								для работы ручного тестировщика язык программирования не требуется.
							</span>
						</div>
						<div className={styles.item}>
							<div className={styles.image}>
								<Image
									src='/courses/testing/testing-qa/why/2.svg'
									alt='Картинка'
									width={205}
									height={205}
									className={styles.img}
								/>
							</div>
							<p>Самая востребованная {`\n`} it-профессия</p>
							<span>
								Данную профессию освоит даже "мамочка в декрете". Чтоб обучиться на курсе и найти свою первую работу
								Тестировщика достаточно просто базовых знаний компьютера.
							</span>
						</div>
						<div className={styles.item}>
							<div className={styles.image}>
								<Image
									src='/courses/testing/testing-qa/why/3.svg'
									alt='Картинка'
									width={205}
									height={205}
									className={styles.img}
								/>
							</div>
							<p>Широкие возможности {`\n`} для развития</p>
							<span>
								Тестирование поможет быстро войти в IT и станет отправной точкой для будущих достижений. Вы можете стать
								тимлидом, освоить автотестирование или пойти в разработчики.
							</span>
						</div>
					</div>
				</section>

				<section className={styles.ideal}>
					<div className={styles.ideal_text}>
						<h2>Профессия полностью подходит для удаленной работы.</h2>
						<p>
							Практически 90% вакансий на Тестировщика ПО, выставленных на hh.ru, доступны для работы из дома. Теперь Вы
							можете заниматься любимой работой с любого уголка мира.
						</p>
					</div>
					<div className={styles.ideal_image}>
						<Image
							src='/courses/testing/testing-qa/imageIdeal.svg'
							alt='Картинка'
							width={456}
							height={314}
							className={styles.ideal_img}
						/>
					</div>
				</section>

				<Lider
					title='– самая востребованная профессия.'
					accent='Тестировщик ПО'
					img='/courses/web/javascript-front-end/lider.svg'
					size='large'
				/>

				<Sallary min={50000} max={290000} />

				<Description
					title={`Не переживайте,`}
					accent='спрос на тестировщиков не снизится'
					description={`Россия активно переходит в онлайн. Чем больше проектов запускается, тем выше спрос на тестировщиков. Ни одна команда не позволит себе выпустить продукт без предварительной проверки.`}
					img='/courses/testing/qa-pro/demand.svg'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<SwiperProjects title={`создадим \n 5 проектов`} accent='На курсе' items={projects_swiper} />

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock course={course.title} />

				<Programm mounth={course.duration} programs={programs} />

				{/* --------------------------
									Блок Резюме
				-------------------------- */}

				<Certificate img='/courses/testing/testing-qa/certificate.svg' />

				<Work company_title='Тестировщиков' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='panina.svg'
					course={course.title}
					name='Светлана Панина. Team Lead в отделе тестирования крупной it-компании - Custis. Опыт работы 10+ лет.'
					description='Автор телеграм канала о тестировании «Testorest». Преподаватель с большим опытом и авторскими методиками обучения. Будет вашим проводником в мир тестирования it - систем.'
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
