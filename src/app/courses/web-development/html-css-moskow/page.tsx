import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Image from 'next/image';

const course = {
	title: dateStart[13].course,
	description_one: 'Научитесь верстать лендинги, многостраничные сайты, интернет-магазины и мобильные приложения.',
	description_two:
		'Освоите HTML&CSS с нуля до уровня Junior. Сможете начать фрилансить через 2 месяца и продолжать развиваться в веб-разработке на курсе Front-end или Full-Stack.',
	img: 'web/html-css-moskow/hero.svg',
	date: dateStart[13].date,
	duration: '3 месяца',
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
					title={`Чем занимается \n`}
					accent='верстальщик?'
					description={`Верстальщик переводит макет дизайнера в код, понятный браузерам. \n\n Обязанность верстальщика – оформление веб-страницы, начиная с размера и начертания шрифта до размещения элементов на странице и правильности отображения информации на всех устройствах. \n\n Так как красота, простота и удобство в использовании сайта значительно влияют на продажи и имидж бренда, профессиональные верстальщики сегодня на вес золота.`}
					img='/courses/web/html-css-moskow/description.svg'
				/>

				<section className={styles.why}>
					<div className={styles.why__row}>
						<div className={styles.why__text}>
							<h2>
								Вас ждет максимум <span className='accent'>практики</span>
							</h2>
							<p>
								Вы будете выполнять реальные задачи верстальщика на уроках и дома. По окончанию курса сформируете
								портфолио, которое позволит соревноваться за проекты наравне с практикующими специалистами. <br />
								<br />
								На каждом этапе вас будет поддерживать преподаватель. Не стесняйтесь задавать ему вопросы в любое время
								в общем чате группы.
							</p>
						</div>
						<div className={styles.why__image}>
							<Image
								src='/courses/web/html-css-moskow/why.svg'
								alt=''
								width={500}
								height={450}
								className={styles.img}
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
