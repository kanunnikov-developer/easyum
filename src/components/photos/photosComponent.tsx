import styles from './styles.module.css';

export default function PhotosComponent() {
	return (
		<div className={styles.gallery}>
			<img src='/photos/1.svg' className={styles.item1} alt='' />
			<img src='/photos/2.svg' className={styles.item2} alt='' />
			<img src='/photos/3.svg' className={styles.item3} alt='' />
			<img src='/photos/4.svg' className={styles.item4} alt='' />
			<img src='/photos/5.svg' className={styles.item5} alt='' />

			<img src='/photos/6.svg' className={styles.item6} alt='' />
			<img src='/photos/7.svg' className={styles.item7} alt='' />
			<img src='/photos/8.svg' className={styles.item8} alt='' />
			<img src='/photos/9.svg' className={styles.item9} alt='' />
			<img src='/photos/10.svg' className={styles.item10} alt='' />

			<img src='/photos/11.svg' className={styles.item11} alt='' />
			<img src='/photos/12.svg' className={styles.item12} alt='' />
			<img src='/photos/13.svg' className={styles.item13} alt='' />
			<img src='/photos/14.svg' className={styles.item14} alt='' />
			<img src='/photos/15.svg' className={styles.item15} alt='' />
		</div>
	);
}
