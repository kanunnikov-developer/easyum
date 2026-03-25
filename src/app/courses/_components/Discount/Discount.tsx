'use client'

import { useState } from 'react'
import styles from './styles.module.css'
import { Modal } from '@/app/_components/Discount/ui/button'

export default function DiscountTariff() {

	const [isOpen, setIsOpen] = useState(false)

	const togglePopup = () => {
		setIsOpen(!isOpen)
	}
	return(
		<div className={styles.section}>
			<div className={styles.section__row}>
				<span className={styles.number}>-50</span><span className={styles.procent}>%</span>
				<div className={styles.text}>
					<h2 className={styles.title}>Скидка на второй курс!</h2>
					<p className={styles.subtitle}>При покупке любого курса - второй для себя {`\n`}или для друга со скидкой 50%!</p>
				</div>
				<div className={styles.buttons}>
					<a href="/courses" className={styles.button}>Выбрать курс</a>
					<button className={styles.popup} onClick={togglePopup}>Условия акции</button>
				</div>
			</div>
			{isOpen && <Modal onClose={() => setIsOpen(false)} />}
		</div>
	)
}