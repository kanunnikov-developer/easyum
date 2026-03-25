'use client';

import { useActionState, useEffect, useState } from 'react';
import commonStyles from '../../styles.module.css';
import styles from './PaymentForm.module.css';
import { action, State } from './action';

const initialState: State = {
	fieldErrors: { name: '', phone: '', email: '' },
	success: false,
};

interface Props {
	onClose: () => void;
	city: string | undefined;
	course: string;
	tariff: string;
	price: number | undefined;
	onSuccess: () => void;
}

export default function PaymentForm({ onClose, city, course, tariff, price, onSuccess }: Props) {
	const [selectedPlan, setSelectedPlan] = useState<'full_rf' | 'full_foreign' | 'installment_school' | 'installment_tbank'>('full_rf');
	const [namePay, setNamePay] = useState('');
	const [phonePay, setPhonePay] = useState('');
	const [emailPay, setEmailPay] = useState('');

	const [pdConsent_pay, setPdConsent_pay] = useState(false);
	const [smsConsent_pay, setSmsConsent_pay] = useState(false);
	
	const [state, formAction, isPending] = useActionState(action, initialState);

	useEffect(() => {
		if (state.success) {
			setNamePay('');
			setPhonePay('');
			setEmailPay('');
			onClose();
			onSuccess();
		}
	}, [state.success, onClose, onSuccess]);

	useEffect(() => {
		setPdConsent_pay(false);
		setSmsConsent_pay(false);
	}, [state]);

	const handlePdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPdConsent_pay(e.target.checked);
	};
	const handleSmsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSmsConsent_pay(e.target.checked);
	};

	let paymentMethodString = '';
	if (selectedPlan === 'full_rf') paymentMethodString = 'Полная оплата — Банковской картой РФ';
	if (selectedPlan === 'full_foreign') paymentMethodString = 'Полная оплата (зарубежная карта)';
	if (selectedPlan === 'installment_school') paymentMethodString = 'Рассрочка от школы (есть переплата)';
	if (selectedPlan === 'installment_tbank') paymentMethodString = 'Рассрочка от ТБанк (без переплаты)';

	return (
		<form action={formAction} className={styles.container}>
			<div className={styles.leftColumn}>
				<div className={styles.headerBlock}>
					<h2 className={styles.courseTitle}>
						<span className='accent'>Курс:</span> &ldquo;{course}&rdquo;
					</h2>
					<p className={styles.tariffText}>
						<span className='accent'>Тариф:</span> {tariff}
					</p>
				</div>

				<div className={styles.inputGroup}>
				<div className={commonStyles.input}>
					<input
						type='text'
						name='name'
						placeholder='Ваше имя'
						required
						value={namePay}
						onChange={(e) => setNamePay(e.target.value)}
						className={styles.textInput}
					/>
					{state.fieldErrors?.name && <p className={commonStyles.error}>{state.fieldErrors.name}</p>}
				</div>

				<div className={commonStyles.input}>
					<input
						type='tel'
						name='phone'
						placeholder='Ваш телефон'
						required
						value={phonePay}
						onChange={(e) => setPhonePay(e.target.value)}
						className={styles.textInput}
					/>
					{state.fieldErrors?.phone && <p className={commonStyles.error}>{state.fieldErrors.phone}</p>}
				</div>

				<div className={commonStyles.input}>
					<input
						type='email'
						name='email'
						placeholder='ВашеEmail'
						value={emailPay}
						onChange={(e) => setEmailPay(e.target.value)}
						className={styles.textInput}
					/>
					{state.fieldErrors?.email && <p className={commonStyles.error}>{state.fieldErrors.email}</p>}
				</div>
				</div>

				<input type='hidden' name='city' value={city} />
				<input type='hidden' name='nameForm' value={`Оплата: ${course}`} />
				<input type='hidden' name='tariff' value={tariff} />
				<input type='hidden' name='price' value={price} />
				<input type='hidden' name='paymentMethod' value={paymentMethodString} />

				<div className={styles.consentBlock}>
					<div className={commonStyles.consent}>
						<input
							type='checkbox'
							id='pd-consent-pay'
							name='pd_consent'
							className={commonStyles.customCheckboxInput}
							required
							checked={pdConsent_pay}
							onChange={handlePdChange}
						/>
						<label htmlFor='pd-consent-pay' className={commonStyles.customCheckboxLabel}>
							<div>
								Я даю согласие на обработку моих персональных данных (ФИО, телефон, email) в соответствии с{' '}
								<a
									href='/politika-obrabotki-personalnyh-dannyh'
									target='_blank'
									rel='noopener noreferrer'
									className={commonStyles.policyLink}
								>
									Политикой обработки персональных данных
								</a>
							</div>
						</label>
					</div>

					<div className={commonStyles.sms}>
						<input
							type='checkbox'
							id='sms-consent-pay'
							name='sms_consent'
							className={commonStyles.customCheckboxInput}
							checked={smsConsent_pay}
							onChange={handleSmsChange}
						/>
						<label htmlFor='sms-consent-pay' className={commonStyles.customCheckboxLabel}>
							Согласен(а) на получение информационных и рекламных сообщений (SMS, сообщения в мессенджерах, email) по
							указанному номеру телефона и адресу электронной почты
						</label>
					</div>
				</div>

				<button className={styles.submitButton} disabled={!pdConsent_pay || isPending}>
					{isPending ? 'Отправка...' : 'Оплатить'}
				</button>
			</div>

			<div className={styles.rightColumn}>
				<div className={styles.rightHeader}>
					<h3>Выберете способ оплаты:</h3>
					<button type='button' onClick={onClose} className={styles.closeButton}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
					</button>
				</div>

				<div className={styles.plans}>
					{/* Полная оплата РФ */}
					<label
						className={`${styles.planCard} ${selectedPlan === 'full_rf' ? styles.selected : ''}`}
						onClick={() => setSelectedPlan('full_rf')}
					>
						<div className={styles.radioWrapper}>
							<input type='radio' name='plan' checked={selectedPlan === 'full_rf'} readOnly className={styles.radioInput} />
							<span className={styles.radioCustom}></span>
						</div>
						<div className={styles.planContent}>
							<div className={styles.planTitle}>Полная оплата — Банковской картой РФ</div>
							<div className={styles.planDesc}>
								Моментальный доступ после оплаты
							</div>
						</div>
						<div className={styles.planPriceCol}>
							<div className={styles.planPrice}>{price?.toLocaleString('ru')} ₽</div>
							<div className={styles.badgePopular}>выбирают чаще</div>
						</div>
					</label>

					{/* Полная оплата зарубежная */}
					<label
						className={`${styles.planCard} ${selectedPlan === 'full_foreign' ? styles.selected : ''}`}
						onClick={() => setSelectedPlan('full_foreign')}
					>
						<div className={styles.radioWrapper}>
							<input type='radio' name='plan' checked={selectedPlan === 'full_foreign'} readOnly className={styles.radioInput} />
							<span className={styles.radioCustom}></span>
						</div>
						<div className={styles.planContent}>
							<div className={styles.planTitle}>Полная оплата (зарубежная карта)</div>
							<div className={styles.planDesc}>
								Visa/Mastercard если вы за границей <img src="/icons/visa-master.webp" alt="Visa/Master" style={{height: "16px", marginLeft:"4px", objectFit:"contain"}} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
							</div>
						</div>
						<div className={styles.planPrice}>{price?.toLocaleString('ru')} ₽</div>
					</label>

					{/* Рассрочка от школы */}
					<label
						className={`${styles.planCard} ${selectedPlan === 'installment_school' ? styles.selected : ''}`}
						onClick={() => setSelectedPlan('installment_school')}
					>
						<div className={styles.radioWrapper}>
							<input type='radio' name='plan' checked={selectedPlan === 'installment_school'} readOnly className={styles.radioInput} />
							<span className={styles.radioCustom}></span>
						</div>
						<div className={styles.planContent}>
							<div className={styles.planTitle}>Рассрочка от школы (есть переплата)</div>
							<div className={styles.planDesc}>Мы предоставляем рассрочку на 4 месяца</div>
						</div>
						<div className={styles.planPriceCol}>
							<div className={styles.planPriceStr}>15 990 ₽/мес</div>
							<div className={styles.planSubPrice}>Итого: 95 441 ₽</div>
						</div>
					</label>

					{/* Рассрочка от ТБанка */}
					<label
						className={`${styles.planCard} ${selectedPlan === 'installment_tbank' ? styles.selected : ''}`}
						onClick={() => setSelectedPlan('installment_tbank')}
					>
						<div className={styles.radioWrapper}>
							<input type='radio' name='plan' checked={selectedPlan === 'installment_tbank'} readOnly className={styles.radioInput} />
							<span className={styles.radioCustom}></span>
						</div>
						<div className={styles.planContent}>
							<div className={styles.planTitle}>Рассрочка от ТБанк (без переплаты)</div>
							<div className={styles.planDesc}>
								Выберите удобное количество месяцев
							</div>
						</div>
						<div className={styles.planPriceCol}>
							<div className={styles.planPriceStr}>от 4 590 ₽/мес</div>
						</div>
					</label>
				</div>
			</div>
		</form>
	);
}
