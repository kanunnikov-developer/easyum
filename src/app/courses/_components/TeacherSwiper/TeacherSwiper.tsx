'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './styles.module.css';
import Image from 'next/image';

interface Teacher {
	img: string;
	name: string;
	description: string;
}

interface Props {
	teachers: Teacher[];
}

export default function TeacherSwiper({ teachers }: Props) {
	return (
		<section className={styles.section}>
			<h2>
				<span className='accent'>Преподаватели</span> курса:
			</h2>
			<div className={styles.swiper}>
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
						{teachers.map((teacher, index) => (
							<SwiperSlide key={index}>
								<div className={styles.reviews_card}>
									<div className={styles.image}>
										<Image src={teacher.img} alt='Фото преподователя' width={360} height={269} className={styles.img} />
									</div>
									<p className={styles.name}>{teacher.name}</p>
									<p className={styles.description}>{teacher.description}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
