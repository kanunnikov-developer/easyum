'use client';

import styles from './styles.module.css';

import { useActionState, useEffect, useState } from 'react';
import { action, State } from './action';

const initialState: State = {
	fieldErrors: { name: '', phone: '' },
	success: false,
};

interface Props {
	city: string | undefined;
	onClose: () => void;
	onSuccess: () => void;
}

export default function BronForm({ city, onClose, onSuccess }: Props) {
	const [pdConsent_bron, setPdConsent_bron] = useState(false);
	const [smsConsent_bron, setSmsConsent_bron] = useState(false);
	const [state, formAction, isPending] = useActionState(action, initialState);

	const handlePdChange_bron = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPdConsent_bron(e.target.checked);
	};
	const handleSmsChange_bron = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSmsConsent_bron(e.target.checked);
	};

	useEffect(() => {
		if (state.success) {
			onClose();
			onSuccess();
		}
	}, [state.success, onClose]);

	useEffect(() => {
		setPdConsent_bron(false);
		setSmsConsent_bron(false);
	}, [state]);

	return (
		<form action={formAction} className={styles.form}>
			<div className={styles.input}>
				<input type='text' name='name' placeholder='Ваше имя' required />
				{state.fieldErrors?.name && <p className={styles.error}>{state.fieldErrors.name}</p>}
			</div>

			<div className={styles.input}>
				<input type='tel' name='phone' placeholder='Ваш телефон' required />
				{state.fieldErrors?.phone && <p className={styles.error}>{state.fieldErrors.phone}</p>}
			</div>

			<input type='hidden' name='city' value={city} />
			<input type='hidden' name='nameForm' value='Бронирование скидки 20% с главной страницы' />

			<div className={styles.consent}>
				<input
					type='checkbox'
					id='pd-consent_bron'
					name='pd_consent'
					className={styles.customCheckboxInput}
					required
					checked={pdConsent_bron}
					onChange={handlePdChange_bron}
				/>
				<label htmlFor='pd-consent_bron' className={styles.customCheckboxLabel}>
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
					id='sms-consent_bron'
					name='sms_consent'
					className={styles.customCheckboxInput}
					checked={smsConsent_bron}
					onChange={handleSmsChange_bron}
				/>
				<label htmlFor='sms-consent_bron' className={styles.customCheckboxLabel}>
					Согласен(а) на получение информационных и рекламных сообщений (SMS, сообщения в мессенджерах, email) по
					указанному номеру телефона и адресу электронной почты
				</label>
			</div>

			<button className={styles.submitButton} disabled={!pdConsent_bron || isPending}>
				{isPending ? 'Отправка...' : 'Забронировать место'}
			</button>
		</form>
	);
}
