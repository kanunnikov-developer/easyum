import Link from 'next/link';
import { CardCourses } from '../lib/allCourses';
import styles from './styles.module.css';
import cn from 'classnames';

interface Props {
	title: string;
	span: string;
	activeTab: 'all' | 'programming' | 'testing' | 'web' | 'design' | 'marketing' | 'mobile' | 'threeD' | 'other';
	coursesCard: CardCourses[];
}

export default function DefaultLayout({ title, span, coursesCard, activeTab }: Props) {
	return (
		<div className={styles.defaultLayout}>
			<h1 className={cn(title === 'по программированию' && styles.programming)}>
				<span className='accent'>{span}</span> {title}
			</h1>
			<div className={styles.tabsList}>
				<Link href='/courses' className={cn(styles.category, activeTab === 'all' && styles.active)}>
					Все курсы
				</Link>
				<Link href='/courses/programming' className={cn(styles.category, activeTab === 'programming' && styles.active)}>
					Программирование
				</Link>
				<Link href='/courses/testing' className={cn(styles.category, activeTab === 'testing' && styles.active)}>
					Тестирование
				</Link>
				<Link href='/courses/web-development' className={cn(styles.category, activeTab === 'web' && styles.active)}>
					Веб-разработка
				</Link>
				<Link href='/courses/design' className={cn(styles.category, activeTab === 'design' && styles.active)}>
					Дизайн
				</Link>
				<Link href='/courses/marketing' className={cn(styles.category, activeTab === 'marketing' && styles.active)}>
					Маркетинг
				</Link>
				<Link
					href='/courses/mobile-development'
					className={cn(styles.category, activeTab === 'mobile' && styles.active)}
				>
					Моб. разработка
				</Link>
				<Link href='/courses/3d-modeling' className={cn(styles.category, activeTab === 'threeD' && styles.active)}>
					3D Моделирование
				</Link>
				<Link href='/courses/other' className={cn(styles.category, activeTab === 'other' && styles.active)}>
					Другие курсы
				</Link>
			</div>
			<div className={styles.tabContent}>
				<div className={styles.coursesGrid}>
					{coursesCard.map((card) => (
						<Link key={card.id} href={card.link} className={styles.card}>
							<img src={card.img} alt={card.img} width={373} height={250} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
