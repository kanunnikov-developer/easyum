import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import cn from 'classnames';
import Refand from './refand/refand';
import getRegion from '@/lib/getRegion';
import { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
	const region = await getRegion();

	const city = region?.preposutional || 'Россия';
	const subdomain = region?.subdomain || 'it';
	const currentHost = (await headers()).get('host') || `${subdomain}.easyum.ru`;

	const fullUrl = `https://${currentHost}`;

	return {
		title: `Условия оплаты и возврата в школе программирования EasyUM в ${city}`,
		description: `Условия оплаты: на сайте, оплата по счету или через систему быстрых платежей в академии Условия оплаты и возврата в Школе Программирования EasyUM в ${city}`,
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Условия оплаты и возврата в школе программирования EasyUM в ${city}`,
			description: `Условия оплаты: на сайте, оплата по счету или через систему быстрых платежей в академии Условия оплаты и возврата в Школе Программирования EasyUM в ${city}`,
			url: '/payment',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Условия оплаты и возврата в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/payment`,
		},
	};
}

const payment = [
	{
		position: 'left',
		title: 'Оплата через сайт',
		span: 'Если вы из РФ, и у Вас есть Российская карта',
		text: 'В выбранном вами курсе, прям на сайте, можно будет оплатить курс картой, или через СПБ. Принимаются только карты, выпущенные на территории России.',
		number: '01',
		img: 'img1.svg',
	},
	{
		position: 'right',
		title: 'Оплата с помощью платежных систем',
		span: 'Если вы не из РФ, и у Вас нет Российской карты',
		text: 'Данный способ подойдет гражданам не из России, которые хотят пройти наши курсы онлайн, или в очном формате. Мы работаем с системами: Корона, WebMoney, WesternUnion, MoneyGramm и пр. (по согласованию с клиентом)',
		number: '02',
		img: 'img2.svg',
	},
	{
		position: 'left',
		title: 'Оплата в Офисе',
		span: 'Наличными или картой',
		text: 'Вы можете подойти в любой наш учебный центр и на месте оформиться в группу и оплатить курс наличными или картой. Даже если вы будете заниматься онлайн.',
		number: '03',
		img: 'img3.svg',
	},
	{
		position: 'right',
		title: 'Оплата на расчетный \n счет компании',
		text: 'Вы юридическое лицо? Или вы просто хотите оплатить через банк по реквизитам? Без проблем! Можно произвести нам оплату по заранее выставленному нами счету.',
		number: '04',
		img: 'img4.svg',
	},
];

export default function Page() {
	return (
		<section className={cn('container', styles.page)}>
			<Breadcrumbs />
			<h1 className='accent'>Виды оплаты</h1>

			<section className={styles.cards}>
				{payment.map((block) => (
					<Card key={block.number} {...block} />
				))}
			</section>

			<Refand />

			<section className={styles.start}>
				<h2>
					Старта курса <span className='accent'>уже был?</span>
				</h2>
				<h3>Если первое занятие проведено - возврат невозможен.</h3>
				<p>
					Возврат денежных средств возможен только ДО фактически проведенного первого урока вашего курса. После того,
					как первый урок уже был - денежные средства не возвращаются.
					<br />
					<br />
					Это связано с тем, что мы запускаем группы только в МИНИ-ФОРМАТЕ по 8-12 человек (иногда до 15 чел), для
					вашего комфорта обучения. В связи с этим дата старта формируется только после того, как у нас есть минимальное
					кол-во участников (6 чел).
				</p>
			</section>
		</section>
	);
}

interface Props {
	position: string;
	title: string;
	span?: string;
	text: string;
	number: string;
	img: string;
}

function Card({ position, title, span, text, number, img }: Props) {
	return (
		<div className={styles.card}>
			{position === 'right' ? (
				<>
					<div className={styles.info}>
						<div className={styles.text}>
							<h2>{title}</h2>
							<span>{span}</span>
							<p>{text}</p>
						</div>
						<span className={styles.numberLeft}>{number}</span>
					</div>
					<img src={`/about/payment/${img}`} alt='Картинка' />
				</>
			) : (
				<>
					<img src={`/about/payment/${img}`} alt='Картинка' />
					<div className={styles.info}>
						<div className={styles.text}>
							<h2>{title}</h2>
							<span>{span}</span>
							<p>{text}</p>
						</div>
						<span className={styles.numberRigth}>{number}</span>
					</div>
				</>
			)}
		</div>
	);
}
