import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
	img: string;
}

export default function Certificate({ img }: Props) {
	return (
		<section className={styles.cert}>
			<div className={styles.image}>
				<Image src={img} alt='Сертификат' width={622} height={439} className={styles.img} />
			</div>
			<div className={styles.text}>
				<h2>
					Вы получите <br />
					<span className='accent'>сертификат EasyUM</span>
				</h2>
				<p>Он подтвердит, что вы прошли курс, и станет дополнительным аргументом при устройстве на работу.</p>
			</div>
		</section>
	);
}
