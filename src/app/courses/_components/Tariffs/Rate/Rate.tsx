'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import cn from 'classnames';
import { useState } from 'react';
import { ModalTbank } from '../Modals/Tbank/ModalTbank';
import PopupThank from '@/widgets/popupThank/popupThank';
import { ModalPay } from '../Modals/Pay/Pay';
import ModalRegister from '../Modals/Register/ModalRegister';

interface Props {
	city: string | undefined;
	course: string;
	format: string;
	lists: string[];
	price: number | undefined;
	img: string;
	sale: string;
	imgCourse: string | undefined;
}

function converter(price: number | undefined) {
	if (!price) {
		return '0';
	}
	const formattedPlateg = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

	return formattedPlateg;
}

function tinkoff(price: number | undefined) {
	if (!price) {
		return '0';
	}
	// Делим на 24 и округляем в большую сторону
	const plateg = Math.ceil(price / 24);

	// Преобразуем в строку и добавляем пробел между тысячами и сотнями
	const formattedPlateg = plateg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

	return formattedPlateg;
}

export default function Rate({ city, course, format, lists, price, img, sale, imgCourse }: Props) {
	const [tbank, setTbank] = useState(false);
	const [register, setRegister] = useState(false);
	const [payment, setPayment] = useState(false);
	const [isThankOpen, setIsThankOpen] = useState(false);

	return (
		<>
			<div className={styles.rate}>
				<div className={styles.title}>
					<p>{format}</p>
					<Image src={`/courses/ui/tariffs/${img}`} alt='Картинка' width={80} height={80} />
				</div>
				<ul className={styles.lists}>
					{lists.map((list, index) => (
						<li className={cn(list.includes('Онлайн занятия в группе') && styles.list_accent)} key={index}>
							{list}
						</li>
					))}
				</ul>
				<div className={styles.tinkoff}>
					<p className={styles.tinkoff_price}>{tinkoff(price)} ₽ / месяц</p>
					<p className={styles.tinkoff_description}>при рассрочке на 24 месяца</p>
					<button className={styles.button_tinkoff} onClick={() => setTbank(true)}>
						<img src='/courses/ui/tariffs/tbank.svg' alt='Т-Банк' />
						Оформить рассрочку
					</button>
				</div>
				<div className={styles.price}>
					<div className={styles.price__text}>
						<p className={styles.price__title}>{converter(price)} ₽</p>
						<span className={styles.price__sale}>-20%</span>
					</div>
					<p className={styles.price__description}>{sale}</p>
				</div>
				<div className={styles.buttons}>
					<button className={styles.accent_button} onClick={() => setRegister(true)}>
						Записаться
					</button>
					{/* <button className={styles.button} onClick={() => setPayment(true)}>
						Оплатить
					</button> */}
				</div>
			</div>
			{tbank && (
				<ModalTbank
					onClose={() => setTbank(false)}
					city={city}
					course={course}
					tariff={format}
					price={converter(price)}
					imgCourse={imgCourse}
					onSuccess={() => setIsThankOpen(true)}
				/>
			)}

			{register && (
				<ModalRegister
					onClose={() => setRegister(false)}
					city={city}
					course={course}
					tariff={format}
					price={converter(price)}
					onSuccess={() => setIsThankOpen(true)}
				/>
			)}

			{payment && (
				<ModalPay
					onClose={() => setPayment(false)}
					city={city}
					course={course}
					tariff={format}
					price={converter(price)}
					onSuccess={() => setIsThankOpen(true)}
				/>
			)}

			{isThankOpen && <PopupThank onClose={() => setIsThankOpen(false)} isOpen={isThankOpen} />}
		</>
	);
}
