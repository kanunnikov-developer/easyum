'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import cn from 'classnames';
import { useState } from 'react';
import ModalForm from '@/app/_form/_ModalForm/GetLesson/ModalForm';
import PopupThank from '@/widgets/popupThank/popupThank';

interface Props {
	city: string | undefined;
	course: string;
}

export default function ButtonGroup({ city, course }: Props) {
	const [isOpenTelegram, setIsOpenTelegram] = useState(false);
	const [isOpenWhatsApp, setIsOpenWhatsApp] = useState(false);
	const [isThankOpen, setIsThankOpen] = useState(false);


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
						<Image src='/courses/ui/getLesson/whats.svg' alt='icon Whatsapp' width={27} height={27} />
					</div>
					WhatsApp
				</button>
			</div>
			{isOpenTelegram && <Modal onClose={() => setIsOpenTelegram(false)} form={'telegram'} city={city} onSuccess={() => setIsThankOpen(true)} course={course}/>}
			{isOpenWhatsApp && <Modal onClose={() => setIsOpenWhatsApp(false)} form={'whatsapp'} city={city} onSuccess={() => setIsThankOpen(true)} course={course}/>}
			{isThankOpen && <PopupThank onClose={() => setIsThankOpen(false)} isOpen={isThankOpen}/>}
		</>
	);
}

function Modal({
	onClose,
	onSuccess,
	form,
	city,
	course,
}: {
	onClose: () => void;
	onSuccess: () => void;
	form: 'telegram' | 'whatsapp';
	city: string | undefined;
	course: string;
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
								<ModalForm city={city} messanger='Telegram' onClose={onClose} onSuccess={onSuccess} course={course}/>
							) : (
								<ModalForm city={city} messanger='WhatsApp' onClose={onClose} onSuccess={onSuccess} course={course}/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
