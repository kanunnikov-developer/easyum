import getRegion from '@/lib/getRegion';
import styles from './styles.module.css';
import { Suspense } from 'react';
import SallaryNumber from './sallary/sallary';
import cn from 'classnames';

interface Props {
	min: number;
	max: number;
}

export default function Sallary({ min, max }: Props) {
	return (
		<section className={styles.salary}>
			<div className={styles.salary__row}>
				<div className={styles.sallary__text}>
					<Suspense fallback={<h2>Зарплата в Москве</h2>}>
						<Wrapper />
					</Suspense>
					<p className={styles.description}>это усредненные суммы, которые собрали на основе данных с hh.ru</p>
				</div>
				<div className={styles.sallary__info}>
					<div className={styles.salary__levels}>
						<p>Junior</p>
						<p>Middle</p>
						<p>Senior</p>
						<p>Lead</p>
					</div>
					<SallaryNumber min={min} max={max} />
				</div>
			</div>
		</section>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return (
		<p className={cn(styles.title, region?.city === 'Ростов-на-Дону' && styles.title__small)}>
			Зарплата в {region?.preposutional}
		</p>
	);
}
