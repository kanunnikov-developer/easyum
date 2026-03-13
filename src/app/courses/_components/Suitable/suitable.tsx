import Image from 'next/image';
import styles from './styles.module.css';
import { title } from 'process';

interface PropsItem {
	img: string;
	title: string;
	description: string;
}

interface Props {
	title: string;
	accent: string;
	items: PropsItem[];
}

export default function Suitable({ items, title, accent }: Props) {
	return (
		<section className={styles.suitable}>
			<h2>
				<span className='accent'>{accent}</span> {title}
			</h2>
			<div className={styles.group}>
				{items.map((item, index) => (
					<div className={styles.item} key={index}>
						<div className={styles.image}>
							<Image src={item.img} alt='' width={172} height={172} className={styles.img} />
						</div>
						<div className={styles.text}>
							<p className={styles.title}>{item.title}</p>
							<p className={styles.description}>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
