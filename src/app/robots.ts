// app/robots.ts
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

  return {
    rules: [
      {
        userAgent: '*',
        allow: isValid ? '/' : undefined,
        disallow: isValid ? undefined : '/',
      },
    ],
    sitemap: isValid ? `${baseUrl}/sitemap.xml` : undefined,
  };
}