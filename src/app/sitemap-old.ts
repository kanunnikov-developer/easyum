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
  { path: '', changefreq: 'monthly' as const, priority: 1.0 },
  { path: '/success-stories', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/reviews', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/payment', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/oferta', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/employment', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/corporate-training', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/applications', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/student-projects', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/discounts', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/gift-certificates', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/contact', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/politika-konfidencialnosti', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/docs', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/testirovanie-po-qa-2', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/c_plus_plus', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/python', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/probnoye-html-css-frontend-fullstack-2', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/2023-design-2', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/internet-marketing-smm', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/blog', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/tests/english-level', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/tests/programming-language', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/tests/it-professiay', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/tests/search-course-for-me', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/tests', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/tests/testqa', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/it-courses', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2018/07/15/open-easyum', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2018/09/04/ujti-v-ajti-5-sovetov-kak-vyzhat-maksimum-iz-kursov-programmirovaniya', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2018/10/17/top-6-sovetov-kak-stat-krutym-veb-dizajnerom', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2019/01/22/s-kakogo-yazyka-stoit-nachat-obuchenie-programmirovaniyu', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2021/07/13/kto-takoj-front-end-razrabotchik', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/programming', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/testing', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/web-development', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/design', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/marketing', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/mobile-development', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/3d-modeling', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/other', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/reklama-vkontakte-telegram', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/design-dlya-nachinayshih', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/html-css-moskow', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/java-middle-spring-hibernate', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/pm-kurs', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/reklama-ppc', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/3d-max', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/smm', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/testing-qa', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/graphic-designer', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/python-qa-avtomation', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/java-script-language', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/qa-avtomation', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/mobiledev-ios', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/web-design-ui-ux', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/internet-marketing', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/javascript-front-end', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/python-web-development', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/python-data-science', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/java-android', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/c-plus-plus', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/php-junior', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/java-junior', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/java-script-full-stack', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/java-pro', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/qa-pro', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/manager-marketplace', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2021/05/25/web-design-sekreti-effectivnogo-obysheniya', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/java-junior-android-6-12-2022', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/java-middle', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/internet-marketing', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/ios', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/3dmax', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/events/it-project-manager', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2018/11/23/plyusy-i-minusy-raboty-programmistom', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2018/11/26/10-instrumentov-dlya-tex-kto-izuchaet-htmlcss-s-nulya', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2018/11/28/java-junior-28-11-2018-1', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2018/12/04/9-vrednyx-sovetov-kak-stat-xudshim-proektnym-menedzherom', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2018/12/08/kak-stat-programmistom-s-nulya', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2019/01/21/java-junior-android-qa', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2019/01/31/testing-qa-31-01', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2019/02/11/javascript-junior-11-02', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2019/02/22/java-junior-22-02', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2019/03/19/python-developer-19-03-19', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2019/03/26/game-developer-26-03-19', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2019/03/30/testing-20-03-19', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2019/04/15/smm-15-04', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2021/02/12/samiy-popularniy-kurs-otkrivayem-sekret-sholi-programirovaniya-easyum', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2021/02/12/testing-20-03-19-2', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2021/07/09/chto-dolzhen-umet-nachinayushhij-testirovshhik-chtoby-ne-oblazhatsya', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2021/07/11/it-rabota-v-amerike-7-ploshhadok-dlya-poiska-vakansij', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2021/07/23/na-kogo-podpisatsya-smm-menedzheru', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/2025/03/16/graficheskiy-ili-web-dizain', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/page38831010.html', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/python-machine-learning', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/courses/dizajner-intererov', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/page102302316.html', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/page109520616.html', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/page109766296.html', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/page119051006.html', changefreq: 'monthly' as const, priority: 0.8 },
  { path: '/page119051666.html', changefreq: 'monthly' as const, priority: 0.8 }, 
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