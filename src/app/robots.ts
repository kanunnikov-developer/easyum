import { headers } from 'next/headers';
import type { MetadataRoute } from 'next';

const SITE_DOMAIN = 'easyum.ru';
const validSubdomains = ['it', 'rostov', 'krasnodar', 'spb', 'samara', 'saratov', 'vrn', 'izhevsk', 'nn', 'ekaterinburg'];

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const subdomain =
    headersList.get('x-subdomain') ||
    host.split('.')[0] ||
    'it';

  const isValid = validSubdomains.includes(subdomain);
  const baseUrl = `https://${subdomain}.${SITE_DOMAIN}`;

  // Формируем правила для валидных поддоменов
  const validRules = {
    userAgent: '*',
    allow: ['/', '/_next/static/css/'], // Разрешаем корень и CSS
    disallow: '/_next/',               // Запрещаем остальные чанки
  };

  // Правила для невалидных поддоменов (запрет всего)
  const invalidRules = {
    userAgent: '*',
    disallow: '/',
  };

  return {
    rules: isValid ? validRules : invalidRules,
    sitemap: isValid ? `${baseUrl}/sitemap.xml` : undefined,
  };
}