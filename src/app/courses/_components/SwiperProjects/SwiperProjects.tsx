'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './styles.module.css';

interface Item {
	img: string;
	description: string;
}

interface Props {
	title: string;
	accent: string;
	description?: string;
	items: Item[];
	col?: number;
}

export default function SwiperProjects({ title, accent, description, items, col = 3 }: Props) {
	return (
		<section className={styles.swiper__projects}>
			<h2>
				<span className='accent'>{accent}</span> {title}
			</h2>
			{description ? <p className={styles.swiper__description}>{description}</p> : null}
			<div className={styles.swiper__block}>
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
							1024: { slidesPerView: col },
						}}
					>
						{items.map((item, index) => (
							<SwiperSlide key={index}>
								<div className={styles.reviews_card}>
									<img src={item.img} alt='Картинка' />
									<p className={styles.description__card}>{item.description}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
