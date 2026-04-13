'use client';

import styles from './styles.module.css';
import { useActionState, useEffect, useState } from 'react';
import { action, State } from './action';
import cn from 'classnames';

const initialState: State = {
	fieldErrors: { name: '', phone: '' },
	success: false,
};

interface Props {
	lesson: string;
}

export default function LessonPost({ lesson }: Props) {
	const [state, formAction, isPending] = useActionState(action, initialState);
	const [pdConsent, setPdConsent] = useState(false);
	const [smsConsent, setSmsConsent] = useState(false);
	const [url, setUrl] = useState('');

	useEffect(() => {
		setUrl(window.location.href);
	}, []);

	if (state.success) {
		return (
			<div className={styles.lesson}>
				<div className={styles.success}>
					<h3>Заявка отправлена!</h3>
					<p>Мы свяжемся с вами в ближайшее время в выбранном мессенджере.</p>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.lesson}>
			<div className={styles.title}>
				<h2>
					Получите запись первого урока по <span>{lesson}</span> бесплатно!
				</h2>
				<p>Отправим запись в удобный мессенджер в течение 10 минут</p>
			</div>

			<form action={formAction} className={styles.form}>
				<input type="hidden" name="lesson" value={lesson} />
				<input type="hidden" name="url" value={url} />

				<div className={styles.inputGroup}>
					<input
						type="text"
						name="name"
						placeholder="Ваше имя"
						required
						disabled={isPending}
					/>
					{state.fieldErrors?.name && <p className={styles.error}>{state.fieldErrors.name}</p>}
				</div>

				<div className={styles.inputGroup}>
					<input
						type="tel"
						name="phone"
						placeholder="Ваш телефон"
						required
						disabled={isPending}
					/>
					{state.fieldErrors?.phone && <p className={styles.error}>{state.fieldErrors.phone}</p>}
				</div>

				<div className={styles.buttons}>
					<button
						type="submit"
						name="messenger"
						value="Max"
						className={cn(styles.submitButton, styles.max)}
						disabled={!pdConsent || isPending}
					>
						{isPending ? 'Отправка...' : 'Отправить в Max'}
					</button>

					<button
						type="submit"
						name="messenger"
						value="WhatsApp"
						className={cn(styles.submitButton, styles.whatsapp)}
						disabled={!pdConsent || isPending}
					>
						{isPending ? 'Отправка...' : 'Отправить в WhatsApp'}
					</button>

					<button
						type="submit"
						name="messenger"
						value="Telegram"
						className={cn(styles.submitButton, styles.telegram)}
						disabled={!pdConsent || isPending}
					>
						{isPending ? 'Отправка...' : 'Отправить в Telegram'}
					</button>
				</div>

				<div className={styles.consent}>
					<label className={styles.checkbox}>
						<input
							type="checkbox"
							name="pd_consent"
							checked={pdConsent}
							onChange={(e) => setPdConsent(e.target.checked)}
							required
						/>
						<span>
							Я даю согласие на обработку моих персональных данных в соответствии с{' '}
							<a href="/politika-obrabotki-personalnyh-dannyh" target="_blank" style={{textDecoration: 'underline'}}>
								Политикой конфиденциальности
							</a>
						</span>
					</label>

					<label className={styles.checkbox}>
						<input
							type="checkbox"
							name="sms_consent"
							checked={smsConsent}
							onChange={(e) => setSmsConsent(e.target.checked)}
						/>
						<span>Согласен(а) на получение информационных сообщений</span>
					</label>
				</div>
			</form>
		</div>
	);
}