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
