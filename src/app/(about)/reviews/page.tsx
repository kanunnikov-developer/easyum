import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import cn from 'classnames';
import SwiperBlock from './ui/swiper/swipre';
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
		title: `Отзывы о курсах EasyUM в ${city}`,
		description: `Реальные отзывы учеников, окончивших курсы в школе программирования EasyUM по направлениям дизайн, программирование, маркетинг, тестирование, разработка игр и пр. в ${city}`,
		authors: [{ name: 'EasyUM' }],
		creator: 'EasyUM',

		metadataBase: new URL(fullUrl),

		// Open Graph (то, что ты просил)
		openGraph: {
			title: `Отзывы о курсах EasyUM в ${city}`,
			description: `Реальные отзывы учеников, окончивших курсы в школе программирования EasyUM по направлениям дизайн, программирование, маркетинг, тестирование, разработка игр и пр. в ${city}`,
			url: '/reviews',
			type: 'website',
			images: [
				{
					url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
					width: 1200,
					height: 630,
					alt: `Отзывы о курсах EasyUM в ${city} — EasyUM`,
				},
			],
			locale: 'ru_RU',
			siteName: 'EasyUM',
		},

		alternates: {
			canonical: `/reviews`,
		},
	};
}

const ReviewsText = [
	{
		img: 'icon1.svg',
		span: '4,9',
		href: 'https://easyum.blizko.ru/reviews?utm_referrer=https%3A%2F%2Fit.easyum.ru%2F',
	},
	{
		img: 'icon2.svg',
		span: '4,9',
		href: 'https://zoon.ru/msk/trainings/shkola_programmirovaniya_easyum_na_shlyuzovoj_naberezhnoj/',
	},
	{
		img: 'icon3.svg',
		span: '4,7',
		href: 'https://www.yell.ru/moscow/com/easyum_11933600/',
	},
	{
		img: 'icon4.svg',
		span: '4,5',
		href: 'https://yandex.ru/maps/org/easyum/74697977425/?ll=37.646676%2C55.731067&z=13',
	},
	{
		img: 'icon5.svg',
		span: '5,0',
		href: 'https://repometr.com/shkola_programmirovaniya_easyum_68416/',
	},
	{
		img: 'icon6.svg',
		span: '4,5',
		href: 'https://fooby.ru/company/easyum-it-obuchenie-v-moskve-kursy-programmirovaniya-dizayna-testirovaniya-3d-grafiki-237470',
	},
	{
		img: 'icon7.svg',
		span: '4,6',
		href: 'https://2gis.ru/moscow/firm/70000001032954709',
	},
	{
		img: 'icon8.svg',
		span: '5,0',
		href: 'https://www.google.com/maps/place/EasyUM/@55.730975,37.644212,17z/data=!3m1!4b1!4m6!3m5!1s0x46b54b2022f20bef:0xc11fb7a2caca052a!8m2!3d55.730972!4d37.6467869!16s%2Fg%2F11gx_n13xj?entry=tts&shorturl=1',
	},
];

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<Breadcrumbs />
			<section className={styles.reviews}>
				<h1>
					<span className='accent'>Отзывы</span> студентов
				</h1>
				<p>Мы ведем честную и открытую политику компании, все отзывы собраны исключительно с открытых площадок.</p>
				<div className={styles.reviews__grid}>
					<div className={styles.grid}>
						{ReviewsText.map((reviews) => (
							<ServiceCard key={reviews.img} img={reviews.img} span={reviews.span} href={reviews.href} />
						))}
					</div>
					<img src='/about/reviews/girlStar.svg' alt='Девушка со вездой' className={styles.reviews__girl_image} />
				</div>
			</section>

			<section className={styles.reviewsImage}>
				<SwiperBlock />
			</section>

			<div className={styles.vedeoReviews}>
				<h6 className={styles.h1}>
					<span className='accent'>Видео</span>отзывы
				</h6>
				<div className={styles.video__grid}>
					<div className={styles.card_video}>
						<a href='https://www.youtube.com/watch?v=6zp5Vd_O8p0' target='_blank'>
							<img src={`/about/reviews/video/video1.svg`} alt='Видео отзыв' />
						</a>
						<span>{`Отзыв выпускника потока 2 \n Курс “PHP junior программист”`}</span>
					</div>
					<div className={styles.card_video}>
						<a href='https://www.youtube.com/watch?v=1L1qfmCRd7c' target='_blank'>
							<img src={`/about/reviews/video/video2.svg`} alt='Видео отзыв' />
						</a>
						<span>{`Отзыв выпускника \n Курс “Javascript Frontend-разработчик”`}</span>
					</div>
					<div className={styles.card_video}>
						<a href='https://www.youtube.com/watch?v=R5yyAt-N68Q' target='_blank'>
							<img src={`/about/reviews/video/video3.svg`} alt='Видео отзыв' />
						</a>
						<span>{`Отзыв выпускника \n Курс “Графический дизайн”`}</span>
					</div>
					<div className={styles.card_video}>
						<a href='https://www.youtube.com/watch?v=TFVsHc3vXaQ' target='_blank'>
							<img src={`/about/reviews/video/video4.svg`} alt='Видео отзыв' />
						</a>
						<span>{`Отзыв выпускницы \n Курс “Java Junior веб-разработчик”`}</span>
					</div>
					<div className={styles.card_video}>
						<a href='https://www.youtube.com/watch?v=5kxgx0dxMak' target='_blank'>
							<img src={`/about/reviews/video/video5.svg`} alt='Видео отзыв' />
						</a>
						<span>{`Отзыв выпускника \n Курс “Тестирование ПО”`}</span>
					</div>
					<div className={styles.card_video}>
						<a href='https://www.youtube.com/watch?v=9yJJf6zoLfw' target='_blank'>
							<img src={`/about/reviews/video/video6.svg`} alt='Видео отзыв' />
						</a>
						<span>{`Отзыв выпускника \n Курс “Javascript Frontend-разработчик”`}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

interface Props {
	img: string;
	span: string;
	href: string;
}

function ServiceCard({ img, span, href }: Props) {
	return (
		<div className={styles.card}>
			<img src={`/about/reviews/icons/${img}`} alt='Икокна' />
			<span>{span}</span>
			<a href={href}>Перейти</a>
		</div>
	);
}
