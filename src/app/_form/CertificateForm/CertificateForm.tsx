'use client';

import styles from '../styles.module.css';

import { useRef, useState } from 'react';
import { sendForm, ActionResult } from './action';
import PopupThank from '@/widgets/popupThank/popupThank';
import { SubmitButton } from '../MainForm/SbmitButton';

interface Props {
	city: string | undefined;
}

export default function CertificateForm({ city }: Props) {
	const formRef = useRef<HTMLFormElement>(null);

	const [pdConsent, setPdConsent] = useState(false);
	const [smsConsent, setSmsConsent] = useState(false);
	const [isThankOpen, setIsThankOpen] = useState(false);
	const [errors, setErrors] = useState<ActionResult['fieldErrors']>({});

	const handleSubmit = async (formData: FormData) => {
		const res = await sendForm(formData);

		if (!res.success) {
			setErrors(res.fieldErrors || {});
			return;
		}

		setErrors({});
		setIsThankOpen(true);

		formRef.current?.reset();
		setPdConsent(false);
		setSmsConsent(false);
	};

	const handlePdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPdConsent(e.target.checked);
	};
	const handleSmsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSmsConsent(e.target.checked);
	};

	return (
		<>
			<form action={handleSubmit} ref={formRef} className={styles.form}>
			<div className={styles.input}>
				<input type='text' name='name' placeholder='Ваше имя' required />
				{errors?.name && <p className={styles.error}>{errors.name}</p>}
			</div>

			<div className={styles.input}>
				<input type='tel' name='phone' placeholder='Ваш телефон' required />
				{errors?.phone && <p className={styles.error}>{errors.phone}</p>}
			</div>

			<div className={styles.input}>
				<input type='email' name='email' placeholder='Ваш email' />
				{errors?.email && <p className={styles.error}>{errors.email}</p>}
			</div>

			<input type='text' name='comment' placeholder='Сумма или название курса' />
			<input type='hidden' name='nameForm' value='Форма страницы: Получить сертификат' />
			<input type='hidden' name='city' value={city} />

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

				<SubmitButton disabled={!pdConsent} />
			</form>

			<PopupThank
				isOpen={isThankOpen}
				onClose={() => setIsThankOpen(false)}
			/>
		</>
	);
}
