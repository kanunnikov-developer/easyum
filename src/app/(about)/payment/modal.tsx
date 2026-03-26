
import styles from './modal.module.css';

interface Props {
	onClose: () => void;
}

export default function Modal({ onClose }: Props) {
	return(
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.image}>
					<img src="/about/payment/statement.png" alt="Заявление" className={styles.img}/>
				</div>
			</div>
		</div>
	)
}