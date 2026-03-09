import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from '../english-level/styles.module.css';
import TestForm from './ui/TestForm';
import SwiperBlock from '../english-level/ui/swiper/swipre';
import cn from 'classnames';

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<div className={styles.header}>
				<Breadcrumbs />
				<h2>
					<span className='accent'>Тест: </span>Какая IT-профессия мне подходит?
				</h2>
				<div className={styles.form}>
					<TestForm />
				</div>
				<div className={styles.description}>
					<p>IT-индустрия – одна из самых прогрессивных и быстроразвивающихся отраслей.</p>
					<br />
					<p>
						Мир меняется, поэтому пришло время сменить профессию на более современную, престижную и высокооплачиваемую.
						Но как же самому разобраться в столь неизвестной сфере и понять, какая IT-профессия подходит именно вам?
					</p>
					<br />
					<p>
						Для того чтобы помочь вам определиться, мы, дружная команда IT-специалистов, разработали тест. С помощью
						теста вы поймете, какая IT-профессия максимально для вас подходит, исходя из ваших качеств характера,
						желаний и умений.
					</p>
					<br />
					<p>
						Этот тест не является четким руководством! Если вы в итоге выбрали другую IT-профессию, мы уверенны, что
						именно в ней вы добьетесь самых высоких результатов.
					</p>
				</div>
				<div className={styles.gallerry}>
					<h2>Другие тесты</h2>
					<SwiperBlock />
				</div>
			</div>
		</div>
	);
}
