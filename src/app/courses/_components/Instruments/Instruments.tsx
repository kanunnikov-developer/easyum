import styles from './styles.module.css';

interface Item {
	img: string;
	title: string;
	description: string;
}

interface Props {
	instrument: Item[];
}

export default function Instruments({ instrument }: Props) {
	return (
		<section className={styles.instruments}>
			<h2>
				<span className='accent'>Основные</span> инструменты
			</h2>
			<div className={styles.grid}>
				{}
				{instrument.map((item, index) => (
					<div key={index} className={styles.item}>
						<img src={item.img} alt={item.title} />
						<div className={styles.item__text}>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
