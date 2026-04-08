import Link from 'next/link';
import styles from './styles.module.css';

export default function Navigation() {
	return (
		<nav>
			<ul className={styles.header__nav}>
				<li className={styles.nav__item}>
					<div className={styles.header__nav__item}>О нас</div>

					<ul className={styles.dropdown}>
						<li>
							<Link href='/success-stories'>Истории успеха</Link>
						</li>
						<li>
							<Link href='/employment'>Трудоустройство</Link>
						</li>
						<li>
							<Link href='/reviews'>Отзывы</Link>
						</li>
						<li>
							<Link href='/payment'>Оплата и возврат</Link>
						</li>
						<li>
							<Link href='/docs'>Юридические документы</Link>
						</li>
						<li>
							<Link href='/blog'>Блог</Link>
						</li>
						<li>
							<Link href='/contact'>Контакты</Link>
						</li>
					</ul>
				</li>

				<li className={styles.nav__item}>
					<div className={styles.header__nav__item}>Бонусы</div>

					<ul className={styles.dropdown}>
						<li>
							<Link href='/events'>Пробные уроки</Link>
						</li>
						<li>
							<Link href='/discounts'>Скидки</Link>
						</li>
						<li>
							<Link href='/gift-certificates'>Подарочные сертификаты</Link>
						</li>
						<li>
							<Link href='/tests'>Тесты</Link>
						</li>
					</ul>
				</li>

				<li className={styles.nav__item}>
					<div className={styles.header__nav__item}>Компаниям</div>

					<ul className={styles.dropdown}>
						<li>
							<Link href='/corporate-training'>Корпоративное обучение</Link>
						</li>
						<li>
							<Link href='/applications'>Заявка на выпускников</Link>
						</li>
						<li>
							<Link href='/student-projects'>Проекты от студентов</Link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}
