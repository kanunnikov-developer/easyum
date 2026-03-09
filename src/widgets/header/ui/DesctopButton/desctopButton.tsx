'use client';
import { useState } from 'react';
import styles from './styles.module.css';
import ModalDesctop from '../Modal/ModalDesctop/ModalDesctop';

interface Props {
	city: string | undefined;
}

export default function DesctopButton({ city }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	return (
		<>
			<button className={styles.button} onClick={() => setIsOpen(true)}>
				{city}
			</button>
			{isOpen && <ModalDesctop isOpen={isOpen} onClose={handleClose} />}
		</>
	);
}
