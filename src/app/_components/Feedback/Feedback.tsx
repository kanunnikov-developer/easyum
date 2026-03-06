import MainForm from '@/app/_form/MainForm/MainForm';
import styles from './styles.module.css';

export default function Feedback() {
	return (
		<section className={styles.feedback}>
			<div className={styles.feedback__text}>
				<h2>Не знаете, какое направление выбрать?</h2>
				<p>Оставьте заявку на бесплатную консультацию {`\n`} и мы поможем сделать правильный выбор</p>
				<img src='/main/formImage.svg' alt='Девушка сидит на книгах и читает' className={styles.image} />
			</div>
			<div className={styles.feedback__form}>
				<MainForm />
			</div>
		</section>
	);
}
