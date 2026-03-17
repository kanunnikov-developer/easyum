import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Suitable from '../../_components/Suitable/suitable';
import { title } from 'process';
import FinalProject from '../../_components/FinalProject/FinalProject';
import Instruments from '../../_components/Instruments/Instruments';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Programm from '../../_components/Programm/Programm';
import Certificate from '../../_components/Certificate/Certificate';
import Work from '../../_components/Work/Work';
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import EasyUm from '../../_components/EasyUm/Easyum';
import Metodist from '../../_components/Metodist/Metodist';
import Reviews from '@/app/_components/Reviews/Reviews';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';

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

const instruments = [
	{
		img: '/courses/ui/instruments/figma.svg',
		title: 'Figma',
		description: 'Онлайн-сервис для разработки интерфейсов и прототипирования',
	},
	{
		img: '/courses/ui/instruments/tilda.svg',
		title: 'Tilda',
		description: 'Платформа для создания no-code сайтов',
	},
	{
		img: '/courses/ui/instruments/photoshop.svg',
		title: 'Adobe Photoshop',
		description: 'Многофункциональный графический редактор',
	},
	{
		img: '/courses/ui/instruments/illustrator.svg',
		title: 'Adobe Illustrator',
		description: 'Программа для создания векторой графики',
	},
	{
		img: '/courses/ui/instruments/uxui.svg',
		title: 'UX&UI',
		description: 'Проектирование удобных и эстетичных интерфейсов',
	},
	{
		img: '/courses/ui/instruments/wordpress.svg',
		title: 'Wordpress',
		description: 'Платформа для создания no-code сайтов',
	},
	{
		img: '/courses/ui/instruments/pinterest.svg',
		title: 'Pinterest',
		description: 'Открытый фотосервис для поиска визуальных идей',
	},
	{
		img: '/courses/ui/instruments/pexels.svg',
		title: 'Pexels',
		description: 'Сервис для поиска стоковых фото',
	},
	{
		img: '/courses/ui/instruments/freepik.svg',
		title: 'Freepik',
		description: 'Сервис для поиска стоковой графики',
	},
	{
		img: '/courses/ui/instruments/canva.svg',
		title: 'Canva',
		description: 'Кроссплатформенный сервис для графического дизайна',
	},
];

const programs = [
	{
		title: 'Изучение рабочей среды в Adobe Photoshop',
	},
	{
		title: 'Изучение работы в Adobe Illustrator',
	},
	{
		title: 'Введение в дизайн',
	},
	{
		title: 'Разработка прототипов',
	},
	{
		title: 'Модульные сетки',
	},
	{
		title: 'Работа с текстом',
	},
	{
		title: 'Шрифты',
	},
	{
		title: 'Ширина страниц сайта',
	},
	{
		title: 'Работа с цветом',
	},
	{
		title: 'Композиция',
	},
	{
		title: 'Структура и навигация',
	},
	{
		title: 'Формы и кнопки',
	},
	{
		title: 'Дизайн-концепция',
	},
	{
		title: 'Внутренние страницы интернет-магазина',
	},
	{
		title: 'Регистрация, авторизация',
	},
	{
		title: 'Мобильная версия сайта',
	},
	{
		title: 'Рекламные банеры',
	},
	{
		title: 'Тренды-дизайна',
	},
	{
		title: 'Передача исходников в разработку',
	},
	{
		title: 'Figma',
	},
	{
		title: 'Портфолио',
	},
	{
		title: 'Tilda',
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

				<FinalProject
					img='/courses/design/web-design-ui-ux/finalProject.svg'
					title='Макет интернет-магазина'
					description='В процессе работы над проектом вы научитесь:'
					list={[
						'Разрабатывать дизайны сайтов и приложений',
						'Пользоваться инструментами Figma, Photoshop и Illustrator',
						'Работать со шрифтами и цветовой гаммой',
						'Прорисовывать графические элементы и страницы',
						'Готовить сайт к верстке',
					]}
				/>

				<Instruments instrument={instruments} />

				<GetLessonBlock />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/design/web-design-ui-ux/certificate.svg' />

				<Work company_title='Веб-дизайнеров' />

				<FormatLearning />

				<EasyUm />

				<Metodist
					img='kozakova.svg'
					course={course.title}
					name={`Козякова Ольга. Senior web-дизайнер. \n Опыт в дизайне 10+ лет.`}
					description='Работала над проектами таких известных брендов как: Kia-motors, Сбербанк, Leroy Merlin, МТС и многими другими.'
				/>

				<Reviews />

				<Duration mounth={course.duration} programs={course.title} />

				<section className={styles.photos}>
					<h2>
						<span className='accent'>Фото очных</span> занятий {`\n`} в EasyUM
					</h2>
					<PhotosComponent />
				</section>
			</div>
		</div>
	);
}
