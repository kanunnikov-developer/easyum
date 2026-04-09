import Image from 'next/image'
import styles from './styles.module.css'
import { Post } from '@/app/blog/model'

export default function PostCard({ post }: { post: Post }) {
	return(
		<div className={styles.post}>
			<div>
				<div className={styles.image}>
				<Image src={post.image} alt="Картинка поста" width={397} height={223} className={styles.img}/>
			</div>
			<div className={styles.content}>
				<div className={styles.date}>
					<img src='/blog/calendar-icon.svg' />
					<p>{post.date}</p>
				</div>
				<h3 className={styles.title}>{post.title}</h3>
				<p className={styles.description}>{post.description}</p>
			</div>
			</div>
			
			<div className={styles.button}>
				<a href={post.href} className={styles.link}>Читать статью</a>
			</div>
		</div>
	)
}