import getRegion from '@/lib/getRegion';
import styles from './styles.module.css';
import Image from 'next/image';
import { Suspense } from 'react';

export default function FormatLearning() {
	return (
		<section className={styles.format}>
			<div className={styles.text}>
				<h2>
					Выберете <span className='accent'>{`\n`}удобный формат</span>
				</h2>
				<p>
					Вы можете обучаться в онлайн-группе, или пройти видео-курс с разборами домашних заданий, или обучаться очно в
					одном из 77 городов России.
				</p>
			</div>
			<div className={styles.grid}>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/formatlearning/1.svg' alt='Картинка' width={356} height={211} />
					</div>
					<div className={styles.card__text}>
						<p className={styles.card__title}>Онлайн-группа</p>
						<span>
							Онлайн занятия 2 раза в неделю вечером, по точному графику, в группе 12 - 20 человек. Доступ к записям -
							всегда.
						</span>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/formatlearning/2.svg' alt='Картинка' width={356} height={211} />
					</div>
					<div className={styles.card__text}>
						<p className={styles.card__title}>Видео-курс</p>
						<span>
							Проходите курс в своем темпе. Чат с куратором. Еженедельные онлайн-разборы практики и домашних заданий.
						</span>
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src='/courses/ui/formatlearning/3.svg' alt='Картинка' width={356} height={211} />
					</div>
					<div className={styles.card__text}>
						<div className={styles.card__city}>
							<p>Очно</p>
							<Suspense fallback={<span className={styles.city}>Москва</span>}>
								<Wrapper />
							</Suspense>
						</div>
						<span>
							Очные занятия 2 р. в нед. вечером, в группе 6 - 12 чел. Есть возможность подключаться к занятию онлайн,
							или посмотреть запись.
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return <span className={styles.city}>{region?.city}</span>;
}
