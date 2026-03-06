import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';
import getRegion, { Region } from '@/lib/getRegion';
import { Suspense } from 'react';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.hero__text}>
				<Suspense fallback={<h1 className='accent'>{`Курсы \n it-профессий \n в Москве`}</h1>}>
					<Wrapper />
				</Suspense>
				<p className={styles.hero__description}>Войди в it всего за 5-7 месяцев!</p>
				<div className={styles.image}>
					<Image
						src='/main/main.png'
						alt='Главная картинка'
						width={848}
						height={612}
						className={styles.img}
						fetchPriority='high'
						loading='eager'
					/>
				</div>
				<p className={styles.promo}>{`Ждем весну с EasyUM! \n Скидка 20% до 8 марта! 🎁 `}</p>
				<div className={styles.buttonBlock}>
					<Link href='/courses' className={styles.button}>
						Выбрать курс
					</Link>
				</div>
			</div>
		</section>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return (
		<h1 className='accent'>
			{`Курсы \n it-профессий \n`} в {region?.preposutional}
		</h1>
	);
}
