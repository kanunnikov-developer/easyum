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
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/programming',
        destination: '/courses/programming',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/course/programming',
        destination: '/courses/programming',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/testing',
        destination: '/courses/testing',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/course/testing',
        destination: '/courses/testing',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/web-development',
        destination: '/courses/web-development',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/course/web-development',
        destination: '/courses/web-development',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/design',
        destination: '/courses/design',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/course/design',
        destination: '/courses/design',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/marketing',
        destination: '/courses/marketing',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/course/marketing',
        destination: '/courses/marketing',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/mobile-development',
        destination: '/courses/mobile-development',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/course/mobile-development',
        destination: '/courses/mobile-development',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/course/3d-modeling',
        destination: '/courses/3d-modeling',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/3d-modeling',
        destination: '/courses/3d-modeling',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/other',
        destination: '/courses/other',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/course/other',
        destination: '/courses/other',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/courses/java-junior',
        destination: '/courses/programming/java-junior',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/java-pro',
        destination: '/courses/programming/java-pro',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/python-data-science',
        destination: '/courses/programming/python-data-science',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/c-plus-plus',
        destination: '/courses/programming/c-plus-plus',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/python-web-development',
        destination: '/courses/programming/python-web-development',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/java-middle-spring-hibernate',
        destination: '/courses/programming/java-middle-spring-hibernate',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/php-junior',
        destination: '/courses/programming/php-junior',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/qa-pro',
        destination: '/courses/testing/qa-pro',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/testing-qa',
        destination: '/courses/testing/testing-qa',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/qa-avtomation',
        destination: '/courses/testing/qa-automation',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/python-qa-avtomation',
        destination: '/courses/testing/python-qa-avtomation',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/java-script-full-stack',
        destination: '/courses/web-development/java-script-full-stack',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/javascript-front-end',
        destination: '/courses/web-development/javascript-front-end',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/html-css-moskow',
        destination: '/courses/web-development/html-css-moskow',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/java-script-language',
        destination: '/courses/web-development/java-script-language',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/web-design-ui-ux',
        destination: '/courses/design/web-design-ui-ux',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/graphic-designer',
        destination: '/courses/design/graphic-designer',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/design-dlya-nachinayshih',
        destination: '/courses/design/design-dlya-nachinayshih',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/smm',
        destination: '/courses/marketing/smm',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/internet-marketing',
        destination: '/courses/marketing/internet-marketing',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/reklama-ppc',
        destination: '/courses/marketing/reklama-ppc',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/reklama-vkontakte-telegram',
        destination: '/courses/marketing/reklama-vkontakte-telegram',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/java-android',
        destination: '/courses/mobile-development/java-android',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/mobiledev-ios',
        destination: '/courses/mobile-development/mobiledev-ios',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/3d-max',
        destination: '/courses/3d-modeling/3d-max',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/manager-marketplace',
        destination: '/courses/other/manager-marketplace',
        permanent: false, 
        statusCode: 301,
      },
			{
        source: '/courses/pm-kurs',
        destination: '/courses/other/pm-kurs',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/2021/07/13/kto-takoj-front-end-razrabotchik',
        destination: '/blog/kto-takoj-front-end-razrabotchik',
        permanent: false, 
        statusCode: 301,
      },
      {
        source: '/2019/01/22/s-kakogo-yazyka-stoit-nachat-obuchenie-programmirovaniyu',
        destination: '/blog/s-kakogo-yazyka-stoit-nachat-obuchenie-programmirovaniyu',
        permanent: false, 
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
