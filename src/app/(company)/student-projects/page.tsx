import Image from 'next/image';
import styles from './styles.module.css';
import GridProjects from './ui/gridProjects/gridProjects';
import { Suspense } from 'react';
import getRegion from '@/lib/getRegion';
import StudentsForm from '@/app/_form/StudentsForm/StudentsForm';

const cardOne = [
	{
		title: 'Цена',
		description: 'При выполнении заказа у нас, вы самостотельно устанавливаете цену, и заплатите меньше чем в студиях.',
		img: '/company/project/card1.svg',
	},
	{
		title: 'Выбор',
		description:
			'Мы даем проект нескольким студентам, который они выполняют под руководством куратора. Вы можете выбрать проект из нескольких вариантов.',
		img: '/company/project/card2.svg',
	},
	{
		title: 'Сотрудник',
		description:
			'Если вам понравился выполненный проект, и понравился студент, вы можете взять его себе на практику или трудоустроить.',
		img: '/company/project/card3.svg',
	},
];

const cardTwo = [
	{
		title: 'Практика',
		description: 'Студенты могут получить реальную практику на реальных проектах.',
		img: '/company/project/card1_1.svg',
	},
	{
		title: 'Первый заработок',
		description: 'Возможность заработать свои первые деньги в it еще обучаясь на курсе.',
		img: '/company/project/card1_2.svg',
	},
	{
		title: 'Трудоустройство',
		description: 'Мы надеемся, что человек который выполнил Вам работу, останется с Вами и на дальнейших проектах.',
		img: '/company/project/card1_3.svg',
	},
];

export default function Page() {
	return (
		<div className={styles.page}>
			<div className={styles.bg}></div>
			<div className='container'>
				<section className={styles.header}>
					<div className={styles.header_left}>
						<h1>Проекты от студентов</h1>
						<p>{`Наши студенты в рамках курса могут \n выполнить реальные проекты`}</p>
					</div>
					<div className={styles.header_right}>
						<img src={`/company/projectMain.svg`} alt='Картинка' />
					</div>
				</section>

				<section className={styles.one}>
					<h2>
						Почему это <span className='accent'>выгодно Вам?</span>
					</h2>
					<div className={styles.grid}>
						{cardOne.map((item, index) => (
							<Card key={index} title={item.title} description={item.description} img={item.img} />
						))}
					</div>
				</section>

				<section className={styles.one}>
					<h2>
						Почему это <span className='accent'>выгодно нам?</span>
					</h2>
					<div className={styles.grid}>
						{cardTwo.map((item, index) => (
							<Card key={index} title={item.title} description={item.description} img={item.img} />
						))}
					</div>
				</section>

				<section className={styles.howWork}>
					<h2>Как это работает?</h2>

					<div className={styles.how_grid}>
						<div className={styles.border}></div>
						<div className={styles.how_item}>
							<div className={styles.number}>
								<p>1</p>
							</div>
							<p className={styles.how_description}>Вы отправляете заявку</p>
						</div>
						<div className={styles.how_item}>
							<div className={styles.number}>
								<p>2</p>
							</div>
							<p className={styles.how_description}>Мы отправляем проект в группу и назначаем куратора</p>
						</div>
						<div className={styles.how_item}>
							<div className={styles.number}>
								<p>3</p>
							</div>
							<p className={styles.how_description}>Создаем чат для публикации работ, промежуточных этапов</p>
						</div>
						<div className={styles.how_item}>
							<div className={styles.number}>
								<p>4</p>
							</div>
							<p className={styles.how_description}>После завершения проекта, вы выбираете понравившийся вариант</p>
						</div>
					</div>
					<p className={styles.postDescription}>
						*Выполнение работ не имеет сжатых сроков, и имеет разную длительность
					</p>
				</section>
				<GridProjects />

				<section className={styles.section__form}>
					<div className={styles.left}>
						<h2>Заполните форму для получения заявок</h2>
						<p className={styles.description}>
							Если вам интересно участие в программе трудоустройства студентов EasyUM.
						</p>
					</div>
					<div className={styles.right}>
						<Suspense fallback={<StudentsForm city='Москва' />}>
							<Wrapper />
						</Suspense>
					</div>
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
	return <StudentsForm city={region?.city} />;
}
