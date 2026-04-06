import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Suitable from '../../_components/Suitable/suitable';
import FinalProject from '../../_components/FinalProject/FinalProject';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Certificate from '../../_components/Certificate/Certificate';
import Work from '../../_components/Work/Work';
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import Reviews from '@/app/_components/Reviews/Reviews';
import EasyUm from '../../_components/EasyUm/Easyum';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import getRegion from '@/lib/getRegion';
import Tariffs from '../../_components/Tariffs/Tariffs';
import { Suspense } from 'react';
import FAQ from '../../_components/FAQ/FAQ';
import Circle from '@/app/_components/Circle/Circle';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { calculatePrices } from '@/lib/priceCalculator';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Курс «Менеджер маркетплейсов» | Обучение работе на маркетплейсах с нуля онлайн в ${city}`,
		description: `Запишитесь на курсы менеджера маркетплейсов с нуля в ${city}. Обучение онлайн, с трудоустройством и сертификатом за 3 месяца! Начните карьеру на маркетплейсах Wildberries и OZON уже сегодня!`,
		keywords: ['Курсы Менеджер маркетплейсов', 'Курсы Менеджер маркетплейсов для начинающих'],
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Курс «Менеджер маркетплейсов» | Обучение работе на маркетплейсах с нуля онлайн в ${city}`,
			description: `Запишитесь на курсы менеджера маркетплейсов с нуля в ${city}. Обучение онлайн, с трудоустройством и сертификатом за 3 месяца! Начните карьеру на маркетплейсах Wildberries и OZON уже сегодня!`,
			url: '/courses/other/manager-marketplace',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Курс Менеджер маркетплейсов в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/courses/other/manager-marketplace`,
		},
	};
}

const course = {
	title: dateStart[26].course,
	description_one:
		'Изучите основы работы с крупнейшими маркетплейсами, включая Wildberries, Ozon, «Яндекс.Маркет», AliExpress и «СберМегаМаркет».',
	description_two:
		'Научитесь правильно оформлять карточки товаров, освоите основные принципы их продвижения и анализа эффективности на платформах.',
	img: 'other/manager-marketplace/hero.svg',
	date: dateStart[26].date,
	duration: '2,5 месяца',
	duration_number: 2.5,
	price: dateStart[26].price,
	imgCourse: dateStart[26].imgCourse,
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Получите практические навыки, необходимые для эффективного управления торговыми площадками',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Предпринимателям',
		description:
			'Сможете расширить свой бизнес через маркетплейсы. Научитесь управлять продажами и улучшать видимость своих товаров',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Тем, кто хочет работать удаленно',
		description:
			'Менеджер по работе с маркетплейсами может работать удаленно, самостоятельно устанавливая график работы',
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
					title={`Маркетплейсы -`}
					accent={`будущее онлайн-бизнеса`}
					description={`На фоне глобального кризиса рынок онлайн торговли в России продолжает демонстрировать устойчивый рост. Доля продаж на маркетплейсах, таких как Wildberries и Ozon, достигла 77% от общего объема онлайн-заказов. \n\n Согласно исследованию «Точка Маркетплейсы», количество продавцов на маркетплейсах в 2024 году выросло на 35%, с лидерами "Яндекс Маркет" (+73%) и Ozon (+67%). Внушительный рост создает конкуренцию и продавцам необходимо эффективно продвигать свои товары.`}
					img='/courses/other/manager-marketplace/description.svg'
				/>

				<Description
					title={`Спрос на IT \n`}
					accent={`Project Manager растет`}
					description={`Доходы IT-бизнеса России за 2022 год выросли на 35,3%, по словам вице-премьера РФ. Сфера IT непрерывно развивается: появляется всё больше новых отечественных проектов, которыми нужно управлять. \n\n Компании активно ищут IT проектных менеджеров. Спрос настолько велик, что даже новичок без опыта сможет устроиться на хорошую работу.`}
					img='/courses/other/manager-marketplace/demand.svg'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<section className={styles.learning}>
					<div className={styles.learning_text}>
						<h2>
							Учим самому <span className='accent'>важному</span>
						</h2>
						<p>
							Мы сформировали программу с учётом ожиданий работодателей. Именно эти навыки чаще всего требуются в
							вакансиях и на практике.
						</p>
					</div>
					<div className={styles.learning_grid}>
						<div className={styles.learning_card}>
							<div className={styles.learning_card__text}>
								<span className={styles.learning__number}>01</span>
								<p className={styles.learning__title}>АНАЛИЗ РЫНКА {`\n`} И ВЫБОР НИШИ</p>
							</div>
							<p className={styles.learning__description}>
								Изучите методы анализа конкурентов и потребностей покупателей, разработаете стратегию для успешного
								запуска и продвижения товаров
							</p>
						</div>
						<div className={styles.learning_card}>
							<div className={styles.learning_card__text}>
								<span className={styles.learning__number}>02</span>
								<p className={styles.learning__title}>финансовое {`\n`} планирование</p>
							</div>
							<p className={styles.learning__description}>
								Сможете рассчитывать окупаемость, освоите методы фин. планирования автоматизируете рутинные задачи в
								Excel
							</p>
						</div>
						<div className={styles.learning_card}>
							<div className={styles.learning_card__text}>
								<span className={styles.learning__number}>03</span>
								<p className={styles.learning__title}>управление {`\n`} аккаунтами</p>
							</div>
							<p className={styles.learning__description}>
								Научитесь работать в личных кабинетах крупнейших маркетплейсов Ozon, Wildberries и других
							</p>
						</div>
						<div className={styles.learning_card}>
							<div className={styles.learning_card__text}>
								<span className={styles.learning__number}>04</span>
								<p className={styles.learning__title}>Оформление аккаунта {`\n`} и товаров</p>
							</div>
							<p className={styles.learning__description}>
								Узнаете, как создавать привлекательные описания и оформлять карточки товаров
							</p>
						</div>
						<div className={styles.learning_card}>
							<div className={styles.learning_card__text}>
								<span className={styles.learning__number}>05</span>
								<p className={styles.learning__title}>Продвижение {`\n`} и контент</p>
							</div>
							<p className={styles.learning__description}>
								Научитесь создавать и тестировать контент, позволяющий отстраиваться от конкурентов
							</p>
						</div>
						<div className={styles.learning_card}>
							<div className={styles.learning_card__text}>
								<span className={styles.learning__number}>06</span>
								<p className={styles.learning__title}>Ценообразование {`\n`} и акции</p>
							</div>
							<p className={styles.learning__description}>
								Сможете гибко регулировать цены и грамотно использовать акции
							</p>
						</div>
						<div className={styles.learning_card}>
							<div className={styles.learning_card__text}>
								<span className={styles.learning__number}>07</span>
								<p className={styles.learning__title}>Организация {`\n`} логистики</p>
							</div>
							<p className={styles.learning__description}>
								Узнаете как отслеживать отгрузку, взаимодействовать с доставкой и снижать расходы через грамотные
								логистические цепочки
							</p>
						</div>
						<div className={styles.learning_card}>
							<div className={styles.learning_card__text}>
								<span className={styles.learning__number}>08</span>
								<p className={styles.learning__title}>Ведение {`\n`} бухгалтерии</p>
							</div>
							<p className={styles.learning__description}>
								Овладеете основами бухгалтерского учета, научитесь подсчитывать прибыль, устанавливать план продаж,
								управлять налогами
							</p>
						</div>
						<div className={styles.learning_card}>
							<div className={styles.learning_card__text}>
								<span className={styles.learning__number}>09</span>
								<p className={styles.learning__title}>Управление {`\n`} отзывами</p>
							</div>
							<p className={styles.learning__description}>
								Узнаете как правильно работать с негативом для повышения доверия покупателей и роста продаж
							</p>
						</div>
					</div>
				</section>

				{/* =====================
				Узнаете особенности крупнейших маркетплейсов
				===================== */}

				<FinalProject
					img='/courses/other/manager-marketplace/finalProject.svg'
					title='Получите кейс для своего резюме или разработаете стратегию развития собственного бизнеса'
					list={[
						'проведете анализ рынка',
						'выбререте нишу и товар',
						'создадите личные кабинеты на Ozon и Wildberries',
						'оформите магазин',
						'сделаете фотосессия товара',
						'создадите видео для карточки товара',
						'настроите SEO-оптимизация карточек',
						'разработаете стратегия продвижения карточек товаров',
						'посчитаете unit-экономика',
					]}
				/>

				<GetLessonBlock course={course.title} />

				{/* =====================
								Программа
				===================== */}

				{/* =====================
									Резюме
				===================== */}

				<Certificate img='/courses/other/manager-marketplace/certificate.svg' />

				<Work company_title='Менеджеров по маркетплейсам' />

				<FormatLearning />

				<EasyUm />

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
							prices={calculatePrices(course.duration_number, 'it')}
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
	const prices = calculatePrices(course.duration_number, region?.subdomain);
	return (
		<Tariffs
			city={region?.city}
			prices={prices}
			course={course.title}
			sale={sale.tariffs}
			imgCourse={course.imgCourse}
			mounth={course.duration_number}
		/>
	);
}
