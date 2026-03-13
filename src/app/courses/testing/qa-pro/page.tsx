import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Image from 'next/image';
import Lider from '../../_components/Lider/Lider';
import Sallary from '../../_components/Salary/Salary';

const course = {
	title: dateStart[7].course,
	description_one:
		'Углубленный курс мануального и автоматизированного тестирования. Изучите передовые методологии тестирования, научитесь создавать эффективные и всесторонние тест-кейсы.',
	description_two:
		'Сможете автоматизировать ручные тест-кейсы на Java с помощью Selenium. Получите практический опыт и будет готовы к трудоустройству уже через 3 месяца.',
	img: 'testing/qa-pro/hero.svg',
	date: dateStart[7].date,
	duration: '7 месяцев',
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
					title={`Что делает \n`}
					accent='Тестировщик ПО?'
					description={`Тестировщик ПО занимается выявлением ошибок в работе сайта или сервиса и отправляет их на доработку. \n\n В современном IT это ключевая профессия, обеспечивающая высокое качество цифровых продуктов. \n\n Этот интенсивный курс дает комплексные знания по всем аспектам работы QA инженера. Отдельный блок посвящен написанию автотестов на Java с использованием фреймворка Selenium. Вы научитесь эффективно тестировать базы данных, веб и мобильные приложения как вручную, так и при помощи автотестов.`}
					img='/courses/testing/qa-pro/description.svg'
				/>

				<section className={styles.professions}>
					<h2>
						Курс состоит из <span className='accent'>2-х профессий</span>
					</h2>
					<div className={styles.professions__grid}>
						<div className={styles.professions__item}>
							<div className={styles.professions__image}>
								<Image
									src='/courses/testing/qa-pro/professions_one.svg'
									alt='Мануальный тестировщик'
									width={239}
									height={237}
									className={styles.professions__img}
								/>
							</div>
							<div className={styles.professions__text}>
								<p className={styles.professions__title}>Мануальный тестировщик</p>
								<p className={styles.professions__description}>
									Вручную тестирует и фиксирует дефекты, оценивает стабильность и удобство приложения с точки зрения
									пользователя
								</p>
							</div>
						</div>
						<div className={styles.professions__item}>
							<div className={styles.professions__image}>
								<Image
									src='/courses/testing/qa-pro/professions_two.svg'
									alt='Мануальный тестировщик'
									width={239}
									height={237}
									className={styles.professions__img}
								/>
							</div>
							<div className={styles.professions__text}>
								<p className={styles.professions__title}>Мануальный тестировщик</p>
								<p className={styles.professions__description}>
									Вручную тестирует и фиксирует дефекты, оценивает стабильность и удобство приложения с точки зрения
									пользователя
								</p>
							</div>
						</div>
					</div>
				</section>

				<Lider img='/courses/testing/qa-avtomation/lider.svg' title='–  ваш главный партнер по работе' accent='Java' />

				<Sallary min={70000} max={570000} />
			</div>
		</div>
	);
}
