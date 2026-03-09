'use client';

import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import styles from './styles.module.css';
import { tests } from './tests';

const categories = [
	'Все тесты',
	'Уровень языка',
	'Выбор профессии',
	'Подбор курса',
	'Языки программирования',
	'Итоговые тесты',
];

export default function TestsTabs() {
	return (
		<Tabs.Root defaultValue='Все тесты'>
			{/* Список кнопок */}
			<Tabs.List className={styles.tabsList}>
				{categories.map((category) => (
					<Tabs.Trigger key={category} value={category} className={styles.category}>
						{category}
					</Tabs.Trigger>
				))}
			</Tabs.List>

			{/* Контент табов */}
			{categories.map((category) => (
				<Tabs.Content key={category} value={category} className={styles.tabContent}>
					<div className={styles.coursesGrid}>
						{tests
							.filter((test) => {
								// Для "Все тесты" показываем всё
								if (category === 'Все тесты') return true;
								// Для остальных — только по категории
								return test.category === category;
							})
							.map((test) => (
								<Link key={test.id} href={test.href} className={styles.card}>
									<img src={test.image} alt={test.title} width={373} height={250} />
								</Link>
							))}
					</div>
				</Tabs.Content>
			))}
		</Tabs.Root>
	);
}
