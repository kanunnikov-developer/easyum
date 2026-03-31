'use client';

import styles from '../../styles.module.css';

import { useEffect, useRef, useState } from 'react';
import { sendForm, ActionResult } from './action';
import PopupThank from '@/widgets/popupThank/popupThank';
import { SubmitButton } from '../../MainForm/SbmitButton';

interface Props {
	city: string | undefined;
}

export default function CorporateFormTwo({ city }: Props) {
	const formRef = useRef<HTMLFormElement>(null);

	const [pdConsent, setPdConsent] = useState(false);
	const [smsConsent, setSmsConsent] = useState(false);
	const [isThankOpen, setIsThankOpen] = useState(false);
	const [errors, setErrors] = useState<ActionResult['fieldErrors']>({});

	const [nameTwo, setNameTwo] = useState('');
	const [phoneTwo, setPhoneTwo] = useState('');
	const [emailTwo, setEmailTwo] = useState('');
	const [commentTwo, setCommentTwo] = useState('');
	const [membersTwo, setMembersTwo] = useState('');
	const [url_two, setUrl_two] = useState('');

	const handleSubmit = async (formData: FormData) => {
		const res = await sendForm(formData);

		if (!res.success) {
			setErrors(res.fieldErrors || {});
			setPdConsent(false);
		setSmsConsent(false);
			return;
		}

		setErrors({});
		setIsThankOpen(true);

		formRef.current?.reset();
		setNameTwo('');
		setPhoneTwo('');
		setEmailTwo('');
		setCommentTwo('');
		setMembersTwo('');
		setPdConsent(false);
		setSmsConsent(false);
	};

	useEffect(() => {
			setUrl_two(window.location.href);
		}, []);

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
				<input
					type='text'
					name='name'
					placeholder='Ваше имя'
					required
					value={nameTwo}
					onChange={(e) => setNameTwo(e.target.value)}
				/>
				{errors?.name && <p className={styles.error}>{errors.name}</p>}
			</div>

			<div className={styles.input}>
				<input
					type='tel'
					name='phone'
					placeholder='Ваш телефон'
					required
					value={phoneTwo}
					onChange={(e) => setPhoneTwo(e.target.value)}
				/>
				{errors?.phone && <p className={styles.error}>{errors.phone}</p>}
			</div>

			<div className={styles.input}>
				<input
					type='email'
					name='email'
					placeholder='Ваш email'
					value={emailTwo}
					onChange={(e) => setEmailTwo(e.target.value)}
				/>
				{errors?.email && <p className={styles.error}>{errors.email}</p>}
			</div>

			<input
				type='text'
				name='comment'
				placeholder='Темы и пожелания по курсу'
				value={commentTwo}
				onChange={(e) => setCommentTwo(e.target.value)}
			/>
			<input
				type='text'
				name='members'
				placeholder='Количество участников'
				value={membersTwo}
				onChange={(e) => setMembersTwo(e.target.value)}
			/>
			<input type='hidden' name='nameForm' value='Форма страницы: Корпоративное обучение' />
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
