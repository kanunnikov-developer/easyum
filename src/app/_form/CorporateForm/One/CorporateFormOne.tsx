'use client';

import styles from '../../styles.module.css';

import { useActionState, useEffect, useState } from 'react';
import { action } from './action';
import { State } from '../../MainForm/action';

const initialState: State = {
	fieldErrors: { name: '', phone: '', email: '' },
	success: false,
};

interface Props {
	city: string | undefined;
}

export default function CorporateFormOne({ city }: Props) {
	const [pdConsentOne, setPdConsentOne] = useState(false);
	const [smsConsentOne, setSmsConsentOne] = useState(false);
	const [stateOne, formActionOne] = useActionState(action, initialState);

	const handlePdChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPdConsentOne(e.target.checked);
	};
	const handleSmsChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSmsConsentOne(e.target.checked);
	};

	useEffect(() => {
		setPdConsentOne(false);
	}, [stateOne]);

	return (
		<form action={formActionOne} className={styles.form}>
			<div className={styles.input}>
				<input type='text' name='course' placeholder='Курс' required />
				{stateOne.fieldErrors?.name && <p className={styles.error}>{stateOne.fieldErrors.name}</p>}
			</div>

			<div className={styles.input}>
				<input type='tel' name='phone' placeholder='Телефон представителя' required />
				{stateOne.fieldErrors?.phone && <p className={styles.error}>{stateOne.fieldErrors.phone}</p>}
			</div>

			<div className={styles.input}>
				<input type='email' name='email' placeholder='Email представителя' />
				{stateOne.fieldErrors?.email && <p className={styles.error}>{stateOne.fieldErrors.email}</p>}
			</div>

			<input type='text' name='comment' placeholder='Комментарий' />
			<input type='hidden' name='nameForm' value='Форма страницы: Корпоративное обучение' />
			<input type='hidden' name='city' value={city} />

			<div className={styles.consent}>
				<input
					type='checkbox'
					id='pd-consent-one'
					name='pd_consent'
					className={styles.customCheckboxInput}
					required
					checked={pdConsentOne}
					onChange={handlePdChangeOne}
				/>
				<label htmlFor='pd-consent-one' className={styles.customCheckboxLabel}>
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
					id='sms-consent-one'
					name='sms_consent'
					className={styles.customCheckboxInput}
					checked={smsConsentOne}
					onChange={handleSmsChangeOne}
				/>
				<label htmlFor='sms-consent-one' className={styles.customCheckboxLabel}>
					Согласен(а) на получение информационных и рекламных сообщений (SMS, сообщения в мессенджерах, email) по
					указанному номеру телефона и адресу электронной почты
				</label>
			</div>

			<button className={styles.submitButton} disabled={!pdConsentOne}>
				Отправить
			</button>
		</form>
	);
}
