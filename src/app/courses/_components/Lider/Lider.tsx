import Image from 'next/image';
import styles from './styles.module.css';
import cn from 'classnames';

interface Props {
	title: string;
	accent: string;
	img: string;
	size?: 'small' | 'large';
}

export default function Lider({ title, accent, img, size }: Props) {
	return (
		<section className={styles.lider}>
			<div className={styles.lider__row}>
				<div className={styles.lider__image}>
					<Image src={img} alt='Картинка лидер' width={450} height={325} className={styles.img} />
				</div>
				<div
					className={cn(
						size === 'small' ? styles.small : styles.lider__text,
						size === 'large' ? styles.large : styles.lider__text,
					)}
				>
					<p>
						<span className='accent'>{accent} </span>
						{title}
					</p>
				</div>
			</div>
		</section>
	);
}
