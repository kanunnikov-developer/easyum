import { headers } from 'next/headers';
import type { MetadataRoute } from 'next';

const SITE_DOMAIN = 'easyum.ru';
const validSubdomains = [
  'it', 
  'rostov', 
  'krasnodar', 
  'spb', 
  'samara', 
  'saratov', 
  'vrn', 
  'izhevsk', 
  'nn', 
  'ekaterinburg'
];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  
  // Определяем поддомен из заголовков или хоста
  const subdomain =
    headersList.get('x-subdomain') ||
    host.split('.')[0] ||
    'it';

  const isValid = validSubdomains.includes(subdomain);
  const baseUrl = `https://${subdomain}.${SITE_DOMAIN}`;

  // Правила для рабочих поддоменов
  const validRules: MetadataRoute.Robots['rules'] = {
    userAgent: '*',
    allow: [
      '/', 
      '/_next/static/css/' // Разрешаем CSS для корректного рендеринга
    ],
    disallow: [
      '/_next/',     // Блокируем технические JS-чанки Next.js
      '/*.svg',      // Блокируем все SVG (иконки, декорации)
      '/*.png',      // Блокируем все PNG (техническая графика)
    ],
  };

  // Правила для неизвестных поддоменов (полный запрет индексации)
  const invalidRules: MetadataRoute.Robots['rules'] = {
    userAgent: '*',
    disallow: '/',
  };

  return {
    rules: isValid ? validRules : invalidRules,
    sitemap: isValid ?
      [
        `${baseUrl}/sitemap.xml`,
        `${baseUrl}/sitemap-old.xml`
      ] : undefined
  };
}