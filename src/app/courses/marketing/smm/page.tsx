import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import TeacherVideo from '../../_components/TeacherVideo/TeacherVideo';
import Sallary from '../../_components/Salary/Salary';
import Image from 'next/image';
import Suitable from '../../_components/Suitable/suitable';
import FinalProject from '../../_components/FinalProject/FinalProject';
import Instruments from '../../_components/Instruments/Instruments';
import Learning from '../../_components/Learning/Learning';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Work from '../../_components/Work/Work';
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import EasyUm from '../../_components/EasyUm/Easyum';
import Programm from '../../_components/Programm/Programm';
import Certificate from '../../_components/Certificate/Certificate';
import Metodist from '../../_components/Metodist/Metodist';
import Reviews from '@/app/_components/Reviews/Reviews';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import getRegion from '@/lib/getRegion';
import Tariffs from '../../_components/Tariffs/Tariffs';
import { Suspense } from 'react';

const course = {
	title: dateStart[18].course,
	description_one:
		'Научитесь продвигать бизнес в социальных сетях и выстраивать маркетинговую коммуникацию между брендом и его клиентами.',
	description_two:
		'Освоите 5 digital-профессий за 2,5 месяца и получите мощную базу для работы в интернете. Получите актуальные на 2025 год знания о Вконтакте, Telegram, Дзен, Одноклассники и других топовых площадках.',
	img: 'marketing/smm/hero.svg',
	date: dateStart[18].date,
	duration: '2,5 месяца',
	price: dateStart[18].price,
	imgCourse: dateStart[18].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/9.svg',
		title: 'Новичкам',
		description: 'Желающим получить современную и востребованную профессию',
	},
	{
		img: '/courses/ui/suitable/10.svg',
		title: 'Предпринимателям',
		description: 'Предпринимателям, желающим увеличить продажи из социальных сетей',
	},
	{
		img: '/courses/ui/suitable/11.svg',
		title: 'Специалистам по трафику',
		description: 'Желающим расширить свои знания о маркетинге соц.сетей',
	},
	{
		img: '/courses/ui/suitable/10.svg',
		title: 'Маркетологам',
		description: 'Офлайн маркетологам и PR-специалистам, желающим разобраться в digital-маркетинге',
	},
];

const instruments = [
	{
		img: '/courses/ui/instruments/figma.svg',
		title: 'Figma',
		description: 'Онлайн-сервис для разработки интерфейсов и прототипирования',
	},
	{
		img: '/courses/ui/instruments/tilda.svg',
		title: 'Tilda',
		description: 'Платформа для создания no-code сайтов',
	},
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
		img: '/courses/ui/instruments/uxui.svg',
		title: 'UX&UI',
		description: 'Проектирование удобных и эстетичных интерфейсов',
	},
	{
		img: '/courses/ui/instruments/wordpress.svg',
		title: 'Wordpress',
		description: 'Платформа для создания no-code сайтов',
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
		img: '/courses/ui/instruments/canva.svg',
		title: 'Canva',
		description: 'Кроссплатформенный сервис для графического дизайна',
	},
	{
		img: '/courses/ui/instruments/freepik.svg',
		title: 'Freepik',
		description: 'Сервис для поиска стоковой графики',
	},
];

const learning = [
	{
		title: 'Ведению аккаунтов',
		description: 'Создавать и раскручивать аккаунты во всех доступных (и недоступных) в России социальных сетях.',
		img: '/courses/ui/learning/27.svg',
		number: '01',
	},
	{
		title: 'Планированию',
		description:
			'Сможете составлять продуманный медиа и контент-план для аккаунтов всех видов - от личного блога до e-commerce',
		img: '/courses/ui/learning/28.svg',
		number: '02',
	},
	{
		title: 'Копирайтингу',
		description: 'Писать интересные и продающие тексты под любые задачи и тематики',
		img: '/courses/ui/learning/29.svg',
		number: '03',
	},
	{
		title: 'Продвижению',
		description: 'Узнаете как эффективно использовать платные и бесплатные методы продвижения социальных сетей.',
		img: '/courses/ui/learning/24.svg',
		number: '04',
	},
	{
		title: 'Аналитике',
		description: 'Анализировать эффективность своих действий, корректировать стратегию и делать наглядные отчеты',
		img: '/courses/ui/learning/26.svg',
		number: '05',
	},
	{
		title: 'Оформлению',
		description: 'Создавать цепляющий визуальный контент без навыков дизайна, видеомонтажа и ретуши фотографий',
		img: '/courses/ui/learning/25.svg',
		number: '06',
	},
];

