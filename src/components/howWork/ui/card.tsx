import styles from './styles.module.css';

interface Props {
	description: string;
	img: string;
}

export default function Card({ description, img }: Props) {
	return (
		<div className={styles.item}>
			<img src={img} alt={description} />
			<p>{description}</p>
		</div>
	);
}
