import Image from 'next/image';
import styles from './styles.module.css';

export default function EasyUm() {
	return (
		<section className={styles.easyum}>
			<h2>
				Заянтия <span className='accent'>{`\n`}в EasyUm это:</span>
			</h2>
			<div className={styles.grid}>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/easyum/1.svg' alt='Картинка' width={250} height={163} />
					</div>
					<div className={styles.text}>
						<span>Удобный график</span>
						<p>
							График занятий всегда согласовывается в рамках каждой группы отдельно (после 1го занятия). Это могут быть
							2 будних дня вечером с 19:00 до 21:00, или один день будний вечер и второй — суббота днем.
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/easyum/2.svg' alt='Картинка' width={250} height={163} />
					</div>
					<div className={styles.text}>
						<span>Быстрая коммуникация</span>
						<p>
							Для каждой группы создается телеграм-чат, в котором будет происходить общение между занятиями с группой и
							преподавателем. Средний время ответа преподавателя — 1 час.
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/easyum/3.svg' alt='Картинка' width={250} height={163} />
					</div>
					<div className={styles.text}>
						<span>Трудоустройство</span>
						<p>
							Программа курса построена таким образом, что вы освоите новую профессию с нуля, и будете готовы проходить
							собеседование.
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/easyum/4.svg' alt='Картинка' width={250} height={163} />
					</div>
					<div className={styles.text}>
						<span>Маленькие группы</span>
						<p>Каждая наша группа - это 4-8 учеников. Это позволит максимально качественно и комфортно обучаться.</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/easyum/5.svg' alt='Картинка' width={250} height={163} />
					</div>
					<div className={styles.text}>
						<span>Длительность курса</span>
						<p>
							Вам не придется учиться год и более для получения новой it-профессии. Мы разработали специальные программы
							курсов, позволяющие освоить профессию за самый короткий срок, и найти ту самую работу.
						</p>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/easyum/6.svg' alt='Картинка' width={250} height={163} />
					</div>
					<div className={styles.text}>
						<span>Четкая структура</span>
						<p>
							Курс разделен на модули. Модули на уроки. Каждый урок - это теория, соединенная с практикой. Без длинных
							приветствий и воды.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
