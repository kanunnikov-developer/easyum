import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import cn from 'classnames';
import Link from 'next/link';
import PhotosComponent from '@/components/photos/photosComponent';

const eventsText = [
	{
		img: 'photo1.svg',
		course: 'Курсы «Python (веб-разработка)» и «Python (для анализа данных)»',
		name: 'Максим Трошин',
		date: '5 сентября в 19:30',
		chat: '/',
		link: '#',
	},
	{
		img: 'photo2.svg',
		course: 'Курс «C++ разработчик»',
		name: 'Рожков Арсений',
		date: '5 сентября в 19:30',
		chat: '/',
		link: '#',
	},
	{
		img: 'photo3.svg',
		course: 'Курсы «Основы дизайна», «Графический дизайн», «UX&UI Веб-дизайн»',
		name: 'Ольга Козякова',
		date: '7 сентября в 13:00',
		chat: '/',
		link: '#',
	},
	{
		img: 'photo4.svg',
		course: 'Курсы «Full Stack разработчик», «Front End разработчик», «Верстка сайтов»',
		name: 'Рожков Арсений',
		date: '11 сентября в 19:30',
		chat: '/',
		link: '#',
	},
	{
		img: 'photo5.svg',
		course: 'Курс «Тестировщик ПО (Ручное тестирование)»',
		name: 'Ярослав Гарастюк',
		date: '12 сентября в 19:30',
		chat: '/',
		link: '#',
	},
	{
		img: 'photo6.svg',
		course: 'Курс «SMM. Продвижение в социальных сетях»',
		name: 'Кристина Сутупова',
		date: '13 сентября в 19:30',
		chat: '/',
		link: '#',
	},
];

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<Breadcrumbs />
			<h1>
				<span className='accent'>Пробные</span> уроки
			</h1>
			<section className={styles.elements}>
				<div className={styles.element}>
					{/*Первый элемент*/}
					<div className={styles.element__image}>
						<img src='/bonus/events/icons/icons1.svg' alt='Картинка' />
					</div>
					<p>Групповое занятие длится 2 часа (120 минут)</p>
				</div>
				{/*Второй элемент*/}
				<div className={styles.element}>
					<div className={styles.element__image}>
						<img src='/bonus/events/icons/icons2.svg' alt='Картинка' />
					</div>
					<p>Участвуйте в уроке, задавайте вопросы вслух или в чате</p>
				</div>
				{/*Третий элемент*/}
				<div className={styles.element}>
					<div className={styles.element__image}>
						<img src='/bonus/events/icons/icons3.svg' alt='Картинка' />
					</div>
					<p>Для участников подготовлены секретные скидки {`\n`} на курсы.</p>
				</div>
			</section>
			<section className={styles.events}>
				{eventsText.map((text, index) => (
					<Card key={index} {...text} />
				))}
			</section>

			<section className={styles.about}>
				<h2>
					<span className='accent'>Как</span> проходит?
				</h2>
				<p>
					Вы можете посетить занятие очно в вашем городе, или подключиться к занятию через телеграм-трансляцию в группе
					или посмотреть запись пробного урока.
				</p>
				<h3>
					Фото наших очных занятий <span className='accent'>{`\n`}в школе EasyUM</span>
				</h3>
			</section>

			<section>
				<PhotosComponent />
			</section>
		</div>
	);
}

interface Props {
	img: string;
	course: string;
	name: string;
	date: string;
	chat: string;
	link: string;
}

function Card({ img, course, name, date, chat, link }: Props) {
	return (
		<div className={styles.card}>
			<div className={styles.card__image}>
				<img src={`/bonus/events/${img}`} alt='Фотография преподователя' />
			</div>
			<div className={styles.text}>
				<span>Пробный урок</span>
				<h3 className='accent'>{course}</h3>
				<div className={styles.bottom}>
					<div className={styles.bottomLeft}>
						<div className={styles.bottomDesc}>
							<img src='/bonus/events/icons/iconsCard1.svg' alt='Икона' />
							<p>{name}</p>
						</div>
						<div className={styles.bottomDesc}>
							<img src='/bonus/events/icons/iconsCard2.svg' alt='Икона' />
							<p>Бесплатно</p>
						</div>
						<div className={styles.bottomDesc}>
							<img src='/bonus/events/icons/iconsCard3.svg' alt='Икона' />
							<p>
								<b>{date}</b>
							</p>
						</div>
					</div>
					<div className={styles.bottomRigth}>
						<a href={chat} className={styles.active}>
							Вступить в чат Telegram <img src='/bonus/events/icons/telegram.svg' alt='Иконка Telegram' />
						</a>
						<Link href={link} className={styles.button}>
							Подробнее
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
