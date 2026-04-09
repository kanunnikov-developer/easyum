import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs'
import styles from './styles.module.css'
import BlogTabs from './components/BlogTabs/BlogTabs'

export default async function Page() {
	return(
		<div className={styles.page}>
			<div className='container'>
				<Breadcrumbs />
				<BlogTabs />
			</div>
		</div>
	)
}