'use client';

import { useFormStatus } from 'react-dom';
import styles from '../styles.module.css';

export function SubmitButton({ disabled }: { disabled: boolean }) {
	const { pending } = useFormStatus();

	return (
		<button className={styles.submitButton} disabled={disabled || pending}>
			{pending ? 'Отправка...' : 'Отправить'}
		</button>
	);
}