import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import cn from 'classnames';

const textBlock = [
	{
		position: 'right',
		title: 'Актуальные программы и много практики',
		text: 'Наши программы обновляются каждый месяц. И мы нацелены на максимальное количество практики. Для того, чтобы вы получили максимум навыков для трудоустройства.',
		number: '01',
		img: 'img1.svg',
	},
	{
		position: 'left',
		title: 'Готовим портфолио \n во время курса',
		text: 'На курсе вы будете работать над своим уникальным проектом, и шаг за шагом отработаете на нем ваши новые навыки. Собственный крупный проект или кейс в портфолио выделит вас среди других новичков при трудоустройстве, и покажет на что вы способны.',
		number: '02',
		img: 'img2.svg',
	},
	{
		position: 'right',
		title: `Помогаем с \n подготовкой резюме`,
		text: 'По окончании курса с вами будет работать опытный рекрутер из топовой IT-компании Москвы. Вы совместно с ним составите привлекательное, профессиональное и информативное резюме, чтобы попасть на собеседование было проще.',
		number: '03',
		img: 'img3.svg',
	},
	{
		position: 'left',
		title: 'Подготовка к \n собеседованию',
		text: 'Проведем тренировочное собеседование, на котором преподаватели разберут с вами частые вопросы и задачки с интервью, дав объемную обратную связь.',
		number: '04',
		img: 'img4.svg',
	},
	{
		position: 'right',
		title: 'Интенсив по \n трудоустройству',
		text: 'Проведем интенсив об эффективном трудоустройстве в компанию, как развиваться на фрилансе, и как максимально быстро привлечь к себе собеседования',
		number: '05',
		img: 'img5.svg',
	},
	{
		position: 'left',
		title: 'Направляем \n резюме в компании',
		text: 'Резюме лучших учеников отправляем нашим партнерам. Благодаря высоким стандартам обучения, нашим ученикам всегда рады в лучших IT-компаниях России.',
		number: '06',
		img: 'img6.svg',
	},
];

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<Breadcrumbs />
			<section className={styles.header}>
				<h1 className='accent'>Трудоустройство</h1>
				<p>
					Ни одно учебное заведение не может гарантировать трудоустройство по специальности. Успех зависит не только
					от&nbsp;качества занятий, но и от самого ученика. Тем не менее мы постарались упростить получение должности
					для&nbsp;студентов, которые действительно старались и учились на курсах EasyUM.
				</p>
				<h2>
					Что мы делаем <span className='accent'>для Вашего трудоустройства?</span>
				</h2>
			</section>

			<section className={styles.cards}>
				{textBlock.map((block) => (
					<Card key={block.number} {...block} />
				))}
			</section>

			<section className={styles.factors}>
				<h2>
					Факторы, <span className='accent'>влияющие на результат</span>
				</h2>
				<div className={styles.cardGridFactors}>
					<div className={styles.card__factors}>
						<div className={styles.text}>
							<h4>Время на домашние задания</h4>
							<p>
								Для освоения новой профессии необходимо уделять минимум 1-2 часа в день на выполнение домашних заданий.
								В противном случае не получится достигнуть хорошего результата.
							</p>
						</div>
						<img src={`/about/employment/icons1.svg`} alt='Иконка' />
					</div>
					<div className={styles.card__factors}>
						<div className={styles.text}>
							<h4>Учиться самостоятельно</h4>
							<p>
								Обучаясь на курсе важно самостоятельно изучать профессиональные источники, например статьи и книги.
								Любая практика продвинет вас вперед.
							</p>
						</div>
						<img src={`/about/employment/icons2.svg`} alt='Иконка' />
					</div>
					<div className={styles.card__factors}>
						<div className={styles.text}>
							<h4>{`Нетворкинг и общение \n с коллегами`}</h4>
							<p>
								Окружение формирует ваш успех. Больше общайтесь с людьмиa из новой сферы и вы начнете расти гораздо
								быстрее.
							</p>
						</div>
						<img src={`/about/employment/icons3.svg`} alt='Иконка' />
					</div>
					<div className={styles.card__factors}>
						<div className={styles.text}>
							<h4>Дисциплина в обучении</h4>
							<p>
								Не пропускайте больше, чем 1 занятие в месяц. Иначе вам будет труднее учиться и справляться с домашними
								заданиями, что осложнит освоение профессии.
							</p>
						</div>
						<img src={`/about/employment/icons4.svg`} alt='Иконка' />
					</div>
				</div>
			</section>
		</div>
	);
}

interface Props {
	position: string;
	title: string;
	text: string;
	number: string;
	img: string;
}

function Card({ position, title, text, number, img }: Props) {
	return (
		<div className={styles.card}>
			{position === 'right' ? (
				<>
					<div className={styles.info}>
						<div className={styles.text}>
							<h2>{title}</h2>
							<p>{text}</p>
						</div>
						<span className={styles.numberLeft}>{number}</span>
					</div>
					<img src={`/about/employment/${img}`} alt='Картинка' />
				</>
			) : (
				<>
					<img src={`/about/employment/${img}`} alt='Картинка' />
					<div className={styles.info}>
						<div className={styles.text}>
							<h2>{title}</h2>
							<p>{text}</p>
						</div>
						<span className={styles.numberRigth}>{number}</span>
					</div>
				</>
			)}
		</div>
	);
}
