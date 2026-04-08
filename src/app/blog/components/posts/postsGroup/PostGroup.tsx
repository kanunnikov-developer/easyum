import { posts } from '@/app/blog/model'
import PostCard from '../postCard/PostCard'
import styles from './styles.module.css'

export default function PostGroup() {
	return(
		<section className={styles.post_list}>
			<div className={styles.post_list_wrapper}>
				{posts.map((post) => (
					<PostCard key={post.id} post={post} />
				))}
			</div>
		</section>
	)
}