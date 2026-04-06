import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import './globals.css';
import Header from '@/widgets/header/header';
import Footer from '@/widgets/footer/footer';
import DiscountTimerBar from '@/widgets/discountBar/DiscountBar';
import getRegion from '@/lib/getRegion';
import { Suspense } from 'react';
import FloatingContactWidget from '@/widgets/floatingContactWidget/FloatingContactWidget';

const GolosText = Golos_Text({
	variable: '--golos-text',
	subsets: ['latin'],
	weight: ['400', '500', '700', '900'],
	fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

export const metadata: Metadata = {
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
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
				<FloatingContactWidget />

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
