import BronForm from '@/app/_form/_ModalForm/BronForm/BronForm';
import styles from './styles.module.css';
import { sale } from '@/app/courses/startCourses.info';

interface Props {
	onClose: () => void;
	city: string | undefined;
	onSuccess: () => void;
}

export default function Modal({ onClose, city, onSuccess }: Props) {
	return (	
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<div className={styles.text}>
					<h2>
						<span className='accent'>{sale.bronText}</span>
					</h2>
					<p>
						Начните новый год с умом — освойте востребованный навык в школе EasyUM. {`\n\n`} Не упустите выгодный старт!
						Забронируйте место по специальной цене
					</p>
				</div>
				<div className={styles.form}>
					<p className={styles.modal__description}>Оставьте заявку, и мы закрепим за вами место</p>
					<BronForm city={city} onClose={onClose} onSuccess={onSuccess} />
				</div>
			</div>
		</div>
	);
}
