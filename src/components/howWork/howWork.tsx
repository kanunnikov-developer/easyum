import styles from './styles.module.css';
import Card from './ui/card';

interface Card {
	description: string;
	img: string;
}

interface Props {
	card: Card[];
}

export default function HowWorkBlock({ card }: Props) {
	return (
		<div className={styles.main}>
			<h2>Как это работает?</h2>
			<div className={styles.grid}>
				{card.map((item, index) => (
					<Card key={index} description={item.description} img={item.img} />
				))}
			</div>
		</div>
	);
}
