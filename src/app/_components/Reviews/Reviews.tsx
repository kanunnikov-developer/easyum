import styles from './styles.module.css';
import SwiperBlock from './ui/swiper';

export default function Reviews() {
	return (
		<section className={styles.reviews}>
			<h2>
				<span className='accent'>Что говорят {`\n`} о нас</span> ученики
			</h2>
			<div className={styles.swiper}>
				<SwiperBlock />
			</div>
		</section>
	);
}
