import styles from './styles.module.css';
import RegisterForm from '@/app/_form/_ModalForm/Register/RegisterForm';

interface Props {
	onClose: () => void;
	city: string | undefined;
	course: string;
	tariff: string;
	price: string | undefined;
	onSuccess: () => void;
}

export function ModalRegister({ onClose, city, course, tariff, price, onSuccess }: Props) {
	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.modal_text}>
					<h3>
						Заявка на курс <br />"{course}"
					</h3>
					<p>Формат: {tariff}</p>
				</div>
				<div className={styles.form}>
					<RegisterForm city={city} course={course} tariff={tariff} price={price} onSuccess={onSuccess} onClose={onClose} />
				</div>
			</div>
		</div>
	);
}
