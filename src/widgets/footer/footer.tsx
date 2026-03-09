import styles from './styles.module.css';
import Link from 'next/link';
import { Suspense } from 'react';
import getRegion from '@/lib/getRegion';
import MobileFooter from './ui/MobileFooter';

export default function Footer() {
	return (
		<>
			<div className={styles.footer}>
				<div className='container'>
					<img src='/icons/LogoWhite.svg' alt='Белый логотип' />
					<div className={styles.content}>
						<div className={styles.info}>
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
							<Suspense fallback={<p className={styles.adress}>Загружаем данные...</p>}>
								<WrapperAdress />
							</Suspense>

							<div className={styles.politico}>
								<p className={styles.year}>2017-2026 Все права защищены</p>
								<Link href='#'>Политика конфиденциальности</Link>
								<Link href='#'>Публичный договор (оферта)</Link>
							</div>
						</div>
						<div className={styles.popular}>
							<h4 className={styles.title}>Популярные курсы</h4>
							<div className={styles.navigation_popular}>
								<div className={styles.navigation}>
									<Link href='#'>Java разработчик PRO</Link>
									<Link href='#'>Тестирование ПО</Link>
									<Link href='#'>Full Stack разработчик</Link>
									<Link href='#'>Графический дизайн</Link>
									<Link href='#'>Веб дизайн</Link>
									<Link href='#'>СММ специалист</Link>
									<Link href='#'>Front end разработчик</Link>
									<Link href='#'>3D-моделирование</Link>
								</div>
								<div className={styles.navigation}>
									<Link href='#'>С++ разработчик</Link>
									<Link href='#'>Интернет Маркетинг</Link>
									<Link href='#'>Python разработчик</Link>
									<Link href='#'>Python (веб-разработчик)</Link>
									<Link href='#'>Android разработчик</Link>
									<Link href='#'>IOS разработчик</Link>
									<Link href='#'>Авто-тестирование на java</Link>
									<Link href='#'>Java Middle (Spring)</Link>
								</div>
							</div>
						</div>
						<div className={styles.about}>
							<h4 className={styles.title}>О нас</h4>
							<div className={styles.navigation}>
								<Link href='/success-stories'>Истории успеха</Link>
								<Link href='/employment'>Трудоустройство</Link>
								<Link href='/reviews'>Отзывы</Link>
								<Link href='/payment'>Оплата и возврат</Link>
								<Link href='/docs'>Юридические документы</Link>
								<Link href='/contact'>Контакты</Link>
								<Link href='#'>Блог</Link>
							</div>
						</div>
						<div className={styles.bonus}>
							<h4 className={styles.title}>Бонусы / Компания</h4>
							<div className={styles.navigation}>
								<Link href='/events'>Пробные уроки</Link>
								<Link href='/discounts'>Скидки</Link>
								<Link href='/gift-certificates'>Подарочные сертификаты</Link>
								<Link href='/corporate-training'>Корпоративное обучение</Link>
								<Link href='/applications'>Заявка на выпускников</Link>
								<Link href='/student-projects'>Проекты от студентов</Link>
								<Link href='/tests'>Тесты</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.Mobilefooter}>
				<Suspense>
					<WrapperMobile />
				</Suspense>
			</div>
		</>
	);
}

async function WrapperAdress() {
	const region = await getRegion();
	return <p className={styles.adress}>{region?.address}</p>;
}

async function WrapperMobile() {
	const region = await getRegion();
	return <MobileFooter address={region?.address} />;
}
