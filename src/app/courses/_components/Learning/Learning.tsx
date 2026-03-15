import Image from 'next/image';
import styles from './styles.module.css';

interface Item {
	title: string;
	description: string;
	img: string;
	number: string;
}

interface Props {
	items: Item[];
}

export default function Learning({ items }: Props) {
	return (
		<section className={styles.learning}>
			<div className={styles.text}>
				<h2>
					Учим самому <span className='accent'>важному</span>
				</h2>
				<p>
					Мы сформировали программу с учётом ожиданий работодателей. Именно эти навыки чаще всего требуются в вакансиях
					и на практике.
				</p>
			</div>
			<div className={styles.grid}>
				{items.map((item, index) => (
					<div className={styles.card} key={index}>
						<div className={styles.card__image}>
							<Image src={item.img} alt='' width={173} height={173} className={styles.card__img} />
							<span>{item.number}</span>
						</div>
						<div className={styles.card__text}>
							<p>{item.title}</p>
							<span>{item.description}</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
