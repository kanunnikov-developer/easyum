import styles from './styles.module.css';
import { usePathname } from 'next/navigation';

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export default function ModalDesctop({ isOpen, onClose }: Props) {
	const pathname = usePathname(); // текущий путь
	if (!isOpen) return null;
	return (
		<div className={styles.overlay} onClick={onClose}>
			<div className={styles.modal} onClick={(e) => e.stopPropagation()}>
				<h2>Выберете город:</h2>
				<div className={styles.gridCity}>
					<div className={styles.column}>
						<div className={styles.sumbolCity}>
							<p>К</p>
							<div className={styles.cities}>
								<a href={`http://krasnodar.localhost:3000${pathname}`}>Краснодар</a>
							</div>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.sumbolCity}>
							<p>M</p>
							<div className={styles.cities}>
								<a href={`http://msc.localhost:3000${pathname}`}>Москва</a>
							</div>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.sumbolCity}>
							<p>Р</p>
							<div className={styles.cities}>
								<a href={`http://rostov.localhost:3000${pathname}`}>Ростов-на-Дону</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
