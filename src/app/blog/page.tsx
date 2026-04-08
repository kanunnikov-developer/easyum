import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs'
import styles from './styles.module.css'
import PostGroup from './components/posts/postsGroup/PostGroup'

export default async function Page() {
	return(
		<div className={styles.page}>
			<div className='container'>
					<Breadcrumbs />
				
				<div className={styles.blog_title}>
					<h1><span className='accent'>Статьи</span> нашего блога</h1>
				</div>

				<PostGroup />
			</div>
		</div>
	)
}