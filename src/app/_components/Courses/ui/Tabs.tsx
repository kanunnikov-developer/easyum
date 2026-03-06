'use client';

import * as Tabs from '@radix-ui/react-tabs';
import Link from 'next/link';
import styles from './styles.module.css';
import { courses } from '../lib/courses';

const categories = [
	'Программирование',
	'Тестирование',
	'Веб Разработка',
	'Дизайн',
	'Маркетинг',
	'Моб. разработка',
	'3D моделирование',
	'Другие курсы',
];

export default function CoursesTabs() {
	return (
		<Tabs.Root defaultValue={categories[0]}>
			{/*Категории табов*/}
			<Tabs.List className={styles.tabsList}>
				{categories.map((category) => (
					<Tabs.Trigger key={category} value={category} className={styles.category}>
						{category}
					</Tabs.Trigger>
				))}
			</Tabs.List>

			{/*Отображаемый контент по табу*/}
			{categories.map((category) => (
				<Tabs.Content key={category} value={category} className={styles.tabContent}>
					<div className={styles.coursesGrid}>
						{courses
							.filter((content) => content.category === category)
							.map((card) => (
								<Link key={card.id} href={card.href} className={styles.card}>
									<img src={card.image} alt={card.title} width={373} height={250} />
								</Link>
							))}
					</div>
				</Tabs.Content>
			))}
		</Tabs.Root>
	);
}
