import getRegion from '@/lib/getRegion';
import styles from './styles.module.css';
import CertificateForm from '@/app/_form/CertificateForm/CertificateForm';
import { Suspense } from 'react';
import { headers } from 'next/headers';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Подарочный сертификат на курс от EasyUM в ${city}`,
		description: `Подарите близкому человеку Сертификат на обучение в EasyUM. Отличный подарок, который поможет войти в айти и найти работу своей мечты уже через 5-7 месяцев в ${city}! `,
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Подарочный сертификат на курс от EasyUM в ${city}`,
			description: `Подарите близкому человеку Сертификат на обучение в EasyUM. Отличный подарок, который поможет войти в айти и найти работу своей мечты уже через 5-7 месяцев в ${city}!`,
			url: '/gift-certificates',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Подарочный сертификат в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/gift-certificates`,
		},
	};
}

export default function Page() {
	return (
		<div className={styles.page}>
			<div className={styles.bg}></div>
			<div className={'container'}>
				<section className={styles.header}>
					<h1>Подарочные сертификаты</h1>
					<p>
						Подарите близким, друзьям и коллегам шанс научиться новому! У нас более 24 курсов на выбор — интересный
						найдётся для каждого.
					</p>
					<a href='#certificate-form'>Купить</a>
				</section>

				<section className={styles.gridDescription}>
					<div className={styles.cardDescription}>
						<img src='/bonus/certificates/icons/icon1.svg' alt='Картинка' />
						<div className={styles.description}>
							<h6>Подарки в виде знаний</h6>
							<p>Дарить знания это круто. А с нашим сертификатом это еще и легко!</p>
						</div>
					</div>
					<div className={styles.cardDescription}>
						<img src='/bonus/certificates/icons/icon2.svg' alt='Картинка' />
						<div className={styles.description}>
							<h6>На определенную сумму</h6>
							<p>Им можно оплатить часть или полную стоимость обучения.</p>
						</div>
					</div>
					<div className={styles.cardDescription}>
						<img src='/bonus/certificates/icons/icon3.svg' alt='Картинка' />
						<div className={styles.description}>
							<h6>На конкретный курс</h6>
							<p>Сможете подарить любую учебную программу из нашего каталога.</p>
						</div>
					</div>
				</section>

				<section className={styles.certificate}>
					<h2 className='accent'>Как получить сертификат</h2>
					<div className={styles.gridCertificate}>
						<div className={styles.cardCertificate}>
							<h6 className={styles.number}>01</h6>
							<div className={styles.text}>
								<p>
									<b>Оставьте заявку</b>
								</p>
								<p>С Вами свяжется менеджер - проконсультирует по выбору сертификата или курса</p>
							</div>
						</div>
						<div className={styles.cardCertificate}>
							<h6 className={styles.number}>02</h6>
							<div className={styles.text}>
								<p>
									<b>Оплатить сертификат</b>
								</p>
								<p>Мы отправим вам на почту ссылку для оплаты банковской картой</p>
							</div>
						</div>
						<div className={styles.cardCertificate}>
							<h6 className={styles.number}>03</h6>
							<div className={styles.text}>
								<p>
									<b>Подарите занятия</b>
								</p>
								<p>Мы пришлем файл сертификата на почту или выдадим в офисе EasyUM</p>
							</div>
						</div>
					</div>
				</section>

				<section className={styles.feedback} id='certificate-form'>
					<div className={styles.left}>
						<h2>Оставьте заявку на сертификат</h2>
						<Suspense fallback={<CertificateForm city='Москва' />}>
							<Wrapper />
						</Suspense>
					</div>
					<img src='/bonus/certificates/girl.svg' alt='Картинка' />
				</section>
			</div>
		</div>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return <CertificateForm city={region?.city} />;
}
