import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
	img: string;
	course: string;
	name: string;
	description: string;
}

export default function Metodist({ img, course, name, description }: Props) {
	return (
		<section className={styles.metodist}>
			<div className={styles.image}>
				<Image src={`/courses/ui/metodists/${img}`} alt='Методист' width={406} height={404} className={styles.img} />
			</div>
			<div className={styles.text}>
				<h2>
					<span className='accent'>Методист курса</span>
					<br />"{course}"
				</h2>
				<div className={styles.image_mobile}>
					<Image src={`/courses/ui/metodists/${img}`} alt='Методист' width={331} height={331} className={styles.img} />
				</div>
				<p>
					<b>{name}</b>
				</p>
				<p className={styles.description}>{description}</p>
			</div>
		</section>
	);
}
