import Image from 'next/image';
import styles from './styles.module.css';

interface Props {
	company_title: string;
}

export default function Work({ company_title }: Props) {
	return (
		<section className={styles.work}>
			<div className={styles.text}>
				<h2>
					Поможем <span className='accent'>найти работу</span> мечты
				</h2>
				<p>Команда EasyUM готова сделать все возможное, ради Вашего скорейшего трудоустройства.</p>
			</div>
			<div className={styles.grid}>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/work/1.svg' alt='Картинка' width={200} height={200} className={styles.img} />
					</div>
					<p>Оформим резюме и портфолио в наилучшем формате</p>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/work/2.svg' alt='Картинка' width={200} height={200} className={styles.img} />
					</div>
					<p>Подготовим к собеседованию и проработаем вопросы</p>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/work/3.svg' alt='Картинка' width={200} height={200} className={styles.img} />
					</div>
					<p>Резюме лучших студентов отправим компаниям - партнерам</p>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/work/4.svg' alt='Картинка' width={200} height={200} className={styles.img} />
					</div>
					<p>Научим искать вакансии и правильно вести себя на собеседовании</p>
				</div>
			</div>
			<div className={styles.statistics}>
				<div className={styles.statistics__block}>
					<span className={styles.number}>75%</span>
					<div className={styles.statistics__text}>
						<p>
							Выпускников <br />
							находят работу
						</p>
						<span>В течении 2х месяцев после выпуска</span>
					</div>
				</div>
				<div className={styles.statistics__block}>
					<span className={styles.number}>992</span>
					<div className={styles.statistics__text}>
						<p>
							Компаний ждут <br />
							{company_title}
						</p>
						<span>По данным собранным на hh.ru</span>
					</div>
				</div>
			</div>
		</section>
	);
}
