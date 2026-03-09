import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import cn from 'classnames';

const successText = [
	{
		bg: 'bg1.svg',
		img: 'img1.svg',
		name: 'Вероника',
		course: 'Курс «Java Junior программист \n (web-разработчик)»',
		description:
			'Пришла в IT из страхования. Сразу после обучения устроилась в IT-компанию Тестировщиком ПО на удаленку, за 90 тысяч рублей.',
		date: 'Сентябрь 2022 г.',
	},
	{
		bg: 'bg2.svg',
		img: 'img2.svg',
		name: 'Камилла',
		course: 'Курс «Веб-дизайн (UI&UX)»',
		description:
			'Стала участником стажировочного проекта от нашего партнера "Wrike". Разработала интерфейс приложения для заказа аптечных товаров и получила оффер от компании на позицию Junior веб-дизайнер.',
		date: 'Сентябрь 2022 г.',
	},
	{
		bg: 'bg3.svg',
		img: 'img3.svg',
		name: 'Анастасия',
		course: 'Курс «IT Project Managment»',
		description:
			'Через неделю после курса попала на стажировку в "Манго Телеком". Через 3 месяца стала руководителем с зарплатой 75 тысяч рублей и теперь занимается управлением it-проектами.',
		date: 'Сентябрь 2022 г.',
	},
	{
		bg: 'bg1.svg',
		img: 'img4.svg',
		name: 'Максим',
		course: 'Курс «Fullstack -разработчик»',
		description:
			'Во время карантина лишился работы, пришел в EasyUM и изучил JavaScript. Год работал на фрилансе, выполнил пару крупных заказов для агентств "GETUP" и "JetCom". Собрал небольшую команду и создает сайты на заказ.',
		date: 'Август 2022 г.',
	},
	{
		bg: 'bg2.svg',
		img: 'img5.svg',
		name: 'Артемий',
		course: 'Курс «Интернет-маркетинг»',
		description:
			'Через неделю после окончания курса получил предложение о работе в крупном рекламном агентстве. Сейчас Артемий востребованный специалист в digital- маркетинге. Он работает удаленно и путешествует по Азии.',
		date: 'Июль 2022 г.',
	},
	{
		bg: 'bg3.svg',
		img: 'img6.svg',
		name: 'Виталий',
		course: 'Курс «Интернет-маркетинг»',
		description:
			'Откликался на вакансии с 3-го месяца учебы и к выпускному устроился в агентство "Бизнес Инсайт", как помощник маркетолога. К концу 2022 вырос до руководителя маркетингового отдела нового филиала.',
		date: 'Апрель 2022 г.',
	},
	{
		bg: 'bg1.svg',
		img: 'img7.svg',
		name: 'Милана',
		course: 'Курс «С++ разработчик»',
		description:
			'Закончила курс и стала участником хакатона вместе с командой молодых разработчиков. Разработала приложение для управления личными финансами. После победы на хакатоне была приглашена в финтех-стартап.',
		date: 'Январь 2022 г.',
	},
	{
		bg: 'bg2.svg',
		img: 'img8.svg',
		name: 'Матвей',
		course: 'Курс «Веб-дизайн (UI&UX)»',
		description:
			'Прошел наше обучение, не имея опыта в дизайне и IT. Через месяц получил оффер на 55 тысяч рублей, сделав тестовое задание. Устроился на позицию Junior UX/UI -дизайнер в "SkySoft".',
		date: 'Сентябрь 2021 г.',
	},
	{
		bg: 'bg3.svg',
		img: 'img9.svg',
		name: 'Софья',
		course: 'Курс «Python для анализа данных»',
		description:
			'После окончания курсов прошла отбор на проект от "Авито" и затем устроилась аналитиком данных за 90 тыс. рублей. Занимается автоматизацией и исследованиями в области машинного обучения.',
		date: 'Июль 2021 г.',
	},
];

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<Breadcrumbs />
			<section className={styles.header}>
				<h1>
					<span className='accent'>Истории</span> Успеха
				</h1>
				<p>
					Можно ли найти работу после выпуска с курсов EasyUM? Еще какую! После наших курсов реально трудоустроиться!
					Чтобы вы ощутили уверенность в неизбежном успехе, представляем вам реальные истории успеха наших выпускников.
					<br />
					<br />
					Кто знает, может, и ваша история когда-то появится на этой странице?
				</p>
			</section>

			<section className={styles.grid}>
				{successText.map((text) => (
					<Card
						key={text.img}
						bg={text.bg}
						img={text.img}
						name={text.name}
						course={text.course}
						description={text.description}
						date={text.date}
					/>
				))}
			</section>
		</div>
	);
}

interface Props {
	bg: string;
	img: string;
	name: string;
	course: string;
	description: string;
	date: string;
}

function Card({ bg, img, name, course, description, date }: Props) {
	return (
		<div className={styles.card}>
			<div className={styles.img}>
				<img src={`/about/stories/${bg}`} alt='Задний фон' />
				<img src={`/about/stories/img/${img}`} alt='Фотография' className={styles.photo} />
			</div>
			<div className={styles.name}>
				<span>{name}</span>
				<p>{course}</p>
				<div className={styles.description}>
					<p>{description}</p>
				</div>
			</div>
			<div className={styles.date}>
				<p>{date}</p>
			</div>
		</div>
	);
}
