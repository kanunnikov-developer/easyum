import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Lider from '../../_components/Lider/Lider';
import Suitable from '../../_components/Suitable/suitable';
import { title } from 'process';

const course = {
	title: dateStart[9].course,
	description_one:
		'Научитесь тестировать приложения с нуля. Напишите первые автотесты с использованием Java и Selenium прямо на занятиях',
	description_two: 'Освоите актуальные технологии: Jenkins, Docker, Maven, PyCharm, PyTest',
	img: 'testing/qa-avtomation/hero.svg',
	date: dateStart[9].date,
	duration: '4 месяца',
};

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description:
			'Вы не работали в IT, не програмировали и не занимались тестированием. Начинайте карьеру с чистого листа!',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Начинающим',
		description:
			'Вы уже достигли в ручном тестировании уровня Junior или Middle и хотите повысить профессионализм и зарабатывать больше',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'Начинающим Java-разработчикам',
		description: 'Вы программируете на Java и хотели бы освоить инструменты для написания автотестов',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Специалистам на других языках',
		description:
			'Вы работали в IT и хотите освоить автотестирование на Java для текущей работы или для смены профессии',
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
					title={`Зачем обучаться \n`}
					accent='автотестам?'
					description={`Автоматизация рутинных проверок, ускорение процесса поиска багов – то, к чему движется вся сфера тестирования. \n\n Если вы хотите оставаться востребованным тестировщиком с высокой зарплатой, без автоматизированного тестирования не обойтись. \n\n Освоив написание автотестов на Java, вы сможете быстрее проводить проверки, меньше ошибаться и качественнее выполнять работу. `}
					img='/courses/testing/qa-avtomation/description.svg'
				/>

				<Lider img='/courses/testing/qa-avtomation/lider.svg' title='–  ваш главный партнер по работе' accent='Java' />

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />
			</div>
		</div>
	);
}
