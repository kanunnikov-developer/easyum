'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import cn from 'classnames';
import { useState } from 'react';
import ModalForm from '@/app/_form/_ModalForm/GetLesson/ModalForm';

interface Props {
	city: string | undefined;
}

export default function ButtonGroup({ city }: Props) {
	const [isOpenTelegram, setIsOpenTelegram] = useState(false);
	const [isOpenWhatsApp, setIsOpenWhatsApp] = useState(false);

	return (
		<>
			<div className={styles.getLesson__buttons}>
				<button className={cn(styles.button, styles.button__telegram)} onClick={() => setIsOpenTelegram(true)}>
					<div className={styles.button__image}>
						<Image src='/courses/ui/getLesson/telegram.svg' alt='icon Telegram' width={27} height={27} />
					</div>
					Telegram
				</button>
				<button className={cn(styles.button, styles.button__whatsapp)} onClick={() => setIsOpenWhatsApp(true)}>
					<div className={styles.button__image}>
						<Image src='/courses/ui/getLesson/whatsapp.svg' alt='icon Whatsapp' width={27} height={27} />
					</div>
					WhatsApp
				</button>
			</div>
			{isOpenTelegram && <Modal onClose={() => setIsOpenTelegram(false)} form={'telegram'} city={city} />}
			{isOpenWhatsApp && <Modal onClose={() => setIsOpenWhatsApp(false)} form={'whatsapp'} city={city} />}
		</>
	);
}

function Modal({
	onClose,
	form,
	city,
}: {
	onClose: () => void;
	form: 'telegram' | 'whatsapp';
	city: string | undefined;
}) {
	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.modal__row}>
					<div className={styles.modal__text}>
						<h2>
							<span className='accent'>Получите доступ</span> {`\n`}к первому уроку {`\n`}уже сейчас
						</h2>
						<p>
							Вы получите запись первого урока курса совершенно бесплатно. Видео будет отправлено Вам в{' '}
							{form === 'telegram' ? 'Telegram' : 'WhatsApp'} в течение 5 минут!
						</p>
					</div>
					<div className={styles.modal__form}>
						<p>Заполните форму и мы направим видео</p>
						<div className={styles.form}>
							{form === 'telegram' ? (
								<ModalForm city={city} messanger='telegram' />
							) : (
								<ModalForm city={city} messanger='WhatsApp' />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
