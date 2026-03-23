'use client';

import styles from './styles.module.css';

import { useActionState, useEffect, useState } from 'react';
import { action, State } from './action';

const initialState: State = {
	fieldErrors: { name: '', phone: '', email: '' },
	success: false,
};

interface Props {
	city: string | undefined;
	course: string;
	tariff: string;
	price: string | undefined;
	onSuccess: () => void;	
	onClose: () => void;
}

export default function ModalFormTbank({ city, course, tariff, price, onSuccess, onClose }: Props) {
	const [pdConsent_tBank, setPdConsent_tBank] = useState(false);
	const [smsConsent_tBank, setSmsConsent_tBank] = useState(false);
	const [state, formAction, isPending] = useActionState(action, initialState);
	const [months, setMonths] = useState(3); // начальное значение - 12 месяцев

	const [nameTbank, setNameTbank] = useState('');
	const [phoneTbank, setPhoneTbank] = useState('');
	const [emailTbank, setEmailTbank] = useState('');

	const min = 3;
	const max = 24;

	const progress = ((months - min) / (max - min)) * 100;

	const handlePdChangeTbank = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPdConsent_tBank(e.target.checked);
	};
	const handleSmsChangeTbank = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSmsConsent_tBank(e.target.checked);
	};

	const handleMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMonths(parseInt(e.target.value));
	};

	useEffect(() => {
		if (state.success) {
			setNameTbank('');
			setPhoneTbank('');
			setEmailTbank('');
			setMonths(3);
			onClose();
			onSuccess();
		}
	}, [state.success, onClose, onSuccess]);

	useEffect(() => {
		setPdConsent_tBank(false);
		setSmsConsent_tBank(false);
	}, [state]);

	function tinkoff(price: string | undefined, mounth: number) {
		if (!price) {
			return '0';
		}

		// Удаляем пробелы из строки и преобразуем в число
		const numericPrice = parseFloat(price.replace(/\s/g, ''));

		// Проверяем, что получилось корректное число
		if (isNaN(numericPrice)) {
			return '0';
		}

		const plateg = Math.ceil(numericPrice / mounth);

		const formattedPlateg = plateg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

		return formattedPlateg;
	}

	return (
		<form action={formAction} className={styles.form}>
			{/* Блок с ползунком для выбора месяцев */}
			<div className={styles.monthsSliderWrapper}>
				<label className={styles.monthsLabel}>
					Выберите кол-во месяцев: <span className={styles.monthsValue}>{months} мес.</span>
				</label>

				<div className={styles.sliderWrapper}>
					<input
						type='range'
						name='months'
						min={min}
						max={max}
						value={months}
						onChange={handleMonthsChange}
						className={styles.rangeInput}
						style={{
							background: `linear-gradient(to right, #0066ff ${progress}%, #fff ${progress}%)`,
						}}
					/>
				</div>

				<div className={styles.rangeLabels}>
					<span>{min} месяца</span>
					<span>{max} месяца</span>
				</div>

				<div className={styles.pay_of}>
					Платеж:{' '}
					<b>
						<span className='accent'>{tinkoff(price, months)} рублей</span>
					</b>{' '}
					в месяц
				</div>
			</div>

			<div className={styles.input}>
				<input
					type='text'
					name='name'
					placeholder='Ваше имя'
					required
					value={nameTbank}
					onChange={(e) => setNameTbank(e.target.value)}
				/>
				{state.fieldErrors?.name && <p className={styles.error}>{state.fieldErrors.name}</p>}
			</div>

			<div className={styles.input}>
				<input
					type='tel'
					name='phone'
					placeholder='Ваш телефон'
					required
					value={phoneTbank}
					onChange={(e) => setPhoneTbank(e.target.value)}
				/>
				{state.fieldErrors?.phone && <p className={styles.error}>{state.fieldErrors.phone}</p>}
			</div>

			<div className={styles.input}>
				<input
					type='email'
					name='email'
					placeholder='Ваш Email'
					required
					value={emailTbank}
					onChange={(e) => setEmailTbank(e.target.value)}
				/>
				{state.fieldErrors?.email && <p className={styles.error}>{state.fieldErrors.email}</p>}
			</div>

			<input type='hidden' name='city' value={city} />
			<input type='hidden' name='nameForm' value='Заявка на рассрочку' />
			<input type='hidden' name='course' value={course} />
			<input type='hidden' name='tariff' value={tariff} />
			<input type='hidden' name='price' value={price} />
			<input type='hidden' name='plateg' value={tinkoff(price, months)} />

			<div className={styles.consent}>
				<input
					type='checkbox'
					id='pd-consent'
					name='pd_consent_tBank'
					className={styles.customCheckboxInput}
					required
					checked={pdConsent_tBank}
					onChange={handlePdChangeTbank}
				/>
				<label htmlFor='pd-consent' className={styles.customCheckboxLabel}>
					<div>
						Я даю согласие на обработку моих персональных данных (ФИО, телефон, email) в соответствии с{' '}
						<a
							href='/politika-obrabotki-personalnyh-dannyh'
							target='_blank'
							rel='noopener noreferrer'
							className={styles.policyLink}
						>
							Политикой обработки персональных данных
						</a>
					</div>
				</label>
			</div>

			<div className={styles.sms}>
				<input
					type='checkbox'
					id='sms-consent'
					name='sms_consent_tBank'
					className={styles.customCheckboxInput}
					checked={smsConsent_tBank}
					onChange={handleSmsChangeTbank}
				/>
				<label htmlFor='sms-consent' className={styles.customCheckboxLabel}>
					Согласен(а) на получение информационных и рекламных сообщений (SMS, сообщения в мессенджерах, email) по
					указанному номеру телефона и адресу электронной почты
				</label>
			</div>

			<button className={styles.submitButton} disabled={!pdConsent_tBank || isPending}>
				{isPending ? 'Отправка...' : 'Отправить'}
			</button>
		</form>
	);
}
