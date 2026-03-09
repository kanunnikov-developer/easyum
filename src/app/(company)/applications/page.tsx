import Image from 'next/image';
import styles from './styles.module.css';
import HowWorkBlock from '@/components/howWork/howWork';
import { Suspense } from 'react';
import getRegion from '@/lib/getRegion';
import ApplicationForm from '@/app/_form/ApplicationForm/ApplicationForm';

const cardText = [
	{
		title: 'Свежие резюме',
		description:
			'Вы получаете на постоянной основе свежие резюме, они еще даже не выставлены на hh, а мы уже прислали их вам!',
		img: '/company/application/card1.svg',
	},
	{
		title: 'Экономия времени',
		description: 'Вы сокращаете время на поиск кандидатов, не нужно сидеть на биржах и искать сотрудников.',
		img: '/company/application/card2.svg',
	},
	{
		title: 'Лучшие кандидаты',
		description: 'Все резюме, что мы направляем, это резюме лучших студентов на потоке.',
		img: '/company/application/card3.svg',
	},
];

const HowWork = [
	{
		description: 'Заполняете форму',
		img: '/company/application/work/item1.svg',
	},
	{
		description: 'Выбираете нужное вам IT-направление',
		img: '/company/application/work/item2.svg',
	},
	{
		description: 'Укажите контактную почту и телефон для приема заявок',
		img: '/company/application/work/item3.svg',
	},
	{
		description: 'Готово! Новые резюме приходят вам на почту на постоянной основе.',
		img: '/company/application/work/item4.svg',
	},
];

export default function Page() {
	return (
		<div className={styles.page}>
			<div className={styles.bg}></div>
			<div className='container'>
				<section className={styles.header}>
					<div className={styles.header_left}>
						<h1>Заявки на выпускников</h1>
						<p>{`Резюме лучших выпускников из курса \n мы готовы направлять Вам в компанию`}</p>
					</div>
					<div className={styles.header_right}>
						<img src={`/company/aplicationMain.svg`} alt='Картинка' />
					</div>
				</section>

				<section className={styles.polza}>
					<h2 className='accent'>Чем это полезно Вам?</h2>
					<div className={styles.polza_grid}>
						{cardText.map((item, index) => (
							<Card key={index} title={item.title} description={item.description} img={item.img} />
						))}
					</div>
				</section>

				<section className={styles.work}>
					<HowWorkBlock card={HowWork} />
				</section>

				<section className={styles.form}>
					<div className={styles.form__left}>
						<h2>Заполните форму для получения заявок</h2>
						<p className={styles.form__description}>
							Если вам интересно участие в программе трудоустройства студентов EasyUM.
						</p>
					</div>
					<div className={styles.form__right}>
						<Suspense fallback={<ApplicationForm city='Москва' />}>
							<Wrapper />
						</Suspense>
					</div>
				</section>

				<section className={styles.footer}>
					<h2>Таким образом мы помогаем студентам освоиться в новой среде и найти ту самую работу</h2>
					<Image src='/company/application/girl.svg' alt='Изображение' width={100} height={253} />
				</section>
			</div>
		</div>
	);
}

interface Props {
	title: string;
	description: string;
	img: string;
}

function Card({ title, description, img }: Props) {
	return (
		<div className={styles.card}>
			<h6>{title}</h6>
			<p>{description}</p>
			<Image src={`${img}`} alt={title} width={135} height={137} className={styles.img} />
		</div>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return <ApplicationForm city={region?.city} />;
}
