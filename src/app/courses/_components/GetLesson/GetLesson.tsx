import Image from 'next/image';
import styles from './styles.module.css';
import cn from 'classnames';
import ButtonGroup from './buttonGroup/ButtonGroup';
import getRegion from '@/lib/getRegion';
import { Suspense } from 'react';

interface Props {
	course: string;
}

export default function GetLesson({ course }: Props) {
	return (
		<div className={cn('container', styles.getLesson)}>
			<div className={styles.getLesson__row}>
				<div className={styles.getLesson__text}>
					<h3>Получите доступ к первому уроку!</h3>
					<div className={styles.icons}>
						<div className={styles.icon__free}>
							<Image src='/courses/ui/getLesson/free.svg' alt='иконка' width={16} height={16} />
							<span>Бесплатно</span>
						</div>
						<div className={styles.icon__messanger}>
							<Image src='/courses/ui/getLesson/messanger.svg' alt='иконка' width={16} height={16} />
							<span>В мессендежр</span>
						</div>
						<div className={styles.icon__time}>
							<Image src='/courses/ui/getLesson/time.svg' alt='иконка' width={16} height={16} />
							<span>В течении 5 минут</span>
						</div>
					</div>
				</div>
				<Suspense fallback={<ButtonGroup city='Москва' course={course} />}>
					<Wrapper course={course} />
				</Suspense>
			</div>
		</div>
	);
}

async function Wrapper({ course }: Props) {
	const region = await getRegion();
	return <ButtonGroup city={region?.city} course={course} />;
}
