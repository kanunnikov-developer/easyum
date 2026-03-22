import { Suspense } from 'react';
import styles from './styles.module.css';
import ButtonGroup from '../buttonGroup/ButtonGroup';
import getRegion from '@/lib/getRegion';
import Image from 'next/image';

interface Props {
	course: string;
}

export default function GetLessonBlock({ course }: Props) {
	return (
		<section className={styles.main}>
			<div className={styles.grid}>
				<div className={styles.text}>
					<h2>
						<span className='accent'>Получите доступ</span> к первому уроку уже сейчас!
					</h2>
					<p>
						Вы получите запись первого урока курса совершенно бесплатно. Видео будет отправлено Вам в WhatsApp или
						Telegram в течение 5 минут!
					</p>
					<div className={styles.buttons}>
						<Suspense fallback={<ButtonGroup city='Москва' course={course} />}>
							<Wrapper course={course}/>
						</Suspense>
					</div>
				</div>
				<div className={styles.image}>
					<Image
						src='/courses/ui/getLesson/imageBlock.svg'
						alt='Картинка'
						width={630}
						height={412}
						className={styles.img}
					/>
				</div>
			</div>
		</section>
	);
}

async function Wrapper({ course }: { course: string }) {
	const region = await getRegion();
	return <ButtonGroup city={region?.city} course={course} />;
}
