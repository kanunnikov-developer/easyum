// components/Modal/MobileModal/MobileModal.tsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { cities } from '@/lib/cities';
import { usePathname } from 'next/navigation';

type MobileModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

export default function MobileModal({ isOpen, onClose }: MobileModalProps) {
	const [openAccordion, setOpenAccordion] = useState<string | null>('Курсы');
	const pathname = usePathname(); // текущий путь // по умолчанию открыт "Курсы"

	useEffect(() => {
		if (isOpen) {
			// Сохраняем текущую позицию скролла
			const scrollY = window.scrollY;

			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
			document.body.style.position = 'fixed';
			document.body.style.top = `-${scrollY}px`;
			document.body.style.width = '100%'; // предотвращаем сдвиг из-за исчезновения скроллбара
		} else {
			// Возвращаем всё назад
			const scrollY = parseInt(document.body.style.top || '0', 10) * -1;

			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.width = '';

			// Восстанавливаем позицию скролла
			window.scrollTo(0, scrollY);
		}
		return () => {
			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
			document.body.style.position = '';
			document.body.style.top = '';
			document.body.style.width = '';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const toggleAccordion = (title: string) => {
		setOpenAccordion(openAccordion === title ? null : title);
	};

	return (
		<>
			{/* Затемнение */}
			<div className={styles.overlay} onClick={onClose} aria-hidden='true' />

			{/* Меню */}
			<div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
				{/* Шапка */}
				<div className={styles.header}>
					<div className={styles.title}>Меню</div>
					<button onClick={onClose} className={styles.closeBtn} aria-label='Закрыть меню'>
						<Image src='/icons/closeAccent.svg' alt='Закрыть' width={24} height={24} />
					</button>
				</div>

				{/* Контент */}
				<div className={styles.content}>
					<nav className={styles.nav}>
						<AccordionItem
							title='Города'
							isOpen={openAccordion === 'Города'}
							onToggle={() => toggleAccordion('Города')}
						>
							<div className={styles.submenu}>
								<Link href={cities[0].href + `${pathname}`} className={styles.link}>
									Москва
								</Link>
								<Link href={cities[1].href + `${pathname}`} className={styles.link}>
									Ростов-на-Дону
								</Link>
								<Link href={cities[2].href + `${pathname}`} className={styles.link}>
									Краснодар
								</Link>
								<Link href={cities[3].href + `${pathname}`} className={styles.link}>
									Санкт-Петербург
								</Link>
								<Link href={cities[4].href + `${pathname}`} className={styles.link}>
									Самара
								</Link>
								<Link href={cities[5].href + `${pathname}`} className={styles.link}>
									Саратов
								</Link>
								<Link href={cities[6].href + `${pathname}`} className={styles.link}>
									Воронеж
								</Link>
								<Link href={cities[7].href + `${pathname}`} className={styles.link}>
									Ижевск
								</Link>
								<Link href={cities[8].href + `${pathname}`} className={styles.link}>
									Нижний Новгород
								</Link>
								<Link href={cities[9].href + `${pathname}`} className={styles.link}>
									Екатеринбург
								</Link>
							</div>
						</AccordionItem>

						<AccordionItem title='Курсы' isOpen={openAccordion === 'Курсы'} onToggle={() => toggleAccordion('Курсы')}>
							<div className={styles.submenu}>
								<Link href='/courses/web-development/html-css-moskow' className={styles.link} onClick={onClose}>
									HTML&CSS Верстка сайтов
								</Link>
								<Link href='/courses/testing/qa-avtomation' className={styles.link} onClick={onClose}>
									QA Тестирование (Java)
								</Link>
								<Link href='/courses/design/web-design-ui-ux' className={styles.link} onClick={onClose}>
									UX/UI Веб Дизайн
								</Link>
								<Link href='/courses/marketing/internet-marketing' className={styles.link} onClick={onClose}>
									Интернет-маркетинг
								</Link>
								<Link href='/courses/mobile-development/mobiledev-ios' className={styles.link} onClick={onClose}>
									IOS Разработчик
								</Link>

								<div className={styles.allCourses}>
									<Link href='/courses' className={styles.btnAll} onClick={onClose}>
										Все курсы
									</Link>
								</div>
							</div>
						</AccordionItem>

						<AccordionItem title='О нас' isOpen={openAccordion === 'О нас'} onToggle={() => toggleAccordion('О нас')}>
							<div className={styles.submenu}>
								<Link href='/success-stories' className={styles.link} onClick={onClose}>
									Истории успеха
								</Link>
								<Link href='/employment' className={styles.link} onClick={onClose}>
									Трудоустройство
								</Link>
								<Link href='/reviews' className={styles.link} onClick={onClose}>
									Отзывы
								</Link>
								<Link href='/payment' className={styles.link} onClick={onClose}>
									Оплата и возврат
								</Link>
								<Link href='/docs' className={styles.link} onClick={onClose}>
									Юридические документы
								</Link>
								<Link href='/blog' className={styles.link} onClick={onClose}>
									Блог
								</Link>
								<Link href='/contact' className={styles.link} onClick={onClose}>
									Контакты
								</Link>
							</div>
						</AccordionItem>

						<AccordionItem
							title='Бонусы'
							isOpen={openAccordion === 'Бонусы'}
							onToggle={() => toggleAccordion('Бонусы')}
						>
							<div className={styles.submenu}>
								<Link href='/events' className={styles.link} onClick={onClose}>
									Пробные уроки
								</Link>
								<Link href='/discounts' className={styles.link} onClick={onClose}>
									Скидки
								</Link>
								<Link href='/gift-certificates' className={styles.link} onClick={onClose}>
									Подарочные сертификаты
								</Link>
								<Link href='/tests' className={styles.link} onClick={onClose}>
									Тесты
								</Link>
							</div>
						</AccordionItem>

						<AccordionItem
							title='Компаниям'
							isOpen={openAccordion === 'Компаниям'}
							onToggle={() => toggleAccordion('Компаниям')}
						>
							<div className={styles.submenu}>
								<Link href='/corporate-training' className={styles.link} onClick={onClose}>
									Корпоративное обучение
								</Link>
								<Link href='/applications' className={styles.link} onClick={onClose}>
									Заявка на выпускников
								</Link>
								<Link href='/student-projects' className={styles.link} onClick={onClose}>
									Проекты от студентов
								</Link>
							</div>
						</AccordionItem>
					</nav>

					{/* Футер меню */}
					<div className={styles.footer}>
						<a href='tel:+79669990685' className={styles.phone}>
							+7 (966) 999-06-85
						</a>
						<p className={styles.schedule}>Пн–Пт 9:00–22:00</p>
						<p className={styles.schedule}>Сб-Вс 11:00–18:00</p>

						<div className={styles.socials}>
							<a href='https://t.me/+79262290485' target='_blank' rel='noopener noreferrer'>
								<Image src='/icons/headerTelegram.svg' alt='Telegram' width={32} height={32} />
							</a>
							<a href='https://wa.me/+79163101105' target='_blank' rel='noopener noreferrer'>
								<Image src='/icons/headerWhatsApp.svg' alt='WhatsApp Icon' width={32} height={32} />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// Вынесенный компонент аккордеона
function AccordionItem({
	title,
	children,
	isOpen,
	onToggle,
}: {
	title: string;
	children: React.ReactNode;
	isOpen: boolean;
	onToggle: () => void;
}) {
	return (
		<div className={styles.accordionItem}>
			<button className={styles.accordionBtn} onClick={onToggle}>
				<span>{title}</span>
				<span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>
					<img src='/icons/arrowMenu.svg' alt='' />
				</span>
			</button>

			<div className={`${styles.accordionContent} ${isOpen ? styles.contentOpen : ''}`}>{children}</div>
		</div>
	);
}
