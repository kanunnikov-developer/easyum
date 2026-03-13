import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';

const course = {
	title: dateStart[17].course,
	description_one:
		'Научитесь работать в популярных графических редакторах: Photoshop, Illustrator, Figma и After Effects.',
	description_two:
		'Подготовитесь к обучению на специализированных курсах дизайна – графический, веб-, моушн-дизайн и прочие.',
	img: 'design/design-dlya-nachinayshih/hero.svg',
	date: dateStart[17].date,
	duration: '2 месяца',
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
					title={`Графические редакторы –`}
					accent='главные инструменты дизайнера'
					description={`Умение пользоваться графическими редакторами открывает много возможностей как для будущего дизайнера, так и для специалистов других профессий.`}
					img='/courses/design/graphic-designer/description.svg'
				/>
			</div>
		</div>
	);
}
