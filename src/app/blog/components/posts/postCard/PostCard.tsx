import Image from 'next/image'
import styles from './styles.module.css'

export default function PostCard() {
	return(
		<div className={styles.post}>
			<div className={styles.image}>
				<Image src="/blog/admin-ajax.png" alt="" width={397} height={223} className={styles.img}/>
			</div>
			<div className={styles.content}>
				<div className={styles.date}>
					<img src='/blog/calendar-icon.svg' />
					<p>8 апреля 2026</p>
				</div>
				<h3 className={styles.title}>КТО ТАКОЙ FRONT-END РАЗРАБОТЧИК</h3>
				<p className={styles.description}>Front-end разработчик – программист, который создает внешнюю часть сайта или веб-приложения. Он разрабатывает то, с чем вы взаимодействуете...</p>
			</div>
			<div className={styles.button}>
				<a href="/blog/kto-takoj-front-end-razrabotchik" className={styles.link}>Читать статью</a>
			</div>
		</div>
	)
}