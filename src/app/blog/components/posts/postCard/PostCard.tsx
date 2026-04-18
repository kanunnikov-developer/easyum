import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
import { Post } from '@/app/blog/model'

export default function PostCard({ post }: { post: Post }) {
	return(
		<Link href={post.href} className={styles.post}>
			<div>
				<div className={styles.image}>
					<Image src={post.image} alt="Картинка поста" width={397} height={223} className={styles.img}/>
				</div>
				<div className={styles.content}>
					<div className={styles.date}>
						<img src='/blog/calendar-icon.svg' alt="Календарь" />
						<p>{post.date}</p>
					</div>
					<h3 className={styles.title}>{post.title}</h3>
					<p className={styles.description}>{post.description}</p>
				</div>
			</div>
			
			<div className={styles.button}>
				<span className={styles.link}>Читать статью</span>
			</div>
		</Link>
	)
}