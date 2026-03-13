import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
	title: string;
	accent: string;
	img: string;
}

export default function Lider({ title, accent, img }: Props) {
	return (
		<section className={styles.lider}>
			<div className={styles.lider__row}>
				<div className={styles.lider__image}>
					<Image src={img} alt='Картинка лидер' width={450} height={325} className={styles.img} />
				</div>
				<div className={styles.lider__text}>
					<p>
						<span className='accent'>{accent} </span>
						{title}
					</p>
				</div>
			</div>
		</section>
	);
}
