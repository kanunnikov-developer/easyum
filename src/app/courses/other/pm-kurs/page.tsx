import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import { dateStart, sale } from '../../startCourses.info';
import Hero from '../../_components/Hero/Hero';
import GetLesson from '../../_components/GetLesson/GetLesson';
import Description from '../../_components/Description/Description';
import Suitable from '../../_components/Suitable/suitable';
import FinalProject from '../../_components/FinalProject/FinalProject';
import GetLessonBlock from '../../_components/GetLesson/Block/GetLessonBlock';
import Programm from '../../_components/Programm/Programm';
import Certificate from '../../_components/Certificate/Certificate';
import FormatLearning from '../../_components/FormatLearning/FormatLearning';
import Work from '../../_components/Work/Work';
import EasyUm from '../../_components/EasyUm/Easyum';
import Reviews from '@/app/_components/Reviews/Reviews';
import Duration from '../../_components/Duration/Duration';
import PhotosComponent from '@/components/photos/photosComponent';
import { Suspense } from 'react';
import Tariffs from '../../_components/Tariffs/Tariffs';
import getRegion from '@/lib/getRegion';

const course = {
	title: dateStart[25].course,
	description_one:
		'Научитесь управлять IT-проектом от расстановки приоритетов по задачам до коммуникации с клиентом и составления документации.',
	description_two:
		'Освоите ключевые инструменты проджект-менеджера, hard и soft skills. Сможете зарабатывать без навыков программирования наравне с разработчиками.',
	img: 'other/pm-kurs/hero.svg',
	date: dateStart[25].date,
	duration: '2 месяца',
	price: dateStart[25].price,
	imgCourse: dateStart[25].imgCourse,
};

const suitable_why = [
	{
		img: '/courses/other/pm-kurs/suitable_why/one.png',
		title: 'Высокий доход',
		description:
			'IT проджект-менеджер зарабатывает наравне с разработчиками. Ваш доход может составлять до 300 000 руб. в России и до 7 000$ в зарубежных компаниях.',
	},
	{
		img: '/courses/other/pm-kurs/suitable_why/two.png',
		title: 'Легкий вход в IT',
		description:
			'Вы не будете учить язык программирования и писать код, но вам нужны будут знания из IT, чтобы говорить на одном языке с клиентом и командой.',
	},
	{
		img: '/courses/other/pm-kurs/suitable_why/three.png',
		title: 'Разнообразие задач',
		description:
			'Рутина вам не грозит. У проектного менеджера много разноплановых задач: переговоры с клиентом, управление командой, работа с бюджетом, аналитика и т.д.',
	},
	{
		img: '/courses/other/pm-kurs/suitable_why/four.png',
		title: 'Навыки лидера',
		description:
			'Вы сможете вести проекты, быстро принимать решения. Управленческий опыт прокачает вас как лидера, научит руководить командой и процессами внутри бизнеса.',
	},
];

const suitable = [
	{
		img: '/courses/ui/suitable/1.png',
		title: 'Новичкам',
		description: 'Освоите базовые инструменты и навыки, сформируете портфолио и будете готовы к работе в IT-компании.',
	},
	{
		img: '/courses/ui/suitable/2.png',
		title: 'Менеджерам',
		description: 'Смените направление, узнаете специфику работы с IT-проектами и перейдете в высокооплачиваемую нишу.',
	},
	{
		img: '/courses/ui/suitable/3.png',
		title: 'IT-специалистам',
		description:
			'Приобретете hard и soft скиллы проектного менеджера. Научитесь работать с людьми, бюджетом и временем.',
	},
	{
		img: '/courses/ui/suitable/4.png',
		title: 'Руководителям',
		description:
			'Прокачаете навыки управления командой. Узнаете, как грамотно распределять задачи и повышать эффективность выполнения.',
	},
];

