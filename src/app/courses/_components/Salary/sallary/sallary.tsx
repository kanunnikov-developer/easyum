'use client';

import { useState } from 'react';
import styles from './styles.module.css';

interface Props {
	min: number;
	max: number;
}

export default function SallaryNumber({ min, max }: Props) {
	const [value, setValue] = useState(Math.round((min + max) / 2));
	const formattedValue = value.toLocaleString('ru-RU');

	const progress = ((value - min) / (max - min)) * 100;
	return (
		<div className={styles.salary__sliderWrapper}>
			{/* Плавающая сумма над ползунком */}
			<div
				className={styles.salary__valueBubble}
				style={{
					left: `${progress}%`,
					transform: 'translateX(-50%)',
				}}
			>
				{formattedValue} ₽
			</div>

			<input
				type='range'
				min={min}
				max={max}
				value={value}
				onChange={(e) => setValue(Number(e.target.value))}
				className={styles.salary__range}
				style={{
					// для заполнения слева от ползунка (опционально)
					background: `linear-gradient(to right, #0066ff ${progress}%, #ffffff ${progress}%)`,
				}}
			/>
		</div>
	);
}
