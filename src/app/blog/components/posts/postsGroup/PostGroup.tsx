import PostCard from '../postCard/PostCard'
import styles from './styles.module.css'

export default function PostGroup() {
	return(
		<section className={styles.post_list}>
			<div className={styles.post_list_wrapper}>
				<PostCard />
			</div>
		</section>
	)
}