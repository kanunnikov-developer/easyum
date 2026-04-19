import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs'
import styles from './styles.module.css'
import BlogTabs from './components/BlogTabs/BlogTabs'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Блог EasyUM — Полезные статьи про программирование и IT',
  description: 'Читайте статьи от школы программирования EasyUM: советы по обучению, обзоры технологий, карьера в IT, вебинары и новости мира программирования.',
  keywords: [
    'блог EasyUM',
    'статьи по программированию',
    'IT блог',
    'обучение программированию',
    'карьера в IT',
    'веб-разработка',
    'программирование для начинающих',
  ],
  authors: [{ name: 'EasyUM' }],
  creator: 'EasyUM',

  openGraph: {
    title: 'Блог EasyUM — Полезные статьи про программирование и IT',
    description: 'Полезные материалы от экспертов EasyUM: как учиться программированию, тренды IT, советы по карьере и обзоры курсов.',
    url: 'https://it.easyum.ru/blog', // замени на актуальный поддомен, если нужно
    type: 'website',
    images: [
      {
        url: 'https://static.tildacdn.com/tild3837-6534-4135-a432-613535343033/photo.jpg',
        width: 1200,
        height: 630,
        alt: 'Блог школы программирования EasyUM',
      },
    ],
    locale: 'ru_RU',
    siteName: 'EasyUM',
  },

  alternates: {
    canonical: 'https://it.easyum.ru/blog',
  },

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

export default async function Page() {
	return(
		<div className={styles.page}>
			<div className='container'>
				<Breadcrumbs />
				<BlogTabs />
			</div>
		</div>
	)
}