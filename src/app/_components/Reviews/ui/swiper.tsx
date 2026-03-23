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
				<img src='/icons/arrow-left.svg' alt='Prev' />
			</button>

			<button className={styles.next}>
				<img src='/icons/arrow-right.svg' alt='Next' />
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
						<a href='https://www.youtube.com/watch?v=6zp5Vd_O8p0&t=5s' target='_blank'>
							<img src='/main/reviews/php.png' alt='Отзыв выпускника курса PHP Junior' />
						</a>
						<p className={styles.description}>{`Отзыв выпускника потока 2 \nКурс “PHP junior программист”`}</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={styles.reviews_card}>
						<a href='https://www.youtube.com/watch?v=1L1qfmCRd7c' target='_blank'>
							<img src='/main/reviews/front.png' alt='Отзыв выпускника курса Front-end' />
						</a>
						<p className={styles.description}>{`Отзыв выпускника \nКурс “JavaScript Front-end разработчик”`}</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={styles.reviews_card}>
						<a href='https://www.youtube.com/watch?v=R5yyAt-N68Q' target='_blank'>
							<img src='/main/reviews/graph.png' alt='Отзыв выпускника курса PHP Junior' />
						</a>
						<p className={styles.description}>{`Отзыв выпускника \nКурс “Графический дизайнер”`}</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={styles.reviews_card}>
						<a href='https://www.youtube.com/watch?v=TFVsHc3vXaQ' target='_blank'>
							<img src='/main/reviews/javajunior.png' alt='Отзывы выпускницы Курс “Java Junior веб-разработчик”' />
						</a>
						<p className={styles.description}>{`Отзывы выпускницы \nКурс “Java Junior веб-разработчик”`}</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={styles.reviews_card}>
						<a href='https://www.youtube.com/watch?v=5kxgx0dxMak' target='_blank'>
							<img src='/main/reviews/testing.png' alt='Отзыв выпускника Курс “Тестирование ПО”' />
						</a>
						<p className={styles.description}>{`Отзыв выпускника \nКурс “Тестирование ПО”`}</p>
					</div>
				</SwiperSlide>

				<SwiperSlide>
					<div className={styles.reviews_card}>
						<a href='https://www.youtube.com/watch?v=9yJJf6zoLfw' target='_blank'>
							<img src='/main/reviews/front2.png' alt='Отзыв выпускника Курс “JavaScript Front-end разработчик”' />
						</a>
						<p className={styles.description}>{`Отзыв выпускника \nКурс “JavaScript Front-end разработчик”`}</p>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
