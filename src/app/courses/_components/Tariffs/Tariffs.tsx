import Rate from './Rate/Rate';
import styles from './styles.module.css';

interface Price {
	online: number;
	video: number;
	ochno: number;
}

interface Props {
	city: string | undefined;
	course: string;
	price: Price | undefined;
	sale: string;
	imgCourse: string | undefined;
	mounth: number;
}

export default function Tariffs({ city, price, course, sale, imgCourse, mounth }: Props) {
	return (
		<section id='tariffs' className={styles.tariffs}>
			<h2>
				<span className='accent'>Выберите </span>тариф
			</h2>
			<div className={styles.grid}>
				<Rate
					city={city}
					course={course}
					format='Онлайн в группе'
					lists={[
						`Онлайн занятия в группе \n (2 раза в неделю, вечером)`,
						'Проверка домашних заданий',
						'Запись всех занятий навсегда',
						'Чат с преподавателем',
					]}
					price={price?.online}
					img='1.svg'
					sale={sale}
					imgCourse={imgCourse}
					mounth={mounth}
				/>
				<Rate
					city={city}
					course={course}
					format='Видео-курс'
					lists={[
						`Уроки в записи`,
						'Разбор дз раз в неделю \n (онлайн в мини-группе)',
						'Чат с преподавателем',
						'Запись всех занятий навсегда',
					]}
					price={price?.video}
					img='2.svg'
					sale={sale}
					imgCourse={imgCourse}
					mounth={mounth}
				/>
				<Rate
					city={city}
					course={course}
					format='Очный'
					lists={[
						`Онлайн занятия в группе \n (2 раза в неделю, вечером)`,
						'Проверка домашних заданий',
						'Запись всех занятий навсегда',
						'Чат с преподавателем',
					]}
					price={price?.ochno}
					img='3.svg'
					sale={sale}
					imgCourse={imgCourse}
					mounth={mounth}
				/>
			</div>
		</section>
	);
}
