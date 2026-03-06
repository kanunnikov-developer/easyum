import Image from 'next/image';
import styles from './styles.module.css';

export default function Brends() {
	return (
		<section className={styles.brends}>
			<div className={styles.brends__text}>
				<h2>
					Станьте частью команд <span className='accent'>известных {`\n`} it-брендов</span>
				</h2>
				<p>
					Выпускники EasyUM трудоустраиваются в ведущие IT-компании в среднем через 2 месяца после окончания обучения
				</p>
			</div>

			<Image src='/main/brends.svg' width={511} height={213} alt='Бренды' className={styles.img} />
		</section>
	);
}
