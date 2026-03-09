'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';
import { usePathname } from 'next/navigation';
import { cities } from '@/lib/cities';

export default function MobileFooter({ address }: { address: string | undefined }) {
	const [openAccordion, setOpenAccordion] = useState<string | null>('Курсы');
	const pathname = usePathname();

	const toggleAccordion = (title: string) => {
		setOpenAccordion(openAccordion === title ? null : title);
	};
	return (
		<div className={styles.footer}>
			<div className='container'>
				<div className={styles.content}>
					<nav className={styles.nav}>
						<AccordionItem title='Курсы' isOpen={openAccordion === 'Курсы'} onToggle={() => toggleAccordion('Курсы')}>
							<div className={styles.submenu}>
								<Link href='/courses/web-development/html-css-moskow' className={styles.link}>
									HTML&CSS Верстка сайтов
								</Link>
								<Link href='/courses/testing/qa-avtomation' className={styles.link}>
									QA Тестирование (Java)
								</Link>
								<Link href='/courses/design/web-design-ui-ux' className={styles.link}>
									UX/UI Веб Дизайн
								</Link>
								<Link href='/courses/marketing/internet-marketing' className={styles.link}>
									Интернет-маркетинг
								</Link>
								<Link href='/courses/mobile-development/mobiledev-ios' className={styles.link}>
									IOS Разработчик
								</Link>

								<div className={styles.allCourses}>
									<Link href='/courses' className={styles.btnAll}>
										Все курсы
									</Link>
								</div>
							</div>
						</AccordionItem>

						<AccordionItem title='О нас' isOpen={openAccordion === 'О нас'} onToggle={() => toggleAccordion('О нас')}>
							<div className={styles.submenu}>
								<Link href='/success-stories' className={styles.link}>
									Истории успеха
								</Link>
								<Link href='/employment' className={styles.link}>
									Трудоустройство
								</Link>
								<Link href='/reviews' className={styles.link}>
									Отзывы
								</Link>
								<Link href='/payment' className={styles.link}>
									Оплата и возврат
								</Link>
								<Link href='/docs' className={styles.link}>
									Юридические документы
								</Link>
								<Link href='/contact' className={styles.link}>
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
								<Link href='/events' className={styles.link}>
									Пробные уроки
								</Link>
								<Link href='/discounts' className={styles.link}>
									Скидки
								</Link>
								<Link href='/gift-certificates' className={styles.link}>
									Подарочные сертификаты
								</Link>
								<Link href='/tests' className={styles.link}>
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
								<Link href='/corporate-training' className={styles.link}>
									Корпоративное обучение
								</Link>
								<Link href='/applications' className={styles.link}>
									Заявка на выпускников
								</Link>
								<Link href='/student-projects' className={styles.link}>
									Проекты от студентов
								</Link>
							</div>
						</AccordionItem>
					</nav>

					{/* Футер меню */}
					<section className={styles.footerMenu}>
						<div className={styles.footer__left}>
							<img src='/icons/footermobile.svg' alt='Белый логотип' />
							<div className={styles.social}>
								<a href='https://vk.com/easyumru'>
									<img src='/icons/vkWhite.svg' alt='Вконтакте' />
								</a>
								<a href='https://t.me/easyumru'>
									<img src='/icons/telegramWhite.svg' alt='Телеграм' />
								</a>
							</div>
							<div className={styles.contact}>
								<a href='tel:+79669990685'>+7 (966) 999-06-85</a>
								<p>Контакный центр</p>
							</div>
						</div>
						<div className={styles.footer__rigth}>
							<p>{address}</p>
							<div className={styles.politico}>
								<p className={styles.year}>2017-2026 Все права защищены</p>
								<Link href='#'>Политика конфиденциальности</Link>
								<Link href='#'>Публичный договор (оферта)</Link>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
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
					<img src='/icons/arrowMenuWhite.svg' alt='' />
				</span>
			</button>

			<div className={`${styles.accordionContent} ${isOpen ? styles.contentOpen : ''}`}>{children}</div>
		</div>
	);
}
