import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  htmlLimitedBots: /.*/,
	reactCompiler: true,
	// cacheComponents: true,

	experimental: {
		inlineCss: true,
	},

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'maxicons.ru',
      },
    ],
  },

	async redirects() {
    return [
      {
        source: '/it-courses',
        destination: '/courses',
        statusCode: 301,
      },
      {
        source: '/programming',
        destination: '/courses/programming',
        statusCode: 301,
      },
      {
        source: '/course/programming',
        destination: '/courses/programming',
        statusCode: 301,
      },
      {
        source: '/testing',
        destination: '/courses/testing',
        statusCode: 301,
      },
      {
        source: '/course/testing',
        destination: '/courses/testing',
        statusCode: 301,
      },
      {
        source: '/web-development',
        destination: '/courses/web-development',
        statusCode: 301,
      },
      {
        source: '/course/web-development',
        destination: '/courses/web-development',
        statusCode: 301,
      },
      {
        source: '/design',
        destination: '/courses/design',
        statusCode: 301,
      },
      {
        source: '/course/design',
        destination: '/courses/design',
        statusCode: 301,
      },
      {
        source: '/marketing',
        destination: '/courses/marketing',
        statusCode: 301,
      },
      {
        source: '/course/marketing',
        destination: '/courses/marketing',
        statusCode: 301,
      },
      {
        source: '/mobile-development',
        destination: '/courses/mobile-development',
        statusCode: 301,
      },
      {
        source: '/course/mobile-development',
        destination: '/courses/mobile-development',
        statusCode: 301,
      },
      {
        source: '/course/3d-modeling',
        destination: '/courses/3d-modeling',
        statusCode: 301,
      },
      {
        source: '/3d-modeling',
        destination: '/courses/3d-modeling',
        statusCode: 301,
      },
      {
        source: '/other',
        destination: '/courses/other',
        statusCode: 301,
      },
      {
        source: '/course/other',
        destination: '/courses/other',
        statusCode: 301,
      },
      {
        source: '/courses/java-junior',
        destination: '/courses/programming/java-junior',
        statusCode: 301,
      },
			{
        source: '/courses/java-pro',
        destination: '/courses/programming/java-pro',
        statusCode: 301,
      },
			{
        source: '/courses/python-data-science',
        destination: '/courses/programming/python-data-science',
        statusCode: 301,
      },
			{
        source: '/courses/c-plus-plus',
        destination: '/courses/programming/c-plus-plus',
        statusCode: 301,
      },
			{
        source: '/courses/python-web-development',
        destination: '/courses/programming/python-web-development',
        statusCode: 301,
      },
			{
        source: '/courses/java-middle-spring-hibernate',
        destination: '/courses/programming/java-middle-spring-hibernate',
        statusCode: 301,
      },
			{
        source: '/courses/php-junior',
        destination: '/courses/programming/php-junior',
        statusCode: 301,
      },
			{
        source: '/courses/qa-pro',
        destination: '/courses/testing/qa-pro',
        statusCode: 301,
      },
			{
        source: '/courses/testing-qa',
        destination: '/courses/testing/testing-qa',
        statusCode: 301,
      },
			{
        source: '/courses/qa-avtomation',
        destination: '/courses/testing/qa-avtomation',
        statusCode: 301,
      },
			{
        source: '/courses/python-qa-avtomation',
        destination: '/courses/testing/python-qa-avtomation',
        statusCode: 301,
      },
			{
        source: '/courses/java-script-full-stack',
        destination: '/courses/web-development/java-script-full-stack',
        statusCode: 301,
      },
			{
        source: '/courses/javascript-front-end',
        destination: '/courses/web-development/javascript-front-end',
        statusCode: 301,
      },
			{ 
        source: '/courses/html-css-moskow',
        destination: '/courses/web-development/html-css-moskow',
        statusCode: 301,
      },
			{
        source: '/courses/java-script-language',
        destination: '/courses/web-development/java-script-language',
        statusCode: 301,
      },
			{
        source: '/courses/web-design-ui-ux',
        destination: '/courses/design/web-design-ui-ux',
        statusCode: 301,
      },
			{
        source: '/courses/graphic-designer',
        destination: '/courses/design/graphic-designer',
        statusCode: 301,
      },
			{
        source: '/courses/design-dlya-nachinayshih',
        destination: '/courses/design/design-dlya-nachinayshih',
        statusCode: 301,
      },
			{
        source: '/courses/smm',
        destination: '/courses/marketing/smm',
        statusCode: 301,
      },
			{
        source: '/courses/internet-marketing',
        destination: '/courses/marketing/internet-marketing',
        statusCode: 301,
      },
			{
        source: '/courses/reklama-ppc',
        destination: '/courses/marketing/reklama-ppc',
        statusCode: 301,
      },
			{
        source: '/courses/reklama-vkontakte-telegram',
        destination: '/courses/marketing/reklama-vkontakte-telegram',
        statusCode: 301,
      },
			{
        source: '/courses/java-android',
        destination: '/courses/mobile-development/java-android',
        statusCode: 301,
      },
			{
        source: '/courses/mobiledev-ios',
        destination: '/courses/mobile-development/mobiledev-ios',
        statusCode: 301,
      },
			{
        source: '/courses/3d-max',
        destination: '/courses/3d-modeling/3d-max',
        statusCode: 301,
      },
			{
        source: '/courses/manager-marketplace',
        destination: '/courses/other/manager-marketplace',
        statusCode: 301,
      },
			{
        source: '/courses/pm-kurs',
        destination: '/courses/other/pm-kurs',
        statusCode: 301,
      },
      {
        source: '/2021/07/13/kto-takoj-front-end-razrabotchik',
        destination: '/blog/kto-takoj-front-end-razrabotchik',
        statusCode: 301,
      },
      {
        source: '/2019/01/22/s-kakogo-yazyka-stoit-nachat-obuchenie-programmirovaniyu',
        destination: '/blog/s-kakogo-yazyka-stoit-nachat-obuchenie-programmirovaniyu',
        statusCode: 301,
      },
      {
        source: '/2018/07/15/open-easyum',
        destination: '/blog/open-easyum',
        statusCode: 301,
      },
      {
        source: '/2018/09/04/ujti-v-ajti-5-sovetov-kak-vyzhat-maksimum-iz-kursov-programmirovaniya',
        destination: '/blog/ujti-v-ajti-5-sovetov-kak-vyzhat-maksimum-iz-kursov-programmirovaniya',
        statusCode: 301,
      },
      {
        source: '/2018/10/17/top-6-sovetov-kak-stat-krutym-veb-dizajnerom',
        destination: '/blog/top-6-sovetov-kak-stat-krutym-veb-dizajnerom',
        statusCode: 301,
      },

      // URL которые надо доделать

      {
        source: '/2021/05/25/web-design-sekreti-effectivnogo-obysheniya',
        destination: '/blog/top-6-sovetov-kak-stat-krutym-veb-dizajnerom',
        statusCode: 301,
      },
      {
        source: '/events/java-junior-android-6-12-2022',
        destination: '/events/testirovanie-po-qa-2',
        statusCode: 301,
      },
      {
        source: '/events/java-middle',
        destination: '/events/testirovanie-po-qa-2',
        statusCode: 301,
      },
      {
        source: '/events/internet-marketing',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/events/ios',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/events/3dmax',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/events/it-project-manager',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/2018/11/23/plyusy-i-minusy-raboty-programmistom',
        destination: '/blog/kak-voity-v-it-s-nula-2026',
        statusCode: 301,
      },
      {
        source: '/2018/11/26/10-instrumentov-dlya-tex-kto-izuchaet-html-s-nulya',
        destination: '/blog/kto-takoj-front-end-razrabotchik',
        statusCode: 301,
      },
      {
        source: '/2018/11/26/10-instrumentov-dlya-tex-kto-izuchaet-htmlcss-s-nulya',
        destination: '/blog/kto-takoj-front-end-razrabotchik',
        statusCode: 301,
      },
      {
        source: '/2018/11/28/java-junior-28-11-2018-1',
        destination: '/blog/ujti-v-ajti-5-sovetov-kak-vyzhat-maksimum-iz-kursov-programmirovaniya',
        statusCode: 301,
      },
      {
        source: '/2018/12/04/9-vrednyx-sovetov-kak-stat-xudshim-proektnym-menedzherom',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/2018/12/08/kak-stat-programmistom-s-nulya',
        destination: '/blog/kak-voity-v-it-s-nula-2026',
        statusCode: 301,
      },
      {
        source: '/2019/01/21/java-junior-android-qa',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/2019/01/31/testing-qa-31-01',
        destination: '/blog/testing-po-v-2026-godu',
        statusCode: 301,
      },
      {
        source: '/2019/02/11/javascript-junior-11-02',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/2019/02/22/java-junior-22-02',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/2019/03/19/python-developer-19-03-19',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/2019/03/26/game-developer-26-03-19',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/2019/03/30/testing-20-03-19',
        destination: '/blog/testing-po-v-2026-godu',
        statusCode: 301,
      },
      {
        source: '/2019/04/15/smm-15-04',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/2021/02/12/samiy-popularniy-kurs-otkrivayem-sekret-sholi-programirovaniya-easyum',
        destination: '/blog/kakoj-yazyk-programmirovaniya-uchit-pervym',
        statusCode: 301,
      },
      {
        source: '/2021/02/12/testing-20-03-19-2',
        destination: '/blog/testing-po-v-2026-godu',
        statusCode: 301,
      },
      {
        source: '/2021/07/09/chto-dolzhen-umet-nachinayushhij-testirovshhik-chtoby-ne-oblazhatsya',
        destination: '/blog/testing-po-v-2026-godu',
        statusCode: 301,
      },
      {
        source: '/2021/07/11/it-rabota-v-amerike-7-ploshhadok-dlya-poiska-vakansij',
        destination: '/blog/ujti-v-ajti-5-sovetov-kak-vyzhat-maksimum-iz-kursov-programmirovaniya',
        statusCode: 301,
      },
      {
        source: '/2021/07/23/na-kogo-podpisatsya-smm-menedzheru',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/2025/03/16/graficheskiy-ili-web-dizain',
        destination: '/blog/top-6-sovetov-kak-stat-krutym-veb-dizajnerom',
        statusCode: 301,
      },
      {
        source: '/page38831010.html',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/courses/python-machine-learning',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/courses/dizajner-intererov',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/page102302316.html',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/page109520616.html',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/page109766296.html',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/page119051006.html',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/page119051666.html',
        destination: '/',
        statusCode: 301,
      },
    ];
  },

	async headers() {
		return [
			{
				source: '/:path*',

				headers: [
					{
						key: 'X-Robots-Tag',
						value: 'all',
					},
				],
			},
		];
	},
};

export default nextConfig;
