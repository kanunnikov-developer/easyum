import Image from 'next/image';
import styles from './styles.module.css';

export default function GridProjects() {
	return (
		<div className={styles.gridProjects}>
			<h2>
				<span className='span-accent'>Выполненные </span>работы
			</h2>
			<div className={styles.grid}>
				<div className={styles.card}>
					<Image src='/company/project/projects/project1.svg' alt='project1' width={359} height={200} />
					<p>{`Кейс: Графический дизайн \n Настольная игра`}</p>
				</div>
				<div className={styles.card}>
					<Image src='/company/project/projects/project2.svg' alt='project1' width={359} height={200} />
					<p>{`Кейс: UX&UI Веб-дизайн \n Сайт для отеля Ranovsky Park`}</p>
				</div>
				<div className={styles.card}>
					<Image src='/company/project/projects/project3.svg' alt='project1' width={359} height={200} />
					<p>{`Кейс: Графический дизайн \n Логотип для фотографа`}</p>
				</div>
				<div className={styles.card}>
					<Image src='/company/project/projects/project4.svg' alt='project1' width={359} height={200} />
					<p>{`Кейс: Графический дизайн \n Открытки для клиентов ВТБ`}</p>
				</div>
				<div className={styles.card}>
					<Image src='/company/project/projects/project5.svg' alt='project1' width={359} height={200} />
					<p>{`Кейс: UX&UI Веб-дизайн \n Сайт для строительной компании`}</p>
				</div>
				<div className={styles.card}>
					<Image src='/company/project/projects/project6.svg' alt='project1' width={359} height={200} />
					<p>{`Кейс: UX&UI Веб-дизайн \n Сайт для IT-школы`}</p>
				</div>
			</div>
		</div>
	);
}
