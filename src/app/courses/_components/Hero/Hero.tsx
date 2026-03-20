import getRegion from '@/lib/getRegion';
import styles from './styles.module.css';
import { Suspense } from 'react';
import cn from 'classnames';

interface Props {
	title: string;
	description_one: string;
	description_two: string;
	img: string;
	date: string;
	duration: string;
}

export default function Hero({ title, description_one, description_two, img, date, duration }: Props) {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__row}>
				<div className={styles.hero__text}>
					<h1
						className={cn(
							title === 'QA Automation Тестирование (Java)' ||
								title === 'QA Automation Тестирование (Pyhon)' ||
								title === 'Графический Дизайн' ||
								title === 'Продвижение в социальных сетях' ||
								title === 'Реклама в социальных сетях'
								? styles.smallH1
								: '',
						)}
					>
						Курс <span className='accent'>{title}</span>
					</h1>
					<p>
						{description_one} <br />
						<br />
						{description_two}
					</p>
				</div>

				<div className={styles.image}>
					<img src={`/courses/${img}`} alt='Главная картинка' className={styles.img} />
				</div>

				<div className={styles.hero__information}>
					<div className={styles.hero__group_button}>
						<a href='#tariffs' className={cn(styles.hero__button, styles.hero__accent)}>
							Выбрать тариф
						</a>
						<a href='#program' className={styles.hero__button}>
							Программа курса
						</a>
					</div>

					<div className={styles.hero__information_text}>
						<div className={styles.hero__date}>
							<p>Дата старта</p>
							<span>{date}</span>
						</div>

						<div className={styles.hero__information_block}>
							<div className={styles.hero__duration}>
								<p>Длительность</p>
								<span>{duration}</span>
							</div>

							<div className={styles.hero__city}>
								<p>Город</p>
								<Suspense fallback={<span>Москва</span>}>
									<WrapperCity />
								</Suspense>
							</div>
						</div>

						<div className={styles.hero__format}>
							<p>Формат обучения</p>
							<span>Онлайн / Видео-курс / Очно</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

async function WrapperCity() {
	const region = await getRegion();
	return <span>{region?.city}</span>;
}
