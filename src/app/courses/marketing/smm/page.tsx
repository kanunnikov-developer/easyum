import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import TeacherVideo from '../../_components/TeacherVideo/TeacherVideo';

const course = {
	title: dateStart[18].course,
	description_one:
		'Научитесь продвигать бизнес в социальных сетях и выстраивать маркетинговую коммуникацию между брендом и его клиентами.',
	description_two:
		'Освоите 5 digital-профессий за 2,5 месяца и получите мощную базу для работы в интернете. Получите актуальные на 2025 год знания о Вконтакте, Telegram, Дзен, Одноклассники и других топовых площадках.',
	img: 'marketing/smm/hero.svg',
	date: dateStart[18].date,
	duration: '2,5 месяца',
};

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
			</div>
		</div>
	);
}
