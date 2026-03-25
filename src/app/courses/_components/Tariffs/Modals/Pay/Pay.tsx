import PaymentForm from '@/app/_form/_ModalForm/PaymentForm/PaymentForm';
import styles from './styles.module.css';

interface Props {
	onClose: () => void;
	city: string | undefined;
	course: string;
	tariff: string;
	price: number | undefined;
	onSuccess: () => void;
}

export function ModalPay({ onClose, city, course, tariff, price, onSuccess }: Props) {
	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<PaymentForm
					city={city}
					course={course}
					tariff={tariff}
					price={price}
					onSuccess={onSuccess}
					onClose={onClose}
				/>
			</div>
		</div>
	);
}
