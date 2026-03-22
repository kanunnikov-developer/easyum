import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import TeacherVideo from '../../_components/TeacherVideo/TeacherVideo';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
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
import getRegion from '@/lib/getRegion';
import Tariffs from '../../_components/Tariffs/Tariffs';
import { Suspense } from 'react';
import FAQ from '../../_components/FAQ/FAQ';

const course = {
	title: dateStart[20].course,
	description_one: 'Научитесь настраивать, запускать и анализировать рекламные компании в Яндексе.',
	description_two:
		'Освоите главные инструменты специалиста по контекстной рекламе и разработаете проект для портфолио. Всего через 2 месяца будете полностью готовы к работе по специальности.',
	img: 'marketing/reklama-ppc/hero.svg',
	date: dateStart[20].date,
	duration: '2 месяца',
	price: dateStart[20].price,
	imgCourse: dateStart[20].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Освоите базовые понятия и инструменты под руководством опытного специалиста по контекстной рекламе.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Таргетологам',
		description: 'Расширите профессиональные навыки и сможете взять на себя управление всей интернет-рекламой.',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Маркетологам',
		description:
			'Освоите новый востребованный канал продвижения. Этот канал поможет привлечь клиентов и увеличить число продаж.',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Владельцам бизнеса',
		description:
			'Сможете сами продвигать бизнес в интернете. Разберетесь в специфике профессии и сможете осознанно нанимать специалистов.',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/direct.svg',
		title: 'Яндекс Директ',
		description: 'Сервис для настройки рекламы в поиске и на сайтах партнеров',
	},
	{
		img: '/courses/ui/instruments/metrika.svg',
		title: 'Яндекс Метрика',
		description: 'Сервис для анализа сайтов: посетители, источники, цели и воронки',
	},
	{
		img: '/courses/ui/instruments/wordstat.svg',
		title: 'Яндекс Wordstat',
		description: 'Инструмент для анализа популярности ключевых слов',
	},
	{
		img: '/courses/ui/instruments/seo.svg',
		title: 'SEO',
		description: 'Технология оптимизации сайта для высоких позиций в поисковых результатах',
	},
	{
		img: '/courses/ui/instruments/pricelab.svg',
		title: 'PriceLabs',
		description: 'Сервис автоматизации динамического ценообразования',
	},
	{
		img: '/courses/ui/instruments/canva.svg',
		title: 'Canva',
		description: 'Графический редактор для дизайна без специальных навыков',
	},
	{
		img: '/courses/ui/instruments/hunter.svg',
		title: 'Target Hunter',
		description: 'Сервис для поиска потенциальных клиентов и контактных данных для бизнеса',
	},
	{
		img: '/courses/ui/instruments/mytarget.svg',
		title: 'MyTarget',
		description: 'Рекламная платформа Mail.ru Group для таргетированной рекламы',
	},
];

const programs = [
	{
		title:
			'Введение в Контекстную рекламу и Медиапланирование. Принципы медиапланирования, виды КР. Экосистема рекламных сетей Google и Яндекс. Цена за Клики.',
	},
	{
		title:
			'Введение в семантику. Глоссарий РРС-специалиста. Морфология и операторы. Минус-слова и работа с ними. Сбор семантики (автоматизация процесса).',
	},
	{
		title:
			'Стандартные технологии Java SE (Коллекции, Многопоточность, Exception, Логирование, Maven). Версия контроля - Git.',
	},
	{
		title:
			'Экосистема Яндекса. Обзор рекламного кабинета Яндекс.Директ. Настройка Рекламной кампании в Яндексе: настройка UTM-меток, цели, группировки, сегменты. Обзор сервиса Яндекс.Аудитории.',
	},
	{
		title:
			'Экосистема Google. Обзор рекламного кабинета Google Ads. Настройка Рекламной кампании в Google: объявления и расширения, стратегия, настройка целей. Перенос рекламной кампании Яндекс в Google Ads.',
	},
	{
		title:
			'Оптимизация рекламной кампании. Отчёты РРС-специалиста. Обзор полезных сервисов для повышения конверсии на сайте.',
	},
	{
		title: 'Геосервисы Google и Яндекс и работа с ними. Обзор сервисов для автоматизации контекстной рекламы.',
	},
	{
		title:
			'Обзор Google Analytics: сводки, специальные отчёты, фильтры. Настройка междоменного отслеживания. Конверсия. Понятие микро- и макро-конверсии. Изучим методы и принципы оптимизации Рекламной Кампании.',
	},
	{
		title:
			'Базовый анализ рекламной кампании. Семантика и KPI-объявлений. Карты поведения в Google Analytics и Яндекс.Метрике. Отчётная документация в Excel. Создадим первый сводный отчёт по вашей рекламной кампании.',
	},
	{
		title:
			'Анализ данных. Путь к покупке глазами РРС-специалиста. Введение в GTM. Performance-стратегия для E-commerce. Изучаем Тренды, учимся анализировать конкурентов и искать свою целевую аудиторию.',
	},
	{
		title:
			'E-commerce в Google.Ads и Яндекс.Директ: создание магазина, система аналитики PriceLabs. Динамические рекламные кампании.',
	},
	{
		title:
			'Ремаркетинг. Настройка ремаркетинга для E-commerce. Создание Маркетинг-плана продвижения Интернет-магазина.',
	},
	{
		title:
			'Введение в веб-аналитику. Обзор сервисов для анализа эффективности Рекламных Кампаний. Правила и критерии Анализа результатов.',
	},
	{
		title: 'Яндекс.Метрика. Google.Analitics. Обзор интерфейса и основные отчёты.',
	},
	{
		title:
			'Отчётная документация РРС-специалиста по Веб-аналитике. Примеры отчётов. Учимся анализировать отчёты и исправлять ошибки. Создание Кейса продвижения Интернет-Магазина.',
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

				<TeacherVideo />

				<GetLesson course={course.title}/>

				<Description
					title={`Контекстолог привлекает \n`}
					accent={`новых клиентов`}
					description={`Главная задача специалиста по контекстной рекламе – рекламировать бизнес в интернете и привлекать новых клиентов. \n\n Контекстолог подбирает ключевые слова, настраивает рекламные кампании, анализирует показатели каналов и креативов, ищет способы улучшить результаты и оптимизирует расходы.`}
					img='/courses/testing/qa-avtomation/description.svg'
				/>

				<Description
					title={`Яндекс Директ – главная площадка для`}
					accent={`размещения контекстной рекламы`}
					description={`60% россиян используют Яндекс для поиска информации \n\n На курсе вы освоите Яндекс Директ на достойном уровне. В нынешних реалиях это главный инструмент востребованного контекстолога.`}
					img='/courses/marketing/reklama-ppc/description2.svg'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/marketing/reklama-ppc/finalProject.svg'
					title='Настроенные рекламные кампании в Яндекс.Директ'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Разрабатывать рекламные креативы',
						'Настраивать контекстную рекламу в Яндекс Директ',
						'Оптимизировать бюджет кампаний',
						'Анализировать результаты в Яндекс.Метрике',
						'Улучшать результаты рекламных кампаний',
					]}
				/>

				<Instruments instrument={instruments} />

				<GetLessonBlock course={course.title}/>

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/marketing/reklama-ppc/certificate.svg' />

				<Work company_title='Контекстологов' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='shabala.svg'
					course={course.title}
					name='Шабала Станислав. Опыт в маркетинге 10+ лет.'
					description='Работал над проектами для таких крупных компаний как Mitsubishi, KIA, Mobil 1, Мята, Henkel, 3M.'
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
