// app/sitemap.ts
import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

const SITE_DOMAIN = 'easyum.ru';

const cities = [
  { subdomain: 'it',         name: 'Москва' },
  { subdomain: 'rostov',      name: 'Ростов' },
  { subdomain: 'krasnodar',   name: 'Краснодар' },
  { subdomain: 'spb',         name: 'Санкт-Петербург' },
  { subdomain: 'samara',      name: 'Самара' },
  { subdomain: 'saratov',     name: 'Саратов' },
  { subdomain: 'vrn',         name: 'Воронеж' },
  { subdomain: 'izhevsk',     name: 'Ижевск' },
  { subdomain: 'nn',          name: 'Нижний Новгород' },
  { subdomain: 'ekaterinburg', name: 'Екатеринбург' },
];

const pages = [
  { path: '',          changefreq: 'monthly' as const,  priority: 1.0 },
  { path: '/contact',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/docs',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/employment',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/payment',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/reviews',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/success-stories',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/discounts',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/2023-design-2',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/c_plus_plus',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/internet-marketing-smm',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/probnoye-html-css-frontend-fullstack-2',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/python',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/testirovanie-po-qa-2',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/gift-certificates',    changefreq: 'monthly' as const, priority: 0.8 },

  // (company)
  { path: '/applications',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/corporate-training',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/student-projects',    changefreq: 'monthly' as const, priority: 0.8 },

  // courses
  { path: '/courses',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/3d-modeling',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/3d-modeling/3d-max',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/design',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/design/design-dlya-nachinayshih',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/design/graphic-designer',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/design/web-design-ui-ux',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/marketing',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/marketing/internet-marketing',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/marketing/reklama-ppc',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/marketing/reklama-vkontakte-telegram',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/marketing/smm',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/mobile-development',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/mobile-development/java-android',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/mobile-development/mobiledev-ios',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/other',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/other/manager-marketplace',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/other/pm-kurs',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/programming',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/programming/c-plus-plus',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/programming/java-junior',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/programming/java-middle-spring-hibernate',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/programming/java-pro',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/programming/php-junior',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/programming/python-data-science',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/programming/python-web-development',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/testing',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/testing/python-qa-avtomation',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/testing/qa-avtomation',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/testing/qa-pro',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/testing/testing-qa',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/web-development',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/web-development/html-css-moskow',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/web-development/java-script-full-stack',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/web-development/java-script-language',    changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/web-development/javascript-front-end',    changefreq: 'monthly' as const, priority: 0.8 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const subdomain =
    headersList.get('x-subdomain') ||
    headersList.get('host')?.split('.')[0] ||
    'it';

  const currentCity = cities.find(city => city.subdomain === subdomain);

  if (!currentCity) {
    return [];
  }

  const baseUrl = `https://${subdomain}.${SITE_DOMAIN}`;
  const entries: MetadataRoute.Sitemap = [];

  pages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      changeFrequency: page.changefreq,
      priority: page.priority,
    });
  });

  return entries;
}