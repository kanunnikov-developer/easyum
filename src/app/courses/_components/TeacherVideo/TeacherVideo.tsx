import Image from 'next/image';
import styles from './styles.module.css';

export default function TeacherVideo() {
	return (
		<section className={styles.teacherVideo}>
			<div className={styles.circle1}></div>
			<div className={styles.circle2}></div>
			<div className={styles.circle5}></div>
			<div className={styles.teacherVideo__row}>
				<h2>
					Преподователь <span className='accent'>о курсе</span>
				</h2>
				<div className={styles.teacherVideo__content}>
					<div className={styles.teacherVideo__image}>
						<Image
							src='/courses/ui/teacherVideo/teacherImage.svg'
							alt='Познакомьтесь с вашим преподавателем! Кристина расскажет, что ждет вас в этом курсе 💙'
							width={441}
							height={465}
						/>
					</div>
					<div className={styles.teacherVideo__video}>
						<video
							autoPlay
							muted
							playsInline
							controls
							preload='metadata' // или "auto", если хочешь быстрее начать
							// poster="/path/to/poster.jpg" // опционально — картинка до загрузки
							className={styles.videoPlayer} // для стилей
						>
							<source src='https://msk.avenue.school/wp-content/uploads/2024/03/IntroTarget.mp4' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>
		</section>
	);
}
