import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Suitable from '../../_components/Suitable/suitable';
import { title } from 'process';

const course = {
	title: dateStart[15].course,
	description_one:
		'На практике научитесь проектировать удобные и креативные сайты, применяя современные технологии веб-дизайна.',
	description_two:
		'Освоите необходимые навыки и инструменты, соберете крутое портфолио. Сможете с нуля проектировать веб-сайты и мобильные приложения, и претендовать на позицию Junior.',
	img: 'design/web-design-ui-ux/hero.svg',
	date: dateStart[15].date,
	duration: '4 месяца',
};

const suitable = [
	{
		img: '/courses/ui/suitable/5.png',
		title: 'Новичкам',
		description:
			'Освоите новую профессию и получите новые навыки. Уже во время обучения сможете брать заказы по дизайну.',
	},
	{
		img: '/courses/ui/suitable/6.png',
		title: 'Графическим дизайнерам',
		description: 'Приобретете навыки работы с веб-интерфейсами. Сможете повысить стоимость на свои услуги.',
	},
	{
		img: '/courses/ui/suitable/7.png',
		title: 'Офисным работникам',
		description: 'Освоите новую профессию, получите новый метод заработка и возможность работать из дома',
	},
	{
		img: '/courses/ui/suitable/8.png',
		title: 'Из других сфер',
		description:
			'Если вы уже IT специалист из другой направления, сможете изучить новый пакет навыков для своего развития.',
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
					title={`Кто такой`}
					accent='веб-дизайнер?'
					description={`Веб-дизайнер для сайтов и приложений, это как архитектор для зданий. Он отвечает за внешний вид продукта, красивый и понятный макет, согласованность его частей, логику интерфейса и удобство использования. \n\n Хороший веб-дизайн означает, что пользователю на сайте красиво и удобно. Это напрямую влияет на восприятие бренда, поэтому компании готовы хорошо платить таким специалистам.`}
					img='/courses/design/web-design-ui-ux/description.svg'
				/>

				<Description
					title={`В чем`}
					accent='эффективность EasyUM?'
					description={`70% времени на наших занятих уделяется практическим задачам веб-дизайнера. На курсе вы будете работать над двумя большими проектами - прототипом многостраничного веб-сайта и мобильного приложения. Требования к учебным проектам максимально приближены к реальным запросам работодателей. \n\n По окончании курса вы сможете претендовать на позицию Junior веб-дизайнера в агентстве или развиваться в качестве фрилансера.`}
					img='/courses/other/pm-kurs/description.svg'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />
			</div>
		</div>
	);
}
