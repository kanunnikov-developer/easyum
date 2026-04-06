'use client';

import { useActionState, useEffect, useState } from 'react';
import commonStyles from '../../styles.module.css';
import styles from './PaymentForm.module.css';
import { action, State } from './action';

const initialState: State = {
	fieldErrors: { name: '', phone: '', email: '' },
	success: false,
	paymentUrl: undefined,
	error: undefined,
};

interface Props {
	onClose: () => void;
	city: string | undefined;
	course: string;
	tariff: string;
	price: number | undefined;
	installmentMonthly: number;
	onSuccess: () => void;
	mounth: number;
}

export default function PaymentForm({
	onClose,
	city,
	course,
	tariff,
	price,
	onSuccess,
	installmentMonthly,
	mounth,
}: Props) {
	const [selectedPlan, setSelectedPlan] = useState<
		'full_rf' | 'full_foreign' | 'installment_school' | 'installment_tbank'
	>('full_rf');
	const [tbankMonths, setTbankMonths] = useState(12);
	const [namePay, setNamePay] = useState('');
	const [phonePay, setPhonePay] = useState('');
	const [emailPay, setEmailPay] = useState('');
	const [url_pay, setUrl_pay] = useState('');

	const [pdConsent_pay, setPdConsent_pay] = useState(false);
	const [smsConsent_pay, setSmsConsent_pay] = useState(false);

	const [state, formAction, isPending] = useActionState(action, initialState);

	useEffect(() => {
		setUrl_pay(window.location.href);
	}, []);

	useEffect(() => {
		if (state.success && state.paymentUrl) {
			// Небольшая задержка помогает в некоторых случаях (особенно в модальном окне)
			const timer = setTimeout(() => {
				window.location.href = state.paymentUrl!;
			}, 100);

			return () => clearTimeout(timer);
		}

		// Если просто успех (например, бронь или рассрочка от школы) — старое поведение
		if (state.success && !state.paymentUrl) {
			setNamePay('');
			setPhonePay('');
			setEmailPay('');
			onClose();
			onSuccess();
		}
	}, [state.success, state.paymentUrl, onClose, onSuccess]);

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

	const schoolInstallmentMonthlyPayment = installmentMonthly;
	const schoolInstallmentTotal = schoolInstallmentMonthlyPayment * mounth;

	const getMonthsLabel = (m: number) => {
		if (m % 10 === 1 && m % 100 !== 11) return 'месяц';
		if ([2, 3, 4].includes(m % 10) && ![12, 13, 14].includes(m % 100)) return 'месяца';
		return 'месяцев';
	};

	return (
		<>
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

					<input type='hidden' name='course' value={course} />
					<input type='hidden' name='city' value={city} />
					<input type='hidden' name='tariff' value={tariff} />
					<input type='hidden' name='price' value={price} />
					<input type='hidden' name='url' value={url_pay} />
					<input type='hidden' name='methodPay' value={paymentMethodString} />
					{selectedPlan === 'installment_tbank' && <input type='hidden' name='tbankMonths' value={tbankMonths} />}

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
								<div className={styles.pdBlock}>
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

						<div className={styles.smsBlock}>
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
									Согласен(а) на получение информационных и рекламных сообщений (SMS, сообщения в мессенджерах, email)
									по указанному номеру телефона и адресу электронной почты
								</label>
							</div>
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
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M18 6L6 18M6 6L18 18'
									stroke='#3b82f6'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
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
								<input
									type='radio'
									name='plan'
									checked={selectedPlan === 'full_rf'}
									readOnly
									className={styles.radioInput}
								/>
								<span className={styles.radioCustom}></span>
							</div>
							<div className={styles.planContent}>
								<div className={styles.planTitle}>Полная оплата — Банковской картой РФ</div>
								<div className={styles.planDesc}>
									Моментальный доступ после оплаты <img src='/icons/payment/mir.svg' alt='mir' />
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
								<input
									type='radio'
									name='plan'
									checked={selectedPlan === 'full_foreign'}
									readOnly
									className={styles.radioInput}
								/>
								<span className={styles.radioCustom}></span>
							</div>
							<div className={styles.planContent}>
								<div className={styles.planTitle}>Полная оплата (зарубежная карта)</div>
								<div className={styles.planDesc}>
									Visa/Mastercard если вы за границей <img src='/icons/payment/visa.svg' alt='visa' />{' '}
									<img src='/icons/payment/mastercard.svg' alt='mastercard' />
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
								<input
									type='radio'
									name='plan'
									checked={selectedPlan === 'installment_school'}
									readOnly
									className={styles.radioInput}
								/>
								<span className={styles.radioCustom}></span>
							</div>
							<div className={styles.planContent}>
								<div className={styles.planTitle}>Рассрочка от школы (есть переплата)</div>
								<div className={styles.planDesc}>
									Мы предоставляем рассрочку на {mounth} {getMonthsLabel(mounth)}
								</div>
							</div>
							<div className={styles.planPriceCol}>
								<div className={styles.planPriceStr}>{schoolInstallmentMonthlyPayment.toLocaleString('ru')} ₽/мес</div>
								<input type='hidden' name='schoolInstallmentMonthlyPayment' value={schoolInstallmentMonthlyPayment} />
								<div className={styles.planSubPrice}>Итого: {schoolInstallmentTotal.toLocaleString('ru')} ₽</div>
							</div>
						</label>

						<button className={styles.submitButtonMobile} disabled={!pdConsent_pay || isPending}>
							{isPending ? 'Отправка...' : 'Оплатить'}
						</button>

						{/* Рассрочка от ТБанка */}
						{/* <label
						className={`${styles.planCard} ${styles.tbankCardMain} ${selectedPlan === 'installment_tbank' ? styles.selected : ''}`}
						onClick={() => setSelectedPlan('installment_tbank')}
					>
						<div className={styles.tbankTopRow}>
							<div className={styles.radioWrapper}>
								<input
									type='radio'
									name='plan'
									checked={selectedPlan === 'installment_tbank'}
									readOnly
									className={styles.radioInput}
								/>
								<span className={styles.radioCustom}></span>
							</div>
							<div className={styles.planContent}>
								<div className={styles.planTitle}>Рассрочка от ТБанк (без переплаты)</div>
								<div className={styles.planDesc}>
									Выберите удобное количество месяцев{' '}
									<img src='/icons/payment/tbank.svg' alt='tbank' className={styles.tbank} />
								</div>
							</div>
							<div className={styles.planPriceCol}>
								<div className={styles.planPriceStr}>
									от {price ? Math.round(price / 24).toLocaleString('ru') : 0} ₽/мес
								</div>
							</div>
						</div>

						{selectedPlan === 'installment_tbank' && (
							<div className={styles.tbankExpanded}>
								<div className={styles.tbankExpandedHeader}>
									<span className={styles.tbankExpandedTitle}>
										Рассрочка на <span className={styles.tbankExpandedBlue}>{tbankMonths} мес.</span>
									</span>
									<span className={styles.tbankExpandedPrice}>
										Платеж:{' '}
										<span className={styles.tbankExpandedBlue}>
											{price ? Math.round(price / tbankMonths).toLocaleString('ru') : 0} ₽
										</span>
										/мес
									</span>
								</div>
								<div className={styles.sliderWrapper}>
									<input
										type='range'
										min='3'
										max='24'
										step='1'
										value={tbankMonths}
										onChange={(e) => setTbankMonths(Number(e.target.value))}
										className={styles.slider}
										style={{ backgroundSize: `${((tbankMonths - 3) * 100) / 21}% 100%` }}
									/>
								</div>
								<div className={styles.sliderLabels}>
									<span>3 месяца</span>
									<span>24 месяца</span>
								</div>
							</div>
						)}
					</label> */}
					</div>
				</div>
			</form>
			{state.error && (
				<div className={styles.errorServer}>
					<p>{state.error}</p>
					<a href='https://t.me/+79262290485' target='_blank' className={styles.buttonServerSupport}>
						Напишите в поддержку
					</a>
				</div>
			)}
		</>
	);
}
