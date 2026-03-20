// components/DiscountTimerBar.tsx
'use client';

import { useState, useEffect } from 'react'; // если нет → заменить на <span>✕</span>
import styles from './styles.module.css';
import Image from 'next/image';
import { sale } from '@/app/courses/startCourses.info';
import Modal from './Modal/Modal';

interface Props {
	city: string | undefined;
}

export default function DiscountTimerBar({ city }: Props) {
	const END_DATE = new Date(sale.date);

	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	const [isExpired, setIsExpired] = useState(false);
	const [isOpenBron, setIsOpenBron] = useState(false);

	useEffect(() => {
		const calculateTimeLeft = () => {
			const difference = END_DATE.getTime() - Date.now();

			if (difference <= 0) {
				setIsExpired(true);
				return { days: 0, hours: 0, minutes: 0, seconds: 0 };
			}

			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		};

		setTimeLeft(calculateTimeLeft());
		const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

		return () => clearInterval(timer);
	}, []);

	if (isExpired) return null;

	const pad = (num: number) => num.toString().padStart(2, '0');

	return (
		<>
			<div className={styles.fixedBar}>
				<div className={styles.container}>
					<div className={styles.content}>
						<div className={styles.timer}>
							<div className={styles.timeBlock}>
								<div className={styles.timeUnit}>{pad(timeLeft.days)}</div>
								<span className={styles.label}>Дней</span>
							</div>

							<span className={styles.separator}>:</span>

							<div className={styles.timeBlock}>
								<div className={styles.timeUnit}>{pad(timeLeft.hours)}</div>
								<span className={styles.label}>Часов</span>
							</div>

							<span className={styles.separator}>:</span>

							<div className={styles.timeBlock}>
								<div className={styles.timeUnit}>{pad(timeLeft.minutes)}</div>
								<span className={styles.label}>Минут</span>
							</div>

							<span className={styles.separator}>:</span>

							<div className={styles.timeBlock}>
								<div className={styles.timeUnit}>{pad(timeLeft.seconds)}</div>
								<span className={styles.label}>Секунд</span>
							</div>
						</div>

						<div className={styles.slogan}>
							<p>{sale.discountBarTitle}</p>
							<span>{sale.discountBarDescription}</span>
						</div>

						<div className={styles.percent}>
							<span>-20%</span>
						</div>

						<div className={styles.button}>
							<button className={styles.btn} onClick={() => setIsOpenBron(true)}>
								Бронь места
							</button>
						</div>

						<div className={styles.image}>
							<Image src='/icons/timerImage.png' alt='Иконка' width={200} height={140} />
						</div>
					</div>
				</div>
			</div>

			<div className={styles.mobile_fixedBar}>
				<div className='container'>
					<div className={styles.mobile_content}>
						<div className={styles.mobile_slogan}>
							<p>Ждем весну с EasyUM!</p>
						</div>
						<div className={styles.block}>
							<div className={styles.mobile_timer}>
								<div className={styles.mobile_timeBlock}>
									<div className={styles.mobile_timeUnit}>{pad(timeLeft.days)}</div>
									<span className={styles.mobile_label}>Дней</span>
								</div>

								<span className={styles.mobile_separator}>:</span>

								<div className={styles.mobile_timeBlock}>
									<div className={styles.mobile_timeUnit}>{pad(timeLeft.hours)}</div>
									<span className={styles.mobile_label}>Часов</span>
								</div>

								<span className={styles.mobile_separator}>:</span>

								<div className={styles.mobile_timeBlock}>
									<div className={styles.mobile_timeUnit}>{pad(timeLeft.minutes)}</div>
									<span className={styles.mobile_label}>Минут</span>
								</div>

								<span className={styles.mobile_separator}>:</span>

								<div className={styles.mobile_timeBlock}>
									<div className={styles.mobile_timeUnit}>{pad(timeLeft.seconds)}</div>
									<span className={styles.mobile_label}>Секунд</span>
								</div>
							</div>
							<div className={styles.button}>
								<button className={styles.btn} onClick={() => setIsOpenBron(true)}>
									Бронь
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{isOpenBron && <Modal onClose={() => setIsOpenBron(false)} city={city} />}
		</>
	);
}
