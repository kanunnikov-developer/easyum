import getRegion from '@/lib/getRegion';
import styles from './styles.module.css';
import cn from 'classnames';
import CertificateForm from '@/app/_form/CertificateForm/CertificateForm';
import { Suspense } from 'react';

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
					<a href='#'>Купить</a>
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
									<b>Оставьте заявку</b>
								</p>
								<p>С Вами свяжется менеджер - проконсультирует по выбору сертификата или курса</p>
							</div>
						</div>
						<div className={styles.cardCertificate}>
							<h6 className={styles.number}>03</h6>
							<div className={styles.text}>
								<p>
									<b>Оставьте заявку</b>
								</p>
								<p>С Вами свяжется менеджер - проконсультирует по выбору сертификата или курса</p>
							</div>
						</div>
					</div>
				</section>

				<section className={styles.feedback}>
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
