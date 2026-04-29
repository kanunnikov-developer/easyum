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
        permanent: true,
      },
      {
        source: '/programming',
        destination: '/courses/programming',
        permanent: true,
      },
      {
        source: '/course/programming',
        destination: '/courses/programming',
        permanent: true,
      },
      {
        source: '/testing',
        destination: '/courses/testing',
        permanent: true,
      },
      {
        source: '/course/testing',
        destination: '/courses/testing',
        permanent: true,
      },
      {
        source: '/web-development',
        destination: '/courses/web-development',
        permanent: true,
      },
      {
        source: '/course/web-development',
        destination: '/courses/web-development',
        permanent: true,
      },
      {
        source: '/design',
        destination: '/courses/design',
        permanent: true,
      },
      {
        source: '/course/design',
        destination: '/courses/design',
        permanent: true,
      },
      {
        source: '/marketing',
        destination: '/courses/marketing',
        permanent: true,
      },
      {
        source: '/course/marketing',
        destination: '/courses/marketing',
        permanent: true,
      },
      {
        source: '/mobile-development',
        destination: '/courses/mobile-development',
        permanent: true,
      },
      {
        source: '/course/mobile-development',
        destination: '/courses/mobile-development',
        permanent: true,
      },
      {
        source: '/course/3d-modeling',
        destination: '/courses/3d-modeling',
        permanent: true,
      },
      {
        source: '/3d-modeling',
        destination: '/courses/3d-modeling',
        permanent: true,
      },
      {
        source: '/other',
        destination: '/courses/other',
        permanent: true,
      },
      {
        source: '/course/other',
        destination: '/courses/other',
        permanent: true,
      },
      {
        source: '/courses/java-junior',
        destination: '/courses/programming/java-junior',
        permanent: true,
      },
			{
        source: '/courses/java-pro',
        destination: '/courses/programming/java-pro',
        permanent: true,
      },
			{
        source: '/courses/python-data-science',
        destination: '/courses/programming/python-data-science',
        permanent: true,
      },
			{
        source: '/courses/c-plus-plus',
        destination: '/courses/programming/c-plus-plus',
        permanent: true,
      },
			{
        source: '/courses/python-web-development',
        destination: '/courses/programming/python-web-development',
        permanent: true,
      },
			{
        source: '/courses/java-middle-spring-hibernate',
        destination: '/courses/programming/java-middle-spring-hibernate',
        permanent: true,
      },
			{
        source: '/courses/php-junior',
        destination: '/courses/programming/php-junior',
        permanent: true,
      },
			{
        source: '/courses/qa-pro',
        destination: '/courses/testing/qa-pro',
        permanent: true,
      },
			{
        source: '/courses/testing-qa',
        destination: '/courses/testing/testing-qa',
        permanent: true,
      },
			{
        source: '/courses/qa-avtomation',
        destination: '/courses/testing/qa-automation',
        permanent: true,
      },
			{
        source: '/courses/python-qa-avtomation',
        destination: '/courses/testing/python-qa-avtomation',
        permanent: true,
      },
			{
        source: '/courses/java-script-full-stack',
        destination: '/courses/web-development/java-script-full-stack',
        permanent: true,
      },
			{
        source: '/courses/javascript-front-end',
        destination: '/courses/web-development/javascript-front-end',
        permanent: true,
      },
			{
        source: '/courses/html-css-moskow',
        destination: '/courses/web-development/html-css-moskow',
        permanent: true,
      },
			{
        source: '/courses/java-script-language',
        destination: '/courses/web-development/java-script-language',
        permanent: true,
      },
			{
        source: '/courses/web-design-ui-ux',
        destination: '/courses/design/web-design-ui-ux',
        permanent: true,
      },
			{
        source: '/courses/graphic-designer',
        destination: '/courses/design/graphic-designer',
        permanent: true,
      },
			{
        source: '/courses/design-dlya-nachinayshih',
        destination: '/courses/design/design-dlya-nachinayshih',
        permanent: true,
      },
			{
        source: '/courses/smm',
        destination: '/courses/marketing/smm',
        permanent: true,
      },
			{
        source: '/courses/internet-marketing',
        destination: '/courses/marketing/internet-marketing',
        permanent: true,
      },
			{
        source: '/courses/reklama-ppc',
        destination: '/courses/marketing/reklama-ppc',
        permanent: true,
      },
			{
        source: '/courses/reklama-vkontakte-telegram',
        destination: '/courses/marketing/reklama-vkontakte-telegram',
        permanent: true,
      },
			{
        source: '/courses/java-android',
        destination: '/courses/mobile-development/java-android',
        permanent: true,
      },
			{
        source: '/courses/mobiledev-ios',
        destination: '/courses/mobile-development/mobiledev-ios',
        permanent: true,
      },
			{
        source: '/courses/3d-max',
        destination: '/courses/3d-modeling/3d-max',
        permanent: true,
      },
			{
        source: '/courses/manager-marketplace',
        destination: '/courses/other/manager-marketplace',
        permanent: true,
      },
			{
        source: '/courses/pm-kurs',
        destination: '/courses/other/pm-kurs',
        permanent: true,
      },
      {
        source: '/2021/07/13/kto-takoj-front-end-razrabotchik',
        destination: '/blog/kto-takoj-front-end-razrabotchik',
        permanent: true,
      },
      {
        source: '/2019/01/22/s-kakogo-yazyka-stoit-nachat-obuchenie-programmirovaniyu',
        destination: '/blog/s-kakogo-yazyka-stoit-nachat-obuchenie-programmirovaniyu',
        permanent: true,
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
