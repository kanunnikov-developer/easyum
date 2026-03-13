import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Lider from '../../_components/Lider/Lider';
import Suitable from '../../_components/Suitable/suitable';

const course = {
	title: dateStart[12].course,
	description_one:
		'Освоите профессию с нуля и будете готовы к первой работе уже через 5 месяцев. Научитесь создавать крутые интерфейсы для сайтов и приложений на JavaScript.',
	description_two: 'Наполните портфолио 3 проектами и сможете соревноваться за должность с практиками.',
	img: 'web/javascript-front-end/hero.svg',
	date: dateStart[12].date,
	duration: '5 месяцев',
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Вы никогда не работали в IT, но теперь твердо решили быстро туда попасть.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Начинающим',
		description: 'Хотите структурировать знания, попрактиковаться и получить обратную связь от ментора',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Верстальщикам',
		description:
			'Работали верстальщиком, но поняли, что способны на большее. 1/4 часть Front-end вы уже знаете – поэтому вперед!',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Другим программистам',
		description:
			'Вы знаете другой язык программирования или даже несколько, но появилась необходимость изучить JavaScript.',
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

				<GetLesson />

				<Description
					title={`Чем занимается \n`}
					accent='Frontend разработчик?'
					description={`Front-end это специалист, который создает внешнюю часть сайтов и приложений. Именно его работу вы видите, когда заходите в интернет-магазин или мобильное приложение. \n\n Он переносит дизайн-макет в код, заботится об оформлении контента, работе кнопок и ссылок. Его главная задача – чтобы всё на сайте работало быстро и было удобным для пользователя.`}
					img='/courses/web/javascript-front-end/description.svg'
				/>

				<Lider
					img='/courses/web/javascript-front-end/lider.svg'
					title='–  ваш главный партнер по работе'
					accent='Javascript'
				/>

				<Description
					title={`Не переживайте,`}
					accent='спрос на Front-end разработчиков не снизится'
					description={`Российский и мировой бизнес активно переходит в онлайн. Всем нужны крутые сайты и приложения, чтобы держать бизнес на плаву и не выглядеть хуже конкурентов. \n\n Только на hh.ru доступно больше 2 тысяч вакансий от компаний уровня CберБанк, Wildberries, kaspersky и подобных.`}
					img='/courses/web/javascript-front-end/demand.svg'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />
			</div>
		</div>
	);
}
