import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
	mounth: string;
	programs: string;
}

export default function Duration({ mounth, programs }: Props) {
	return (
		<section className={styles.duration}>
			<h2>
				Почему ваш <span className='accent'>курс {mounth}</span>, а у других 1-2 года?
			</h2>
			<p className={styles.duration__desc}>
				В отличие от школ с программой на 1-2 года, мы даем те знания и навыки, которые помогут трудоустроиться. Всё
				остальное вы без проблем доучите в процессе работы, когда будете выполнять задачи. <br />
				<br />С курсами EasyUM вы экономите время и деньги, и осваиваете самое необходимое для конкретной цели на
				сегодня – работа на должности <b>{programs}</b> в хорошей компании.
			</p>
			<div className={styles.profit}>
				<div className={styles.image}>
					<Image src='/courses/ui/girl.svg' alt='Картинка' width={370} height={450} />
				</div>
				<div className={styles.profit__text}>
					<p className={styles.title}>
						1-2 года – это так долго и далеко не у каждого хватит мотивации или возможности продолжать активно учиться.
						Результаты на лицо:
					</p>
					<div className={styles.statistics}>
						<div className={styles.statistics__item}>
							<p>Длительность {`\n`} 1-2 года</p>
							<div className={styles.statistics__item__desc}>
								<span className={styles.procent}>15%</span>
								<span className={styles.description}>студентов доходят {`\n`}до конца курса</span>
							</div>
						</div>
						<div className={styles.statistics__item}>
							<p>Длительность {`\n`} 5-8 месяцев</p>
							<div className={styles.statistics__item__desc}>
								<span className={styles.procent}>75%</span>
								<span className={styles.description}>наших студентов доходят до конца курса и находят работу</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
