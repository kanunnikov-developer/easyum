import Image from 'next/image';
import styles from './styles.module.css';
import getRegion from '@/lib/getRegion';
import { Suspense } from 'react';
import DesctopButton from './ui/DesctopButton/desctopButton';
import Link from 'next/link';
import cn from 'classnames';
import Navigation from './ui/Navigation/Navigation';
import MobileButton from './ui/MobileButton/MobileButton';

export default function Header() {
	return (
		<section className={cn('container', styles.header)}>
			<div className={styles.header__left}>
				<div className={styles.divLogo}>
					<a href='/'>
						<Image
							src='/icons/Logo.svg'
							alt='Logo'
							width={242}
							height={66}
							fetchPriority='high'
							loading='eager'
							className={styles.logo}
						/>
					</a>
				</div>

				<div className={styles.burger}>
					<MobileButton />
				</div>

				<div className={styles.header__button_group}>
					<Suspense fallback={<button className={styles.button}>Москва</button>}>
						<Wrapper />
					</Suspense>
					<Link href='/courses' className={styles.button}>
						Все курсы
					</Link>
				</div>
			</div>

			<div className={styles.header__right}>
				<Navigation />
				<div className={styles.number}>
					<a href='tel:+79669990685' className={styles.mainNumber}>
						+7 (966) 999-06-85
					</a>
					<div className={styles.dop__number}>
						<a href='tel:+79163101105'>+7 (916) 310-11-05</a>
						<a href='https://wa.me/+79163101105'>
							<Image src='/icons/headerWhatsApp.svg' alt='WhatsApp Icon' width={20} height={20} />
						</a>
						<a href='https://t.me/+79262290485'>
							<Image src='/icons/headerTelegram.svg' alt='WhatsApp Icon' width={18} height={18} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return <DesctopButton city={region?.city} />;
}
