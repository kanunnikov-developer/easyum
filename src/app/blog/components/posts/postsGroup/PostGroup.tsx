import { Post } from '@/app/blog/model'
import PostCard from '../postCard/PostCard'
import styles from './styles.module.css'

interface PostGroupProps {
	posts: Post[]
}

export default function PostGroup({ posts }: PostGroupProps) {
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