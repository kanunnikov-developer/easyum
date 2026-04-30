'use client';

import styles from '../../styles.module.css';

import { useActionState, useEffect, useState } from 'react';
import { action, State } from './action';
import cn from 'classnames'

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
	const [url_lesson, setUrl_lesson] = useState('');

	const [nameLesson, setNameLesson] = useState('');
	const [phoneLesson, setPhoneLesson] = useState('');
	const [tgLesson, setTgLesson] = useState('');

	const handlePdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPdConsent(e.target.checked);
	};
	const handleSmsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSmsConsent(e.target.checked);
	};

	useEffect(() => {
		setUrl_lesson(window.location.href);
	}, []);

	useEffect(() => {
		if (state.success) {
			setNameLesson('');
			setPhoneLesson('');
			setTgLesson('');
			onClose();
			onSuccess();
		}
	}, [state.success, onClose, onSuccess]);

	useEffect(() => {
		setPdConsent(false);
		setSmsConsent(false);
	}, [state]);

	return (
		<>
		<form action={formAction} className={styles.form}>
			<div className={styles.input}>
				<input
					type='text'
					name='name'
					placeholder='Ваше имя'
					required
					value={nameLesson}
					onChange={(e) => setNameLesson(e.target.value)}
				/>
				{state.fieldErrors?.name && <p className={styles.error}>{state.fieldErrors.name}</p>}
			</div>

			<div className={styles.input}>
				<input
					type='tel'
					name='phone'
					placeholder='Ваш телефон'
					required
					value={phoneLesson}
					onChange={(e) => setPhoneLesson(e.target.value)}
				/>
				{state.fieldErrors?.phone && <p className={styles.error}>{state.fieldErrors.phone}</p>}
			</div>

			{messanger === 'Telegram' && (
				<div className={styles.input}>
					<input
						type='text'
						name='telegram_nickname'
						placeholder='@никнейм в Telegram'
						required
						value={tgLesson}
						onChange={(e) => setTgLesson(e.target.value)}
					/>
					{state.fieldErrors?.email && <p className={styles.error}>{state.fieldErrors.email}</p>}
				</div>
			)}

			<input type='hidden' name='nameForm' value={`Запрос видео в ${messanger}`} />
			<input type='hidden' name='city' value={city} />
			<input type='hidden' name='course' value={course} />
			<input type='hidden' name='url' value={url_lesson} />

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

			<button className={cn(styles.submitButton, { 
				[styles.submitButton__max]: messanger === 'Max', 
				[styles.submitButton__telegram]: messanger === 'Telegram', 
				[styles.submitButton__whatsapp]: messanger === 'WhatsApp' })} disabled={!pdConsent || isPending}>
				{isPending ? 'Отправка...' : 'Получить видео'}
			</button>
		</form>
		</>
		
	);
}
