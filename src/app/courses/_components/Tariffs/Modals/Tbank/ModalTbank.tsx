import ModalFormTbank from '@/app/_form/_ModalForm/Tbank/ModalFormTbank';
import styles from './styles.module.css';
import Image from 'next/image';

interface Props {
	onClose: () => void;
	city: string | undefined;
	course: string;
	tariff: string;
	price: string | undefined;
	imgCourse: string | undefined;
	onSuccess: () => void;
}

export function ModalTbank({ onClose, city, course, tariff, price, imgCourse, onSuccess }: Props) {
	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.exit}>
					<button onClick={onClose} className={styles.button_img}>
						<img src='/icons/exit.svg' alt='Закрыть' />
					</button>
				</div>
				<h3>Ваш заказ:</h3>
				<div className={styles.order}>
					<div className={styles.order__image}>
						<Image src={`/courses${imgCourse}`} alt='Картинка курса' width={129} height={85} className={styles.img} />
					</div>
					<div className={styles.order__text}>
						<p className={styles.order_title}>Курс "{course}"</p>
						<p className={styles.order_tariff}>{tariff}</p>
						<div className={styles.price}>
							<p className={styles.price__description}>Способ оплаты: Тинькофф рассрочка</p>
							<p className={styles.price__price}>{price} ₽</p>
						</div>
					</div>
				</div>
				<div className={styles.form}>
					<ModalFormTbank
						city={city}
						course={course}
						tariff={tariff}
						price={price}
						onSuccess={onSuccess}
						onClose={onClose}
					/>
				</div>
			</div>
		</div>
	);
}
