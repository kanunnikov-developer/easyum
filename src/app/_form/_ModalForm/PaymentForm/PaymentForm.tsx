'use client';

import { useState } from 'react';
import styles from './PaymentForm.module.css';

interface Props {
	onClose: () => void;
	city: string | undefined;
	course: string;
	tariff: string;
	price: string | undefined;
	onSuccess: () => void;
}

export default function PaymentForm({ onClose, city, course, tariff, price, onSuccess }: Props) {
	const [selectedPlan, setSelectedPlan] = useState<'full_rf' | 'full_foreign' | 'installment' | 'booking'>('full_rf');
	const [months, setMonths] = useState(6);

	return (
		<div className={styles.container}>
			<div className={styles.plans}>
				{/* Полная оплата РФ */}
				<label
					className={`${styles.planCard} ${selectedPlan === 'full_rf' ? styles.selected : ''}`}
					onClick={() => setSelectedPlan('full_rf')}
				>
					<input type='radio' name='plan' checked={selectedPlan === 'full_rf'} readOnly />
					<div className={styles.planContent}>
						<div className={styles.planTitle}>Полная оплата — Банковской картой РФ</div>
						<div className={styles.planDesc}>Моментальный доступ после оплаты</div>
					</div>
					<div className={styles.planPrice}>{price} ₽</div>
				</label>

				{/* Полная оплата зарубежная */}
				<label
					className={`${styles.planCard} ${selectedPlan === 'full_foreign' ? styles.selected : ''}`}
					onClick={() => setSelectedPlan('full_foreign')}
				>
					<input type='radio' name='plan' checked={selectedPlan === 'full_foreign'} readOnly />
					<div className={styles.planContent}>
						<div className={styles.planTitle}>Полная оплата (зарубежная карта)</div>
						<div className={styles.planDesc}>Apple Pay, Google Pay, Visa/Mastercard зарубежные</div>
					</div>
					<div className={styles.planPrice}>{price} ₽</div>
				</label>

				{/* Рассрочка */}
				<label
					className={`${styles.planCard} ${selectedPlan === 'installment' ? styles.selected : ''}`}
					onClick={() => setSelectedPlan('installment')}
				>
					<input type='radio' name='plan' checked={selectedPlan === 'installment'} readOnly />
					<div className={styles.planContent}>
						<div className={styles.planTitle}>Рассрочка от школы (без переплат)</div>
						<div className={styles.planDesc}>Выберите удобное количество месяцев</div>

						{selectedPlan === 'installment' && (
							<div className={styles.installmentBlock}>
								<div className={styles.sliderLabel}>
									<span>Количество месяцев</span>
									<span className={styles.monthsCount}>{months} месяцев</span>
								</div>

								<input
									type='range'
									min='3'
									max='12'
									step='1'
									value={months}
									onChange={(e) => setMonths(Number(e.target.value))}
									className={styles.slider}
								/>

								<div className={styles.sliderValues}>
									<span>3 мес.</span>
									<span>12 мес.</span>
								</div>

								<div className={styles.monthlyResult}>
									<div className={styles.smallText}>в месяц</div>
									<div className={styles.totalInfo}>Итого: ₽</div>
								</div>
							</div>
						)}
					</div>
				</label>

				{/* Бронь места */}
				<label
					className={`${styles.planCard} ${selectedPlan === 'booking' ? styles.selected : ''}`}
					onClick={() => setSelectedPlan('booking')}
				>
					<input type='radio' name='plan' checked={selectedPlan === 'booking'} readOnly />
					<div className={styles.planContent}>
						<div className={styles.planTitle}>Бронь места — 2 000 ₽</div>
						<div className={styles.planDesc}>Фиксируем место. Остаток доплатите позже</div>
					</div>
					<div className={styles.planPrice}>2 000 ₽</div>
				</label>
			</div>

			<button className={styles.payButton}>{selectedPlan === 'booking' ? 'Забронировать место' : 'Оплатить'}</button>

			<p className={styles.footerText}>Безопасная оплата • Поддержка 24/7</p>
		</div>
	);
}
