import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';
import getRegion from '@/lib/getRegion';
import { Suspense } from 'react';
import cn from 'classnames';

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.circle1}></div>
			<div className={styles.circle2}></div>
			<div className={styles.circle3}></div>
			<div className={styles.circle4}></div>
			<div className={styles.circle5}></div>
			<div className={styles.hero__text}>
				<Suspense fallback={<h1 className='accent'>{`Курсы \n it-профессий \n в Москве`}</h1>}>
					<Wrapper />
				</Suspense>
				<p className={styles.hero__description}>Войди в it всего за 5-7 месяцев!</p>
				<div className={styles.image}>
					<Image
						src='/main/main_2.svg' // Жертва LCP 2,4s против png в 0.80s
						alt='Главная картинка'
						width={875}
						height={602}
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
		<h1
			className={cn('accent', {
				[styles.small]: region?.subdomain === 'spb',
			})}
		>
			{`Курсы \n it-профессий \n`} в {region?.preposutional}
		</h1>
	);
}
