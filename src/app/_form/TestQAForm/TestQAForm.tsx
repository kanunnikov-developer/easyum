'use client';

import styles from '../styles.module.css';

import { useActionState, useEffect, useState } from 'react';
import { action, State } from './action';

const initialState: State = {
	fieldErrors: { name: '', phone: '', email: '' },
	success: false,
};

interface Props {
	city: string | undefined;
}

export default function TestQAForm({ city }: Props) {
	const [pdConsent, setPdConsent] = useState(false);
	const [smsConsent, setSmsConsent] = useState(false);
	const [state, formAction] = useActionState(action, initialState);
	const [url_test, setUrl_test] = useState('');

	const handlePdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPdConsent(e.target.checked);
	};
	const handleSmsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSmsConsent(e.target.checked);
	};

	useEffect(() => {
		setUrl_test(window.location.href);
	}, []);

	useEffect(() => {
		setPdConsent(false);
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

			<div className={styles.input}>
				<input type='email' name='email' placeholder='Ваш email' />
				{state.fieldErrors?.email && <p className={styles.error}>{state.fieldErrors.email}</p>}
			</div>

			<input type='hidden' name='nameForm' value='Форма Тест QA' />
			<input type='hidden' name='city' value={city} />
			<input type='hidden' name='url' value={url_test} />

			<div className={styles.consent}>
				<input
					type='checkbox'
					id='pd-consent'
					name='pd_consent'
					className={styles.customCheckboxInput}
					required
					checked={pdConsent}
					onChange={handlePdChange}
				/>
				<label htmlFor='pd-consent' className={styles.customCheckboxLabel}>
					<div>
						Я даю согласие на обработку моих персональных данных (ФИО, телефон, email) в соответствии с{' '}
						<a
							href='/politika-konfidencialnosti'
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
					name='sms_consent'
					className={styles.customCheckboxInput}
					checked={smsConsent}
					onChange={handleSmsChange}
				/>
				<label htmlFor='sms-consent' className={styles.customCheckboxLabel}>
					Согласен(а) на получение информационных и рекламных сообщений (SMS, сообщения в мессенджерах, email) по
					указанному номеру телефона и адресу электронной почты
				</label>
			</div>

			<button className={styles.submitButton} disabled={!pdConsent}>
				Отправить
			</button>
		</form>
	);
}
