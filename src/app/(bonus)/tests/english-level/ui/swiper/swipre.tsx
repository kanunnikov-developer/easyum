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
				spaceBetween={20} // Уменьшаем промежуток для мобилок
				slidesPerView={1}
				loop={true}
				navigation={{
					prevEl: `.${styles.prev}`,
					nextEl: `.${styles.next}`,
				}}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
			>
				<SwiperSlide>
					<div className={styles.reviews_card}>
						<a href='/tests/english-level'>
							<img src='/bonus/tests/english.png' alt='Отзыв выпускника курса PHP Junior' />
						</a>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={styles.reviews_card}>
						<a href='/tests/it-professiay'>
							<img src='/bonus/tests/it.png' alt='Отзыв выпускника курса PHP Junior' />
						</a>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={styles.reviews_card}>
						<a href='/tests/search-course-for-me'>
							<img src='/bonus/tests/courses.png' alt='Отзыв выпускника курса PHP Junior' />
						</a>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={styles.reviews_card}>
						<a href='/tests/programming-language'>
							<img src='/bonus/tests/language.png' alt='Отзыв выпускника курса PHP Junior' />
						</a>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={styles.reviews_card}>
						<a href='/tests/testqa'>
							<img src='/bonus/tests/qaTest.png' alt='Отзыв выпускника курса PHP Junior' />
						</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
