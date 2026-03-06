import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';
import Buttons from './ui/button';

export default function Discount() {
	return (
		<section className={styles.discount}>
			<div className={styles.image}>
				<Image src='/main/discount.svg' alt='Картинка скидка' width={460} height={445} className={styles.img} />
			</div>
			<div className={styles.discount__text}>
				<p className={styles.discount__title}>
					Скидка <span>-50%</span> {`\n`} на второй курс!
				</p>
				<p className={styles.discount__description}>
					При покупке любого курса - второй для себя или для друга со скидкой 50%!
				</p>
				<div className={styles.buttons}>
					<Link href='/courses' className={styles.accent_button}>
						Выбрать курс
					</Link>
					<Buttons />
				</div>
			</div>
		</section>
	);
}
