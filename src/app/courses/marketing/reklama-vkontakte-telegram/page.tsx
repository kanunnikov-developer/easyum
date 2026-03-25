import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import TeacherVideo from '../../_components/TeacherVideo/TeacherVideo';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
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
import getRegion from '@/lib/getRegion';
import Tariffs from '../../_components/Tariffs/Tariffs';
import { Suspense } from 'react';
import FAQ from '../../_components/FAQ/FAQ';

const course = {
	title: dateStart[21].course,
	description_one:
		'Научитесь настраивать эффективную таргетированную рекламу в социальных сетях. Освоите все доступные в 2025 году площадки и запустите первые рекламные кампании с реальным бюджетом.',
	description_two: 'Оформите ваш первый крупный кейс в портфолио и будете готовы брать заказы уже через 1,5 месяца.',
	img: 'marketing/reklama-vkontakte-telegram/hero.svg',
	date: dateStart[21].date,
	duration: '1,5 месяца',
	duration_number: 1.5,
	price: dateStart[21].price,
	imgCourse: dateStart[21].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Смогут получить современную и востребованную профессию',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'SMM-менеджерам',
		description: 'Прокачают свои знания о рекламе в социальных сетях',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Предпринимателям',
		description: 'Увеличат продажи из социальных сетей и привлечь новую аудиторию',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Офлайн-маркетологам',
		description: 'Разберутся в digital-маркетинге и актуальным методах продвижения',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/vk.svg',
		title: 'VK Ads',
		description: 'Рекламный кабинет социальной сети ВКонтакте',
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
			'Введение в таргетированную рекламу. Подготовка к настройке таргетированной рекламы. Разработка тактических действий.',
	},
	{
		title:
			'Анализ продукта, конкурентов, разработка стратегии. УТП. Вводные понятия и формулы. Подготовка рекламных материалов - тексты объявлений и баннеры.',
	},
	{
		title:
			'Медиапланирование. Определение, основные тезисы. Расчёт Бюджета на Рекламную Кампанию. Определение целей и путей их достижения. Тестовый период рекламной кампании.',
	},
	{
		title:
			'Реклама в Vkontakte. Особенности, запреты и ограничения. Обзор инструментария и возможностей. Ретаргет. Запуск РК.',
	},
	{
		title:
			'Реклама в MyTarget. Особенности, запреты и ограничения. Обзор инструментария и возможностей. Ретаргет. Запуск РК.',
	},
	{
		title:
			'Реклама в Telegram. Особенности, запреты и ограничения. Обзор инструментария и возможностей. Ретаргет. Запуск РК.',
	},
	{
		title:
			'Инструменты поиска своей Целевой Аудитории. Обзор сервисов таргета. Разбор функционала и инструментария сервисов. Преимущества и недостатки. Сравнительная характеристика. Научимся искать свою Аудиторию и составлять план работы с ней.',
	},
	{
		title: 'Аналитика рекламных кампаний в Яндекс Метрике и Google Analytics. Составление отчета.',
	},
	{
		title:
			'Учимся общаться с заказчиком. Коммерческое предложение, определение, виды, особенности. Поиск заказчиков. Портфолио таргетолога.',
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

				<GetLesson course={course.title} />

				<Description
					title={`Кто такой`}
					accent={`таргетолог?`}
					description={`Таргетированная реклама это направление интернет-маркетинга, концентрирующееся на рекламе в социальных сетях и их партнерских площадках. Это важный канал развития бизнеса, ведь благодаря рекламе даже начинающий предприниматель может быстро найти свою аудиторию. \n\n Таргетолог анализирует целевую аудиторию проекта, и настраивает точечную рекламу, основываясь на демографии и интересах человека. Он должен не только хорошо разбираться в технической настройке рекламы, но и создавать цепляющий контент, тестировать гипотезы и анализировать результаты.`}
					img='/courses/marketing/reklama-vkontakte-telegram/description.svg'
				/>

				<section className={styles.smm}>
					<h2>
						Чем занимается <span className='accent'>таргетолог?</span>
					</h2>
					<div className={styles.smm_grid}>
						<div className={styles.smm_card}>
							<div className={styles.smm_image}>
								<Image
									src='/courses/marketing/smm/smm/1.svg'
									alt='Картинка'
									width={210}
									height={210}
									className={styles.smm_img}
								/>
							</div>
							<p>Планирует</p>
						</div>
						<div className={styles.smm_card}>
							<div className={styles.smm_image}>
								<Image
									src='/courses/marketing/smm/smm/2.svg'
									alt='Картинка'
									width={210}
									height={210}
									className={styles.smm_img}
								/>
							</div>
							<p>Настраивает</p>
						</div>
						<div className={styles.smm_card}>
							<div className={styles.smm_image}>
								<Image
									src='/courses/marketing/smm/smm/3.svg'
									alt='Картинка'
									width={210}
									height={210}
									className={styles.smm_img}
								/>
							</div>
							<p>Анализирует</p>
						</div>
						<div className={styles.smm_card}>
							<div className={styles.smm_image}>
								<Image
									src='/courses/marketing/smm/smm/4.svg'
									alt='Картинка'
									width={210}
									height={210}
									className={styles.smm_img}
								/>
							</div>
							<p>Улучшает</p>
						</div>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/marketing/reklama-ppc/finalProject.svg'
					title='Настроенные рекламные кампании в ВКонтакте, Telegram и MyTarget'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Точно определять целевую аудиторию',
						'Пользоваться рекламным кабинетом ВКонтакте, Telegram и MyTarget',
						'Настраивать рекламу в ВКонтакте, Telegram и MyTarget',
						'Анализировать результаты рекламных кампаний',
						'Оптимизировать креативы и бюджет',
					]}
				/>

				<Instruments instrument={instruments} />

				<GetLessonBlock course={course.title} />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/marketing/reklama-vkontakte-telegram/certificate.svg' />

				<Work company_title='Таргетологов' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='stupova.svg'
					course={course.title}
					name={`Сутупова Кристина. Маркетолог. \n Опыт в маркетинге 10+ лет.`}
					description='Ведущий преподаватель и эксперт программы.'
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
