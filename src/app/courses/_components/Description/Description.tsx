import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
	title: string;
	accent: string;
	description: string;
	img: string;
}

export default function Description({ title, accent, description, img }: Props) {
	return (
		<div className={styles.description}>
			<div className={styles.description__text}>
				<h2>
					{title} <span className='accent'>{accent}</span>
				</h2>
				<p>{description}</p>
			</div>
			<div className={styles.description__img}>
				<Image src={img} alt='Картинка' width={500} height={450} className={styles.img} />
			</div>
		</div>
	);
}
