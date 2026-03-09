'use client';

import { useState } from 'react';
import styles from './styles.module.css';
import cn from 'classnames';
import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';

export default function Page() {
	const [oferta, setOferta] = useState(true);
	return (
		<div className={cn('container', styles.page)}>
			<Breadcrumbs />
			<h1>
				<span className='accent'>Юридические</span> документы
			</h1>
			<section className={styles.content}>
				<div className={styles.left}>
					<div
						className={cn(styles.oferta, {
							[styles.accent]: oferta,
						})}
						onClick={() => setOferta(true)}
					>
						<h6>Публичный договор</h6>
						<p>На оказание информационно-консультативных услуг</p>
					</div>

					<div
						className={cn(styles.politico, {
							[styles.accent]: !oferta,
						})}
						onClick={() => setOferta(false)}
					>
						<h6>Политика конфиденциальности</h6>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.contentWrapper}>
						<div
							className={cn(styles.content__text, {
								[styles.active]: oferta,
							})}
						>
							<h2>Договор</h2>
							<p>Текст договора...</p>
						</div>

						<div
							className={cn(styles.content__text, {
								[styles.active]: !oferta,
							})}
						>
							<h2>Политика</h2>
							<p>Текст политики конфиденциальности...</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
