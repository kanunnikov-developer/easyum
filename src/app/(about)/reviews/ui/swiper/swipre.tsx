'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './styles.module.css';

export default function SwiperBlock() {
	return (
		<div className={styles.wrapper}>
			<button className={styles.prev}>
				<img src='/about/reviews/icons/arrow-left.svg' alt='Prev' />
			</button>

			<button className={styles.next}>
				<img src='/about/reviews/icons/arrow-right.svg' alt='Next' />
			</button>

			<Swiper
				modules={[Navigation]}
				spaceBetween={50}
				slidesPerView={1}
				loop={true}
				navigation={{
					prevEl: `.${styles.prev}`,
					nextEl: `.${styles.next}`,
				}}
			>
				<SwiperSlide>
					<img src='/about/reviews/reviews1.svg' alt='Слайд 1' className={styles.image} />
				</SwiperSlide>

				<SwiperSlide>
					<img src='/about/reviews/reviews1.svg' alt='Слайд 2' className={styles.image} />
				</SwiperSlide>

				<SwiperSlide>
					<img src='/about/reviews/reviews1.svg' alt='Слайд 3' className={styles.image} />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
