import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import './globals.css';
import Header from '@/widgets/header/header';
import Footer from '@/widgets/footer/footer';
import DiscountTimerBar from '@/widgets/discountBar/DiscountBar';
import getRegion from '@/lib/getRegion';
import { Suspense } from 'react';

const GolosText = Golos_Text({
	variable: '--golos-text',
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

// ← Вот здесь меняем
export const metadata: Metadata = {
	title: 'В разработке — не индексировать',
	description: 'Сайт в разработке',
	robots: {
		index: false, // главное — запрет индексации
		follow: false, // не следовать по ссылкам
		googleBot: {
			index: false,
			follow: false,
			'max-video-preview': -1,
			'max-image-preview': 'none',
			'max-snippet': -1,
		},
	},
	// можно ещё добавить (опционально)
	// alternates: { canonical: 'https://your-domain.com' }, // если нужно
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={GolosText.variable}>
				<Header />
				{children}
				<Footer />

				<Suspense>
					<Wrapper />
				</Suspense>
			</body>
		</html>
	);
}

async function Wrapper() {
	const region = await getRegion();
	return <DiscountTimerBar city={region?.city} />;
}