const programs = [
	{
		title:
			'Введение в Project Management. Управление проектами, «Продукт» и «Проект». Роль и обязанности Проектного Менеджера.',
	},
	{
		title:
			'Project Management общие сведения. Ограничения и классификация проектов; их жизненный цикл. Основные термины Проджект Менеджмента в IT.',
	},
	{
		title:
			'Методологии управления проектами. Правила и принципы эффективного управления проектами. Знакомство с PMBoK, основные принципы: Agile Manifesto и Kanban.',
	},
	{
		title:
			'Scrum . Введение в методологию. Артефакты Scrum’a. Бэклог и приоритизация задач. Планирование, делегирование и мониторинг по Scrum.',
	},
	{
		title:
			'Взаимодействие РМ-а с Командой. Лидер и Команда, выстраиваем эффективную рабочую иерархию. Команда: типы, подбор, организация рабочего процесса. Особенности работы с фрилансерами и удаленными сотрудниками.',
	},
	{
		title:
			'Правильно сформулированная цель как ключевой фактор эффективного проджект-менеджмента. Цели и критерии успешности проекта. Мотивация Команды: виды и практические примеры.',
	},
	{
		title:
			'Организация рабочего времени. Основы тайм-менеджмента. Типы планирования. Инструментарий планирования РМ-а.',
	},
	{
		title:
			'Коммуникации внутри проекта. Управление и частые проблемы. Выбор способа связи с Заказчиками и Командой. Проектная отчетность. Правила этикета хорошего РМ-а. Частые митинги – быть или не быть?',
	},
	{
		title:
			'Экскурс по информационным технологиям. Краткая характеристика языков программирования. Уникальный гайд по обязанностям каждого IT-специалиста в Команде: кому и что делегировать. Отличия веб-проектов и мобильных проектов.',
	},
	{
		title:
			'Учимся пользоваться инструментарием «продвинутого» РМ-а. Таск-трекеры, знакомство с Jira, Redmine, Trello, TFS. Диаграмма Ганта (MS Project), Mind-maps.',
	},
	{
		title:
			'Планирование. Эстимация задач. Риски: виды, управление и ликвидация рисков. Управление объемом и содержанием проекта.',
	},
	{
		title:
			'Как правильно составлять проектную документацию? Техническое задание, юзер-стори, тест-план. Что такое гайдлайны? Как писать отчёты по проекту?',
	},
	{
		title:
			'Проблемы в проекте. Чейнж-реквесты. Временная разница с Заказчиком/ Удаленными сотрудниками/Фрилансерами. Конфликты интересов. Практические рекомендации по ликвидации проблем и рисков.',
	},
	{
		title:
			'Закрытие проекта. Сдача результатов. Список открытых вопросов и заключительных работ. Анализ проделанной работы.',
	},
	{
		title:
			'«Антистрессовые рекомендации»: восстанавливаем ресурсы, учимся различать проблемы по приоритету и не резонировать на мелкие неудачи.',
	},
	{
		title:
			'Поиск работы. Компании: типы и виды. Написание резюме и умение себя презентовать. Защита тестового проекта.',
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
					title={`Чем занимается \n`}
					accent={`Project Manager`}
					description={`Проектный менеджер управляет всеми этапами работы над проектом. Он отвечает за коммуникацию с клиентом и командой, ставит задачи и следит за процессом разработки, оценивает риски и прогнозирует прибыль. \n\n Цель проджект-менеджера – создать качественный продукт, который будет соответствовать ожиданиям клиента.`}
					img='/courses/other/pm-kurs/description.svg'
				/>

				<Suitable items={suitable_why} title='в IT – отличный выбор:' accent='Почему Progect Manager' />

				<Description
					title={`Спрос на IT \n`}
					accent={`Project Manager растет`}
					description={`Доходы IT-бизнеса России за 2022 год выросли на 35,3%, по словам вице-премьера РФ. Сфера IT непрерывно развивается: появляется всё больше новых отечественных проектов, которыми нужно управлять. \n\n Компании активно ищут IT проектных менеджеров. Спрос настолько велик, что даже новичок без опыта сможет устроиться на хорошую работу.`}
					img='/courses/other/pm-kurs/demand.svg'
				/>

				<Suitable items={suitable} title='курс?' accent='Кому подойдет' />

				<FinalProject
					img='/courses/other/pm-kurs/finalProject.svg'
					title='Организация разработки образовательного приложения'
					description='В процессе работы над проектом вы:'
					list={[
						'спланируете проект по методологии Agile',
						'разработаете план с графиком',
						'составите бэклог разработки приложения',
						'разработаете план общения со стейкхолдерами',
						'рассчитаете бюджет и оцените риски',
						'определите метрики оценки качества приложения',
						'напишите руководство для пользователей',
					]}
				/>

				<GetLessonBlock />

				<Programm mounth={course.duration} programs={programs} />

				<Certificate img='/courses/other/pm-kurs/certificate.svg' />

				<Work company_title='Project-менеджеров' />

				<FormatLearning />

				<EasyUm />

				<Reviews />

				<Duration mounth={course.duration} programs={course.title} />

				<section className={styles.photos}>
					<h2>
						<span className='accent'>Фото очных</span> занятий {`\n`} в EasyUM
					</h2>
					<PhotosComponent />
				</section>

				<Suspense
					fallback={
						<Tariffs
							city='Москва'
							price={course.price}
							course={course.title}
							sale={sale.tariffs}
							imgCourse={course.imgCourse}
						/>
					}
				>
					<Wrapper />
				</Suspense>
			</div>
		</div>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return (
		<Tariffs
			city={region?.city}
			price={course.price}
			course={course.title}
			sale={sale.tariffs}
			imgCourse={course.imgCourse}
		/>
	);
}
