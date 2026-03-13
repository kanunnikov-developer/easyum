import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';

const course = {
	title: dateStart[22].course,
	description_one: 'Научитесь создавать приложения под Android',
	description_two:
		'Соберете привлекательное портфолио из 4-х проектов, сможете решать реальные задачи Junior разработчика и подготовитесь к трудоустройству в IT-компанию.',
	img: 'mobile/java-android/hero.svg',
	date: dateStart[22].date,
	duration: '4,5 месяца',
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

				<GetLesson />

				<Description
					title={`Почему стоит стать \n`}
					accent={`Android разработчиком`}
					description={`Андроид-разработчик создаёт приложения и поддерживает их работу. \n\n Почему стоит стать Android разработчикомПри этом он не только пишет код, но может и заниматься другими вещами: \n\n 1. продумывать интерфейс и логику (если для этого нет дизайнеров) \n 2. защищать данные и устранять уязвимости \n 3. отвечать за производительность приложений \n 4. изучать пользовательские пожелания и делать обновления.`}
					img='/courses/mobile/java-android/description.svg'
				/>
			</div>
		</div>
	);
}
