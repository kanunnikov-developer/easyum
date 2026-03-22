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
	messanger: string;
	onClose: () => void;
	onSuccess: () => void;
	course: string;
}

export default function ModalForm({ city, messanger, onClose, onSuccess, course }: Props) {
	const [pdConsent, setPdConsent] = useState(false);
	const [smsConsent, setSmsConsent] = useState(false);
	const [state, formAction, isPending] = useActionState(action, initialState);

	const handlePdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPdConsent(e.target.checked);
	};
	const handleSmsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSmsConsent(e.target.checked);
	};

	useEffect(() => {
		if (state.success) {
			onClose();
			onSuccess();
		}
	}, [state.success, onClose]);

	useEffect(() => {
		setPdConsent(false);
		setSmsConsent(false);
	}, [state]);

	return (
		<>
		<form action={formAction} className={styles.form}>
			<div className={styles.input}>
				<input type='text' name='name' placeholder='Ваше имя' required />
				{state.fieldErrors?.name && <p className={styles.error}>{state.fieldErrors.name}</p>}
			</div>

			<div className={styles.input}>
				<input type='tel' name='phone' placeholder='Ваш телефон' required />
				{state.fieldErrors?.phone && <p className={styles.error}>{state.fieldErrors.phone}</p>}
			</div>

			{messanger === 'telegram' && (
				<div className={styles.input}>
					<input type='text' name='telegram_nickname' placeholder='@никнейм в Telegram' required />
					{state.fieldErrors?.email && <p className={styles.error}>{state.fieldErrors.email}</p>}
				</div>
			)}

			<input type='hidden' name='nameForm' value={`Запрос видео в ${messanger}`} />
			<input type='hidden' name='city' value={city} />
			<input type='hidden' name='course' value={course} />

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
					checked={smsConsent}
					onChange={handleSmsChange}
				/>
				<label htmlFor='sms-consent' className={styles.customCheckboxLabel}>
					Согласен(а) на получение информационных и рекламных сообщений (SMS, сообщения в мессенджерах, email) по
					указанному номеру телефона и адресу электронной почты
				</label>
			</div>

			<button className={styles.submitButton} disabled={!pdConsent || isPending}>
				{isPending ? 'Отправка...' : 'Отправить'}
			</button>
		</form>
		</>
		
	);
}
