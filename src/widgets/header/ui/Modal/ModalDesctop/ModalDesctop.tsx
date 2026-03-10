import { cities } from '@/lib/cities';
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
								<a href={cities[2].href + `${pathname}`}>Краснодар</a>
							</div>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.sumbolCity}>
							<p>M</p>
							<div className={styles.cities}>
								<a href={cities[0].href + `${pathname}`}>Москва</a>
							</div>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.sumbolCity}>
							<p>Р</p>
							<div className={styles.cities}>
								<a href={cities[1].href + `${pathname}`}>Ростов-на-Дону</a>
							</div>
						</div>
					</div>
					<div className={styles.column}>
						<div className={styles.sumbolCity}>
							<p>С</p>
							<div className={styles.cities}>
								<a href={cities[3].href + `${pathname}`}>Санкт-Петербург</a>
								{/* Комментарий */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
