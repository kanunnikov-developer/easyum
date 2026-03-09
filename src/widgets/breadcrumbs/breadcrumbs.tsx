// components/ui/Breadcrumbs.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.css'; // или tailwind, cn и т.д.

export default function Breadcrumbs() {
	const pathname = usePathname();

	// Разбиваем путь на сегменты
	const pathSegments = pathname.split('/').filter((segment) => segment !== ''); // убираем пустые

	// Можно добавить маппинг для красивых названий (опционально)
	const getLabel = (segment: string, index: number) => {
		// Примеры кастомных названий
		const map: Record<string, string> = {
			courses: 'Курсы',
			'success-stories': 'Истории успеха',
			employment: 'Трудоустройство',
			'english-level': 'Английский язык',
			'earch-course-for-me': 'Выбор кусров',
			'it-professiay': 'IT-профессия',
			'programming-language': 'Язык программирования',
			'search-course-for-me': 'Выбор курса',
			testqa: 'Итоговый: Тестирование ПО',
			reviews: 'Отзывы',
			payment: 'Оплата и возврат',
			docs: 'Документы',
			contact: 'Контакты',
			events: 'Пробные уроки',
			discounts: 'Скидки',
			programming: 'Программирование',
			tests: 'Тесты EasyUM',
			testing: 'Тестирование',
			'web-development': 'Веб-разработка',
			design: 'Дизайн',
			marketing: 'Маркетинг',
			'mobile-development': 'Мобильная разработка',
			'3d-modeling': '3D Моделирование',
			other: 'Другие курсы',
		};

		// Если сегмент — динамический id, можно показать "Курс Java" или что-то
		return map[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
	};

	// Строим крошки
	const crumbs = [
		{ label: 'Главная', href: '/' },
		...pathSegments.map((segment, index) => {
			const href = '/' + pathSegments.slice(0, index + 1).join('/');
			return {
				label: getLabel(segment, index),
				href,
			};
		}),
	];

	return (
		<nav aria-label='Хлебные крошки' className={styles.breadcrumbs}>
			{crumbs.map((crumb, index) => (
				<span key={crumb.href}>
					{index > 0 && <span className={styles.separator}> → </span>}
					{index === crumbs.length - 1 ? (
						<span className={styles.current}>{crumb.label}</span>
					) : (
						<Link href={crumb.href} className={styles.link}>
							{crumb.label}
						</Link>
					)}
				</span>
			))}
		</nav>
	);
}
