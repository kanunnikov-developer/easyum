import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Suitable from '../../_components/Suitable/suitable';

const course = {
	title: dateStart[25].course,
	description_one:
		'Научитесь управлять IT-проектом от расстановки приоритетов по задачам до коммуникации с клиентом и составления документации.',
	description_two:
		'Освоите ключевые инструменты проджект-менеджера, hard и soft skills. Сможете зарабатывать без навыков программирования наравне с разработчиками.',
	img: 'other/pm-kurs/hero.svg',
	date: dateStart[25].date,
	duration: '2 месяца',
};

const suitable_why = [
	{
		img: '/courses/other/pm-kurs/suitable_why/one.png',
		title: 'Высокий доход',
		description:
			'IT проджект-менеджер зарабатывает наравне с разработчиками. Ваш доход может составлять до 300 000 руб. в России и до 7 000$ в зарубежных компаниях.',
	},
	{
		img: '/courses/other/pm-kurs/suitable_why/two.png',
		title: 'Легкий вход в IT',
		description:
			'Вы не будете учить язык программирования и писать код, но вам нужны будут знания из IT, чтобы говорить на одном языке с клиентом и командой.',
	},
	{
		img: '/courses/other/pm-kurs/suitable_why/three.png',
		title: 'Разнообразие задач',
		description:
			'Рутина вам не грозит. У проектного менеджера много разноплановых задач: переговоры с клиентом, управление командой, работа с бюджетом, аналитика и т.д.',
	},
	{
		img: '/courses/other/pm-kurs/suitable_why/four.png',
		title: 'Навыки лидера',
		description:
			'Вы сможете вести проекты, быстро принимать решения. Управленческий опыт прокачает вас как лидера, научит руководить командой и процессами внутри бизнеса.',
	},
];

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Освоите базовые инструменты и навыки, сформируете портфолио и будете готовы к работе в IT-компании.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Менеджерам',
		description: 'Смените направление, узнаете специфику работы с IT-проектами и перейдете в высокооплачиваемую нишу.',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'IT-специалистам',
		description:
			'Приобретете hard и soft скиллы проектного менеджера. Научитесь работать с людьми, бюджетом и временем.',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Руководителям',
		description:
			'Прокачаете навыки управления командой. Узнаете, как грамотно распределять задачи и повышать эффективность выполнения.',
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
					accent={`Project Manager`}
					description={`Проектный менеджер управляет всеми этапами работы над проектом. Он отвечает за коммуникацию с клиентом и командой, ставит задачи и следит за процессом разработки, оценивает риски и прогнозирует прибыль. \n\n Цель проджект-менеджера – создать качественный продукт, который будет соответствовать ожиданиям клиента.`}
					img='/courses/other/pm-kurs/description.svg'
				/>

				<Suitable items={suitable_why} title='в IT – отличный выбор:' accent='Почему Progect Manager' />

				<Description
					title={`Спрос на IT \n`}
					accent={`Project Manager растет`}
					description={`Доходы IT-бизнеса России за 2022 год выросли на 35,3%, по словам вице-премьера РФ. Сфера IT непрерывно развивается: появляется всё больше новых отечественных проектов, которыми нужно управлять. \n\n Компании активно ищут IT проектных менеджеров. Спрос настолько велик, что даже новичок без опыта сможет устроиться на хорошую работу.`}
					img='/courses/other/pm-kurs/demand.svg'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />
			</div>
		</div>
	);
}
