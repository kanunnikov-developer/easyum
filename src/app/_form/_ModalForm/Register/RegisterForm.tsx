'use client';

import styles from '../../styles.module.css';

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

export default function RegisterForm({ city, course, tariff, price, onSuccess, onClose }: Props) {
	const [pdConsent_register, setPdConsent_register] = useState(false);
	const [smsConsent_register, setSmsConsent_register] = useState(false);
	const [state, formAction, isPending] = useActionState(action, initialState);

	const handlePdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPdConsent_register(e.target.checked);
	};
	const handleSmsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSmsConsent_register(e.target.checked);
	};

	useEffect(() => {
		if (state.success) {
			onClose();
			onSuccess();
		}
	}, [state.success, onClose]);

	useEffect(() => {
		setPdConsent_register(false);
		setSmsConsent_register(false);
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

			<input type='hidden' name='city' value={city} />
			<input type='hidden' name='nameForm' value={`Заявка на курс: ${course}`} />
			<input type='hidden' name='tariff' value={tariff} />
			<input type='hidden' name='price' value={price} />

			<div className={styles.consent}>
				<input
					type='checkbox'
					id='pd-consent'
					name='pd_consent'
					className={styles.customCheckboxInput}
					required
					checked={pdConsent_register}
					onChange={handlePdChange}
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
					name='sms_consent'
					className={styles.customCheckboxInput}
					checked={smsConsent_register}
					onChange={handleSmsChange}
				/>
				<label htmlFor='sms-consent' className={styles.customCheckboxLabel}>
					Согласен(а) на получение информационных и рекламных сообщений (SMS, сообщения в мессенджерах, email) по
					указанному номеру телефона и адресу электронной почты
				</label>
			</div>

			<button className={styles.submitButton} disabled={!pdConsent_register || isPending}>
				{isPending ? 'Отправка...' : 'Отправить'}
			</button>
		</form>
	);
}
