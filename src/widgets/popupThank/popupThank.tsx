'use client';

import styles from './styles.module.css';

type PopupThankProps = {
	onClose: () => void;
	isOpen: boolean;
};

export default function PopupThank({ isOpen, onClose }: PopupThankProps) {
	if (!isOpen) return null;

	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<p>Спасибо!</p>
				<span>За заявку, мы свяжемся с Вами в ближайшее время</span>
				<div className={styles.modalImage}>
					<img src='/thanksLike.svg' alt='Картинка спасибо' />
				</div>
			</div>
		</div>
	);
}
