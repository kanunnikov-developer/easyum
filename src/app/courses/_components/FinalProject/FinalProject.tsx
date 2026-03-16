import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
	img: string;
	title: string;
	description: string;
	list: string[];
}

export default function FinalProject({ img, title, description, list }: Props) {
	return (
		<section className={styles.final_project}>
			<div className={styles.image}>
				<Image src={img} width={537} height={323} alt='Картинка' className={styles.img} />
			</div>
			<div className={styles.text}>
				<h2>
					Финальный <span className='accent'>проект</span>
				</h2>
				<p className={styles.title}>{title}</p>
				<p className={styles.description}>{description}</p>
				<ul className={styles.list}>
					{list.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</div>
		</section>
	);
}
