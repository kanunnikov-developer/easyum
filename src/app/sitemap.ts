// app/sitemap.ts

import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

const SITE_DOMAIN = 'easyum.ru';

const cities = [
  { subdomain: 'it', name: 'Москва' },
  { subdomain: 'rostov', name: 'Ростов' },
  { subdomain: 'krasnodar', name: 'Краснодар' },
  { subdomain: 'spb', name: 'Санкт-Петербург' },
  { subdomain: 'samara', name: 'Самара' },
  { subdomain: 'saratov', name: 'Саратов' },
  { subdomain: 'vrn', name: 'Воронеж' },
  { subdomain: 'izhevsk', name: 'Ижевск' },
  { subdomain: 'nn', name: 'Нижний Новгород' },
  { subdomain: 'ekaterinburg', name: 'Екатеринбург' },
];

// 👇 добавили тип
type Page = {
  path: string;
  changefreq: 'monthly';
  priority: number;
  onlyFor?: string[];
  excludeFor?: string[];
};

const pages: Page[] = [
  { path: '', changefreq: 'monthly', priority: 1.0 },
  { path: '/contact', changefreq: 'monthly', priority: 0.8 },

  // пример: только для Краснодара
  { path: '/documents', changefreq: 'monthly', priority: 0.8, onlyFor: ['krasnodar'] },

  // пример: исключить для Москвы (it)
  { path: '/docs', changefreq: 'monthly', priority: 0.8, excludeFor: ['it'] },

  { path: '/employment', changefreq: 'monthly', priority: 0.8 },
  { path: '/payment', changefreq: 'monthly', priority: 0.8 },
  { path: '/reviews', changefreq: 'monthly', priority: 0.8 },
  { path: '/success-stories', changefreq: 'monthly', priority: 0.8 },
  { path: '/discounts', changefreq: 'monthly', priority: 0.8 },
  { path: '/gift-certificates', changefreq: 'monthly', priority: 0.8 },
  { path: '/oferta', changefreq: 'monthly', priority: 0.8 },
  { path: '/politika-konfidencialnosti', changefreq: 'monthly', priority: 0.8 },

  // events
  { path: '/events', changefreq: 'monthly', priority: 0.8 },
  { path: '/events/2023-design-2', changefreq: 'monthly', priority: 0.8 },
  { path: '/events/c_plus_plus', changefreq: 'monthly', priority: 0.8 },
  { path: '/events/internet-marketing-smm', changefreq: 'monthly', priority: 0.8 },
  { path: '/events/probnoye-html-css-frontend-fullstack-2', changefreq: 'monthly', priority: 0.8 },
  { path: '/events/python', changefreq: 'monthly', priority: 0.8 },
  { path: '/events/testirovanie-po-qa-2', changefreq: 'monthly', priority: 0.8 },

  // company
  { path: '/applications', changefreq: 'monthly', priority: 0.8 },
  { path: '/corporate-training', changefreq: 'monthly', priority: 0.8 },
  { path: '/student-projects', changefreq: 'monthly', priority: 0.8 },

  // blog
  { path: '/blog', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/kak-voity-v-it-s-nula-2026', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/kakoj-yazyk-programmirovaniya-uchit-pervym', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/kto-takoj-front-end-razrabotchik', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/testing-po-v-2026-godu', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/open-easyum', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/s-kakogo-yazyka-stoit-nachat-obuchenie-programmirovaniyu', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/top-6-sovetov-kak-stat-krutym-veb-dizajnerom', changefreq: 'monthly', priority: 0.8 },
  { path: '/blog/ujti-v-ajti-5-sovetov-kak-vyzhat-maksimum-iz-kursov-programmirovaniya', changefreq: 'monthly', priority: 0.8 },

  // courses
  { path: '/courses', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/3d-modeling', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/3d-modeling/3d-max', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/design', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/design/design-dlya-nachinayshih', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/design/graphic-designer', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/design/web-design-ui-ux', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/marketing', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/marketing/internet-marketing', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/marketing/reklama-ppc', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/marketing/reklama-vkontakte-telegram', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/marketing/smm', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/mobile-development', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/mobile-development/java-android', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/mobile-development/mobiledev-ios', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/other', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/other/manager-marketplace', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/other/pm-kurs', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/programming', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/programming/c-plus-plus', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/programming/java-junior', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/programming/java-middle-spring-hibernate', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/programming/java-pro', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/programming/php-junior', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/programming/python-data-science', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/programming/python-web-development', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/testing', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/testing/python-qa-avtomation', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/testing/qa-avtomation', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/testing/qa-pro', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/testing/testing-qa', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/web-development', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/web-development/html-css-moskow', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/web-development/java-script-full-stack', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/web-development/java-script-language', changefreq: 'monthly', priority: 0.8 },
  { path: '/courses/web-development/javascript-front-end', changefreq: 'monthly', priority: 0.8 },

  // tests
  { path: '/tests', changefreq: 'monthly', priority: 0.8 },
  { path: '/tests/english-level', changefreq: 'monthly', priority: 0.8 },
  { path: '/tests/it-professiay', changefreq: 'monthly', priority: 0.8 },
  { path: '/tests/programming-language', changefreq: 'monthly', priority: 0.8 },
  { path: '/tests/search-course-for-me', changefreq: 'monthly', priority: 0.8 },
  { path: '/tests/testqa', changefreq: 'monthly', priority: 0.8 },
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

  // 👇 фильтрация страниц
  const filteredPages = pages.filter((page) => {
    if (page.onlyFor && !page.onlyFor.includes(subdomain)) {
      return false;
    }

    if (page.excludeFor && page.excludeFor.includes(subdomain)) {
      return false;
    }

    return true;
  });

  const entries: MetadataRoute.Sitemap = [];

  filteredPages.forEach((page) => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      changeFrequency: page.changefreq,
      priority: page.priority,
    });
  });

  return entries;
}