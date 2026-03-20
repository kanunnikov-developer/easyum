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
import Learning from '../../_components/Learning/Learning';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Programm from '../../_components/Programm/Programm';
import Certificate from '../../_components/Certificate/Certificate';
import Work from '../../_components/Work/Work';
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import EasyUm from '../../_components/EasyUm/Easyum';
import Reviews from '@/app/_components/Reviews/Reviews';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import Metodist from '../../_components/Metodist/Metodist';
import { Suspense } from 'react';
import Tariffs from '../../_components/Tariffs/Tariffs';
import getRegion from '@/lib/getRegion';
import FAQ from '../../_components/FAQ/FAQ';

const course = {
	title: dateStart[19].course,
	description_one:
		'Научитесь составлять стратегии продвижения, работать с таргетированной, контекстной рекламой, SEO, анализировать и оптимизировать результаты кампаний.',
	description_two:
		'Освоите популярные инструменты продвижения и будете полностью готовы к работе интернет-маркетолога в компании или на фрилансе.',
	img: 'marketing/internet-marketing/hero.svg',
	date: dateStart[19].date,
	duration: '4,5 месяца',
	price: dateStart[19].price,
	imgCourse: dateStart[19].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description:
			'С нуля освоите перспективную профессию. Наполните портфолио, составите резюме и будете готовы к первой работе.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Специалистам по рекламе',
		description: 'Углубите знания и расширите навыки. Сможете устроиться на новую должность и повысить зарплату.',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Офлайн-маркетологам',
		description: 'Освоите новые инструменты и каналы продвижения. Станете универсальным и востребованным специалистом.',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Предпринимателям',
		description: 'Научитесь эффективно продвигать свой бренд в интернете, увеличите продажи и прибыль.',
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
		img: '/courses/ui/instruments/vk.svg',
		title: 'VK Ads',
		description: 'Рекламный кабинет социальной сети ВКонтакте',
	},
	{
		img: '/courses/ui/instruments/telegram.svg',
		title: 'Telegram Ads',
		description: 'Рекламный кабинет мессенджера Telegram',
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

const learning = [
	{
		title: 'Стратегия продвижения',
		description: 'Научитесь анализировать целевую аудиторию, конкурентов и выделять преимущества продукта',
		img: '/courses/ui/learning/10.svg',
		number: '01',
	},
	{
		title: 'Контент-маркетинг',
		description:
			'Сможете разрабатывать контент-план, создавать продающий контент, направлять работу контент- и SMM-менеджеров',
		img: '/courses/ui/learning/14.svg',
		number: '02',
	},
	{
		title: 'Реклама в соцсетях',
		description:
			'Узнаете, как устроена таргетированная реклама ВКонтакте и Telegram. Познакомитесь с платформой myTarget',
		img: '/courses/ui/learning/12.svg',
		number: '03',
	},
	{
		title: 'Контекстная реклама',
		description: 'Сможете настраивать контекстную рекламу в Яндекс.Директ и анализировать с помощью Яндекс.Метрики',
		img: '/courses/ui/learning/6.svg',
		number: '04',
	},
	{
		title: 'SEO-продвижение',
		description: 'Научитесь работать с семантикой, оптимизировать работу сайта и улучшать его позицию в поисковиках',
		img: '/courses/ui/learning/15.svg',
		number: '05',
	},
	{
		title: 'Маркетинговая аналитика',
		description:
			'Узнаете, как определить KPI и рассчитать ROI. Познакомитесь с системами аналитики: научитесь выбирать подходящую и работать с ней',
		img: '/courses/ui/learning/8.svg',
		number: '06',
	},
];

const programs = [
	{
		title:
			'Введение в Интернет-Маркетинг. Определение и цели маркетинга в Интернете. Отличие рекламы в интернете от других видов рекламы. Реклама, классификации и виды рекламы. Составление маркетинговой стратегии.',
	},
	{
		title: 'Бренд, как инструмент достижения Бизнес целей. Имидж и позиционирование.',
	},
	{
		title:
			'Исследование потребителей. Узнаете кто именно покупает вашу продукцию и возьмете курс на свою целевую аудиторию. Современные тенденции Интернет-Маркетинга. Как стать Авторитетным другом своему Покупателю.',
	},
	{
		title:
			'Создание контента для бренда. Копирайтинг. Фото-контент. Бренд-бук. Как создавать контент, который захотят лайкнуть и сохранить.',
	},
	{
		title: 'Продвижение в социальных сетях. Виды продвижения: белые, серые, черные.',
	},
	{
		title:
			'Таргетированная реклама в социальных сетях. Особенности, запреты и ограничения, стоимость. Обзор всех доступных кабинетов.',
	},
	{
		title:
			'Платные и бесплатные способы продвижения в социальных сетях. Серые и чёрные методы раскрутки. Массфоловинг, спам-рассылки, проплаченные отзывы, боты. Белые методы раскрутки в социальных сетях: участие в мероприятиях, партнёрство, SFS, взаимопиар, пиксели и т.д. Поговорим об эффективности и ресурсоёмкости.',
	},
	{
		title:
			'Учимся общаться с Заказчиком. Коммерческое предложение, определение, виды, особенности. Учимся писать «холодное» и «горячее» коммерческое предложение. Составим холодное коммерческое предложение и узнаем где искать Заказчика.',
	},
	{
		title:
			'Анализ проведенных действий по раскрутке страниц в социальных сетях. Проанализируем прирост подписчиков, эффективность рекламных кампаний и белых методов продвижения. Составим план работ на ближайшее будущее.',
	},
	{
		title:
			'Контекстная реклама - Быть или не быть? Принципы работы, виды КР. Рекламная сеть Яндекса и работа с ней. Инструменты веб-аналитики. Постановка целей.',
	},
	{
		title:
			'Целевая Аудитория. Определить, найти, завлечь. Факторы влияния и сдерживания. Воронка продаж. Базовые принципы маркетинга.',
	},
	{
		title:
			'Эффективные и не эффективные ключевые слова – как почувствовать разницу между «Yandex» и «Яндекс». Ключевые слова, определение, принцип работы и роль. Сервисы подбора ключевых слов.',
	},
	{
		title:
			'Как писать так, что бы вас читали? Основы Копирайтинга. Продающий текст, лозунг, объявление. Правила эффективного текста.',
	},
	{
		title:
			'Цены и запреты. Общие принципы ранжирования поисковых систем. Запрещённые товары и требования к рекламным кампаниям Яндекс. Аукцион ценообразования, система оплаты, как показывать своё объявление по выгодным ставкам?',
	},
	{
		title:
			'Виды КР: Поисковая реклама и Тематическая реклама. Определение, сходства и различия. Создадим пример поисковой и тематической рекламы для вашего предприятия, настроим рекламную кампанию.',
	},
	{
		title:
			'Виды КР: Поведенческая реклама и Медийный Контент. Определение, сходства и различия. Области применения. Создадим примеры поведенческой рекламы и медийного контента для вашего предприятия, настроим целевые показы.',
	},
	{
		title:
			'Анализ запущенной рекламной кампании. Сравнение поставленных на первом занятии целей и результата достигнутого на последнем занятии.',
	},
	{
		title:
			'Оптимизация рекламной кампании. Отчёты РРС-специалиста. Обзор полезных сервисов для повышения конверсии на сайте.',
	},
	{
		title:
			'Геосервисы Яндекса и работа с ними. Обзор сервисов для автоматизации контекстной рекламы. Performance-стратегия для E-commerce. Изучаем Тренды, учимся анализировать конкурентов и искать свою целевую аудиторию.',
	},
	{
		title:
			'E-commerce в Яндекс.Директ: создание магазина, система аналитики PriceLabs. Динамические рекламные кампании. Ремаркетинг. Настройка ремаркетинга для E-commerce. Создание Маркетинг-плана продвижения Интернет-магазина.',
	},
	{
		title:
			'Введение в веб-аналитику. Обзор сервисов для анализа эффективности Рекламных Кампаний. Правила и критерии Анализа результатов. Яндекс.Метрика. Обзор интерфейса и основные отчёты.',
	},
	{
		title:
			'Юзабилити. Углубленное изучение понятия «Юзабилити Сайта». Учимся понимать потребности, искать «ошибки» юзабилити с помощью Яндекс.Метрики и исправлять их в соответствии с требованиями Посетителей сайта.',
	},
	{
		title:
			'Отчётная документация специалиста по Веб-аналитике. Примеры отчётов. Учимся анализировать отчёты и исправлять ошибки. Создание Кейса продвижения Интернет-Магазина.',
	},
	{
		title:
			'Стратегия и Планирование. Изучим методологию планирования DMI и составим маркетинговую кампанию в соответствии с ее основными принципами.',
	},
	{
		title:
			'Юридический аспект Маркетинга. Основные положения закона «О рекламе». Что нужно знать Маркетологу, чтобы не нарваться на штрафы и санкции.',
	},
	{
		title:
			'SEO, понятие, цели, место и задачи SEO-оптимизатора в структуре Интернет-Маркетинга. Поисковые системы, алгоритмы работы. Ссылочная масса как характеристика «трастового сайта». Санкции и запреты. Бан, фильтр, спам – как не стать «спамом» и нарастить «траст» сайта?',
	},
	{
		title:
			'Текстовая оптимизация сайта: поисковые запросы, виды, методы сбора Семантического Ядра. Работа с Ключевыми словами и их кластеризация. Основы разработки семантической структуры сайта.',
	},
	{
		title:
			'Техническая оптимизация сайтов: ошибки вёрстки и функционала, «размытый» код. Основы технической оптимизации сайта, правила анализа, составление ТЗ для Developer-ов.',
	},
	{
		title:
			'Инструментарий SEO-оптимизатора: сервисы поисковых систем для владельцев сайта, анализ и синхронизация сайта с «поисковиками», индексация сайта и ее вычисление.',
	},
	{
		title:
			'Анализ конкурентов: поиск пропущенных Ключевых слов, анализ конверсий по Ключевым словам, анализ ссылочной массы.',
	},
	{
		title:
			'Аудит сайта: Выявление и исправление проблем, корректировка стратегий и внешние факторы ранжирования. Разработаем стратегию линкбилдинга для своего сайта.',
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

				<GetLesson />

				<Description
					title={`Интернет-маркетолог – \n`}
					accent={`универсальный \n специалист`}
					description={`Интернет-маркетолог продвигает бизнес в интернете, завлекает и удерживает покупателей. \n\n Он знает целевую аудиторию и рынок клиента, продумывает стратегию раскрутки и реализует ее с помощью разных каналов и инструментов продвижения.`}
					img='/courses/web/javascript-front-end/description.svg'
				/>

				<section className={styles.why_work}>
					<h2>
						<span className='accent'>5 профессий</span>в одном курсе
					</h2>
					<p>Интернет-маркетолог совмещает в себе навыки этих специалистов:</p>
					<div className={styles.why_work__grid}>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>SMM-менеджер</p>
								<p className={styles.why_work_description}>
									Поработаете с контентом и научитесь выстаивать диалог бренда с клиентом
								</p>
							</div>

							<p className={styles.why_work_number}>01</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>Таргетолог</p>
								<p className={styles.why_work_description}>
									Научитесь запускать и оптимизировать таргетированную рекламу
								</p>
							</div>

							<p className={styles.why_work_number}>02</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>Контекстолог</p>
								<p className={styles.why_work_description}>Сможете настраивать и управлять контекстной рекламой</p>
							</div>

							<p className={styles.why_work_number}>03</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>SEO-специалист</p>
								<p className={styles.why_work_description}>Узнаете, как вывести сайт на первые позиции в поисковиках</p>
							</div>
							<p className={styles.why_work_number}>04</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>Маркетинговый аналитик</p>
								<p className={styles.why_work_description}>
									Научитесь оценивать успешность рекламных кампаний и улучшать стратегию продвижения
								</p>
							</div>
							<p className={styles.why_work_number}>05</p>
						</div>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/marketing/internet-marketing/finalProject.svg'
					title='Стратегия продвижения для выбранного вами бренда'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Заниматься SEO-оптимизацией сайтов',
						'Настраивать контекстную рекламу в Яндекс. Директ',
						'Запускать таргетированную рекламу',
						'Заниматься веб-аналитикой',
						'Создавать ТЗ для подрядчиков',
						'Создавать контент для рекламных кампаний',
						'Продумывать стратегию продвижения бренда в интернете',
					]}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/marketing/internet-marketing/certificate.svg' />

				<Work company_title='Интернет-маркетологов' />

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
