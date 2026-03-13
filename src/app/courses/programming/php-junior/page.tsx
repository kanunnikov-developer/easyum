import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';

const course = {
	title: dateStart[6].course,
	description_one:
		'Освоите популярнейший язык, лежащий в основе большинства сайтов в интернете. Пополните портфолио первыми бизнес-приложениями и коммерческим веб-сайтом.',
	description_two:
		'Научитесь поддерживать работу сайтов и приложений на PHP, что сделает вас востребованным специалистом после курса.',
	img: 'programming/php-junior/hero.svg',
	date: dateStart[6].date,
	duration: '5 месяцев',
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
					accent='PHP-разработчик?'
					description={`Сейчас российский и мировой бизнес активно переходит в онлайн. Всем нужны крутые сайты и веб-приложения, которые будут быстрыми и удобными. Большинство из них работает на PHP. \n\n Особенной популярностью язык пользуется в регионах России. Его ценят за простоту, скорость разработки и удобство в обслуживании. Поэтому, зная PHP вы не останетесь без работы - сможете поддерживать существующие продукты, и создавать новые, удовлетворяющие требования рынка. \n\n Только на hh.ru сейчас доступно более 1300 вакансий, от региональных и федеральных компаний.`}
					img='/courses/programming/php-junior/description.svg'
				/>
			</div>
		</div>
	);
}
