import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Image from 'next/image';
import Sallary from '../../_components/Salary/Salary';

const course = {
	title: dateStart[0].course,
	description_one:
		'Освоите профессию с нуля за 5,5 месяцев. Наполните портфолио мощными проектами еще в процессе учебы.',
	description_two: 'Изучите Java-классику и современные фишки (Spring, лямбда-выражения, Stream API, микросервисы)',
	img: 'programming/javajunior/hero.svg',
	date: dateStart[0].date,
	duration: '5,5 месяцев',
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
					title={`Легендарная профессия\n`}
					accent='Java разработчик'
					description={`Данный курс включает в себя все самые актуальные и востребованные технологии, которые хотят видеть работодатели в 2025 году: Spring (самый популярный Framework на Java), Spring Boot, Spring MVC, работа с микросервисами, основы DevOps и прочее. \n\n Обучение начинается полностью с 0, и не требует дополнительной подготовки. Во время обучения вы разработаете 4 проекта, среди которых crm-система, 2 игры, сервис отправки массовой рассылки писем, и пр. Данные проекты фактически будут гарантировать вам легкое и успешное прохождение собеседования на позицию Java разработчик.`}
					img='/courses/programming/javajunior/description.svg'
				/>

				<section className={styles.why}>
					<div className={styles.why__row}>
						<div className={styles.why__text}>
							<h2>
								Почему Java <span className='accent'>- мощный старт в программировании?</span>
							</h2>
							<div className={styles.why__description}>
								<h2>Почти 30 лет</h2>
								<p>
									Java занимает первые места в рейтингах популярности десятки лет. Его используют Tesla, Amazon, PayPal,
									Netflix, на нем написана соцсеть Одноклассники и серверная часть РЖД.
								</p>
							</div>
						</div>
						<div className={styles.why__image}>
							<Image src='/courses/programming/hh.svg' alt='' width={500} height={450} className={styles.img} />
						</div>
					</div>
				</section>

				<Sallary min={70000} max={570000} />

				<section className={styles.top_ten}>
					<div className={styles.top_ten__row}>
						<h2>Java входит в топ-10 самых востребованных языков программирования в мире по данным TIOBE</h2>
						<div className={styles.top_ten__desctop_image}>
							<Image src='/courses/programming/topTen_desctop.svg' alt='' width={1170} height={314} />
						</div>
						<div className={styles.top_ten__dessctop_image}>
							<Image src='/courses/programming/topTen_mobile.svg' alt='' width={350} height={430} />
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
