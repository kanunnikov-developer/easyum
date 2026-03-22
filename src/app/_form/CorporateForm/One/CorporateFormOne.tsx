'use client';

import styles from '../../styles.module.css';

import { useRef, useState } from 'react';
import { sendForm, ActionResult } from './action';
import PopupThank from '@/widgets/popupThank/popupThank';
import { SubmitButton } from '../../MainForm/SbmitButton';

interface Props {
	city: string | undefined;
}

export default function CorporateFormOne({ city }: Props) {
	const formRef = useRef<HTMLFormElement>(null);

	const [pdConsentOne, setPdConsentOne] = useState(false);
	const [smsConsentOne, setSmsConsentOne] = useState(false);
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
		setPdConsentOne(false);
		setSmsConsentOne(false);
	};

	const handlePdChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPdConsentOne(e.target.checked);
	};
	const handleSmsChangeOne = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSmsConsentOne(e.target.checked);
	};

	return (
		<>
			<form action={handleSubmit} ref={formRef} className={styles.form}>
			<div className={styles.input}>
				<input type='text' name='course' placeholder='Курс' required />
				{errors?.name && <p className={styles.error}>{errors.name}</p>}
			</div>

			<div className={styles.input}>
				<input type='tel' name='phone' placeholder='Телефон представителя' required />
				{errors?.phone && <p className={styles.error}>{errors.phone}</p>}
			</div>

			<div className={styles.input}>
				<input type='email' name='email' placeholder='Email представителя' />
				{errors?.email && <p className={styles.error}>{errors.email}</p>}
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

				<SubmitButton disabled={!pdConsentOne} />
			</form>

			<PopupThank
				isOpen={isThankOpen}
				onClose={() => setIsThankOpen(false)}
			/>
		</>
	);
}
