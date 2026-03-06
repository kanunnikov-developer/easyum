'use client';

import { useState } from 'react';
import styles from './styles.module.css';

export default function Buttons() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button className={styles.button} onClick={() => setIsOpen(true)}>
				Условия акции
			</button>
			{isOpen && <Modal onClose={() => setIsOpen(false)} />}
		</>
	);
}

export function Modal({ onClose }: { onClose: () => void }) {
	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<h2 className={styles.text}>Условия акции</h2>
				<p className={styles.description}>
					1. В акции участвует любой, кто записался и оплатил всю стоимость курса с 1 января по 31 декабря 2025 г.{' '}
					<br />
					2. При покупке любого курса - второй для себя или для друга со скидкой 50%! <br />
					3. Акция действует только при покупке второго курса в течении 3х дней после оплаты первого <br />
					4. Скидка 50% распространяется на курс равной или меньшей длительности <br />
					5.При покупке курса большей длительности, скидка распространяется на количество месяцев равное первому курсу
				</p>
				<button onClick={onClose} className={styles.close}>
					Закрыть
				</button>
			</div>
		</div>
	);
}
