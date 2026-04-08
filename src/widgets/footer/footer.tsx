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
					<a href='/'>
						<img src='/icons/LogoWhite.svg' alt='Белый логотип' />
					</a>

					<div className={styles.content}>
						<div className={styles.info}>
							<div className={styles.social}>
								<a href='https://vk.com/easyumru' target='_blank'>
									<img src='/icons/vkWhite.svg' alt='Вконтакте' className={styles.img} />
								</a>
								<a href='https://t.me/easyumru' target='_blank'>
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
								<Link href='/docs'>Политика конфиденциальности</Link>
								<Link href='/docs'>Публичный договор (оферта)</Link>
							</div>
						</div>
						<div className={styles.popular}>
							<h4 className={styles.title}>Популярные курсы</h4>
							<div className={styles.navigation_popular}>
								<div className={styles.navigation}>
									<Link href='/courses/programming/java-pro'>Java разработчик PRO</Link>
									<Link href='/courses/testing/testing-qa'>Тестирование ПО</Link>
									<Link href='/courses/web-development/java-script-full-stack'>Full Stack разработчик</Link>
									<Link href='/courses/design/graphic-designer'>Графический дизайн</Link>
									<Link href='/courses/design/web-design-ui-ux'>Веб дизайн</Link>
									<Link href='/courses/marketing/smm'>СММ специалист</Link>
									<Link href='/courses/web-development/javascript-front-end'>Front end разработчик</Link>
									<Link href='/courses/3d-modeling/3d-max'>3D-моделирование</Link>
								</div>
								<div className={styles.navigation}>
									<Link href='/courses/programming/c-plus-plus'>С++ разработчик</Link>
									<Link href='/courses/marketing/internet-marketing'>Интернет Маркетинг</Link>
									<Link href='/courses/programming/python-data-science'>Python разработчик</Link>
									<Link href='/courses/programming/python-web-development'>Python (веб-разработчик)</Link>
									<Link href='/courses/mobile-development/java-android'>Android разработчик</Link>
									<Link href='/courses/mobile-development/mobiledev-ios'>IOS разработчик</Link>
									<Link href='/courses/testing/qa-avtomation'>Авто-тестирование на java</Link>
									<Link href='/courses/programming/java-middle-spring-hibernate'>Java Middle (Spring)</Link>
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
								<Link href='/blog'>Блог</Link>
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
