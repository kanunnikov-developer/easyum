'use client'

import { useState } from 'react'
import styles from './refand.module.css'
import Modal from '../modal'

export default function Refand() {
	const [isOpen, setIsOpen] = useState(false)

	return(
		<section className={styles.refund}>
				<h2 className='accent'>Возврат средств</h2>
				<h3>
					Старта курса <span className='accent'>еще не было?</span>
				</h3>
				<p>
					Если вы хотите вернуть денежные средства ДО старта курса - они возвращаются в полном объеме в течении
					14&nbsp;рабочих дней, тем способом и на ту карту, с которой была произведена оплата, автоматически.
				</p>
				<div className={styles.statement}>
					<p>
						Чтобы получить возврат, необходимо написать заявление в свободной форме с просьбой осуществить возврат, и
						отправить его на электронный адрес{' '}
						<a href='mailto:hello@easyum.online' style={{ borderBottom: '1px solid white' }}>
							hello@easyum.online
						</a>{' '}
						или <a href='https://wa.me/+79163101105' style={{ borderBottom: '1px solid white' }}>
							WhatsApp
						</a>{' '}
					</p>
					<button className={styles.button} onClick={() => setIsOpen(true)}>Открыть пример заявления</button>
					<img src='/about/payment/document.svg' alt='Документ' />
				</div>
				{isOpen && <Modal onClose={() => setIsOpen(false)} />}
			</section>
	)
}