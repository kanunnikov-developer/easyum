import Link from 'next/link';
import styles from './not-found.module.css'; // можешь создать свои стили

export default function NotFound() {
	return (
		<div className={styles.notFound}>
			<div className={styles.content}>
				<h1>404</h1>
				<h2>Страница не найдена</h2>
				<p>К сожалению, страница, которую вы ищете, не существует или была перемещена.</p>

				<Link href='/' className={styles.homeButton}>
					Вернуться на главную
				</Link>
			</div>
		</div>
	);
}