const programs = [
	{
		title: 'Основы социальных сетей и контент-планирование',
	},
	{
		title: 'Визуальное оформление и работа с текстом',
	},
	{
		title: 'Видео-контент',
	},
	{
		title: 'Работа с нейросетями',
	},
	{
		title: 'Продвижение аккаунтов',
	},
	{
		title: 'Таргетированная реклама Vk',
	},
	{
		title: 'Дополнительные площадки и аналитика',
	},
	{
		title: 'Telegram',
	},
	{
		title: 'Другие социальные сети',
	},
	{
		title: 'Репутация',
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
					title={`Чем занимается \n`}
					accent='SMM менеджер?'
					description={`Сейчас в России очень нужны толковые специалисты со свежим взглядом, умеющие работать с доступными площадками. \n\n SMM - менеджер, вопреки стереотипам, не только пишет посты или делает сторис. Крутой SMM - специалист анализирует конкурентов, продумывает портреты покупателей, выстраивает маркетинговую стратегию, составляет контент-план, контролирует эффективность рекламы, работает с блогерами много чего еще. Ну, и делает сторис и посты конечно :)`}
					img='/courses/marketing/smm/description.svg'
				/>

				<Sallary min={50000} max={200000} />

				<section className={styles.smm}>
					<h2>
						Чем занимается <span className='accent'>SMM-специалист?</span>
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
							<p>Контролирует</p>
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
							<p>Креативит</p>
						</div>
					</div>
				</section>

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
								<p className={styles.why_work_title}>Таргетологом</p>
								<p className={styles.why_work_description}>
									Таргетолог — это человек, который настраивает и запускает рекламу в социальных сетях. Название
									профессии происходит от английского слова target, «цель»
								</p>
							</div>

							<p className={styles.why_work_number}>01</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>Маркетологом</p>
								<p className={styles.why_work_description}>
									Маркетолог — это специалист, который создает стратегию продвижения продуктов и услуг, чтобы увеличить
									продажи и общий доход компании
								</p>
							</div>

							<p className={styles.why_work_number}>02</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>PR-менеджером</p>
								<p className={styles.why_work_description}>
									PR-менеджер — это специалист по связям с общественностью. Выстраивает и контролирует отношения
									компании с целевой аудиторией, партнерами и инвесторами.
								</p>
							</div>

							<p className={styles.why_work_number}>03</p>
						</div>
						<div className={styles.why_work__card}>
							<div>
								<p className={styles.why_work_title}>Дизайнером</p>
								<p className={styles.why_work_description}>
									Дизайнер — это специалист, который занимается визуальной разработкой каких-либо объектов. Вы научитесь
									работать в графических редакторах и создавать визуальный контент.
								</p>
							</div>
							<p className={styles.why_work_number}>04</p>
						</div>
					</div>
				</section>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/marketing/smm/finalProject.svg'
					title='Оформленные страницы в Telegram, ВКонтакте, Одноклассники, Дзен'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Продвигать бренды в социальных сетях',
						'Создавать крутой визуал и тексты',
						'Запускать, настраивать и анализировать таргетированную рекламу',
						'Раскручивать бренд с помощью блогеров и других методов',
						'Работать с целевой аудиторией',
					]}
				/>

				<Instruments instrument={instruments} />

				<Learning items={learning} />

				<GetLessonBlock />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/marketing/smm/certificate.svg' />

				<Work company_title='SMM-специалистов' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='stupova.svg'
					course={course.title}
					name={`Сутупова Кристина. Маркетолог.\n Опыт в маркетинге 12+ лет.`}
					description='12 лет работала маркетологом в штате. 7 лет - на фрилансе в качестве SMM менеджера. Опыт ведения социальных сетей более чем у 45 компаний. На протяжении 4 лет предоставляет комплексный маркетинг на аутсорсе ресторанам, медицинским учреждениям и производителям.'
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
