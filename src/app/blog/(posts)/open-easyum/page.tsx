import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs'
import styles from '../styles.module.css'
import ViewCounter from '../../components/ViewCounter/ViewCounter'
import LessonPost from '../../components/lesson/lessonPost'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Официальное открытие школы программирования в Москве',
  description: 'Современная школа программирования EasyUM в Москве официально открыла свои двери для будущих ИТ-специалистов. Обучайтесь новым профессиям вместе с нами! Лучшие педагоги практики',
  keywords: [
    'Школа изиум',
	'школа программирования в Москве',
	'курсы программирования в Москве',
	'обучение программированию в Москве',
	'программирование для начинающих',
	'курсы по программированию для начинающих',
	'программирование с нуля',
	'программирование для детей',
	'программирование для подростков',
	'программирование для взрослых',
	'программирование онлайн',
	'программирование офлайн',
	'программирование в Москве',
	'программирование в России',
	'программирование в 2026 году',
  ],
  authors: [{ name: 'EasyUM' }],
  creator: 'EasyUM',

  openGraph: {
    title: 'Официальное открытие школы программирования в Москве',
    description: 'Современная школа программирования EasyUM в Москве официально открыла свои двери для будущих ИТ-специалистов. Обучайтесь новым профессиям вместе с нами! Лучшие педагоги практики',
    url: 'https://it.easyum.ru/blog/open-easyum',
    type: 'article',
    images: [
      {
        url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Официальное открытие школы программирования в Москве',
      },
    ],
    locale: 'ru_RU',
    siteName: 'EasyUM',
  },

  alternates: {
    canonical: 'https://it.easyum.ru/blog/open-easyum',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
	return(
		<div className={styles.page}>
			<div className='container'>
				<Breadcrumbs />
				<section className={styles.post}>
					<div className={styles.header}>
						<div className={styles.left}>
							<div className={styles.info}>
								<div className={styles.date}>
									<img src='/blog/calendar-icon.svg' />
									<p>15 июля 2018</p>
								</div>
								<ViewCounter slug="open-easyum" initialViews={0} />
							</div>
							<h1 className={styles.title}>УРА! 15 ИЮЛЯ — ОФИЦИАЛЬНЫЙ ДЕНЬ ОТКРЫТИЯ EASYUM.</h1>
							<div className={styles.tabs}>
								<div className={styles.tab}>#Наша школа</div>
							</div>
						</div>
						<div className={styles.right}>
							<div className={styles.image}>
								<img src="/blog/open-easyum.svg" alt="Картинка официальное открытие школы программирования в Москве" className={styles.img}/>
							</div>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.content_left}>
						<h3 className={styles.subtitle}><span className='accent'>Ураа! Мы официально открылись!</span></h3>
						<p className={styles.text}>15 июля состоялось официальное открытие самой практической школы программирования в Москве - EasyUM.</p>
						<p className={styles.text}><b>Кто мы?</b></p>
						<p className={styles.text}>Мы - учебный центр EasyUM - место, где сбываются мечты, где каждый может получить новую высокооплачиваемую профессию.</p>
						<p className={styles.text}><b>Почему мы?</b></p>
						<p className={styles.text}>Мы все время меняемся и дорабатываем учебные программы курсов исходя из тенденций развития IT индустрии. ИТ курсы от EasyUM - это лучший выбор для тех, кто ищет эффективное обучение.</p>
						<p className={styles.text}><b>Основная цель IT курсов EasyUM – обучать на практике!</b></p>
						<p className={styles.text}>Именно поэтому мы остановились на практической подаче материала. Меньше слов - больше дела. Мы предпочитаем "прорешивать" со своими студентами даже самые лёгкие задачи.</p>
						<h3 className={styles.subtitle_text}><span className='accent'>4 правила EasyUM</span></h3>
						
						<p className={styles.text}><b>На "поле боя" с первого занятия!</b></p>
						<p className={styles.text}>Мы не сторонники теоретического подхода к обучению. Даже самые легкие задачи мы предпочитаем "прорешать".</p>
						<p className={styles.text}><b>Нет великим теоретикам!</b></p>
						<p className={styles.text}>Все наши преподаватели - практикующие специалисты и знают о своём предмете не "из книжек", а из реального опыта работы.</p>
						<p className={styles.text}><b>Пропуск в IT-тусовочку!</b></p>
						<p className={styles.text}>Живое общение с разработчиком, который ответит на все Ваши вопросы и не оставит Вас один на один с Багом... Разве не повод прийти именно к нам?</p>
						<p className={styles.text}><b>Наш приоритет - студент очного отделения!</b></p>
						<p className={styles.text}>В этом плане, мы - консерваторы, и считаем, что только живое общение Студент-Преподаватель даёт наилучший результат.</p>
						<p className={styles.text}>Приглашаем всех желающих получить современную Digital-профессию по адресу г. Москва Кутузовский Проспект 36, Строение 4, Вход 7.</p>
						
						</div>
						<div className={styles.content_right}>
							<LessonPost lesson='UI/UX Дизайнер'/>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}