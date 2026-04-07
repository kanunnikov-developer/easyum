import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function SuccessPage() {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className={styles.successIcon}>
					<svg
						width='40'
						height='40'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='3'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<polyline points='20 6 9 17 4 12'></polyline>
					</svg>
				</div>
				<h1 className={styles.title}>Спасибо!</h1>
				<p className={styles.text}>
					Вы успешно оплатили заказ. В скором времени с вами свяжется менеджер для получения дальнейших инструкций.
				</p>
				<p className={styles.ctaText}>
					А чтобы узнать больше о нашей школе, не забудьте подписаться на наш Telegram-канал:
				</p>
				<a href='https://t.me/easyumru' target='_blank' rel='noopener noreferrer' className={styles.telegramBtn}>
					<svg className={styles.tgIcon} viewBox='0 0 24 24' fill='currentColor'>
						<path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.81 7.74-3.35 3.69-1.55 4.45-1.82 4.95-1.83.11 0 .36.03.53.17.14.11.18.26.2.4l-.01.3z' />
					</svg>
					Подписаться на EasyUM
				</a>
			</div>
		</div>
	);
}
