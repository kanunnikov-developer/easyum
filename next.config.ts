import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	cacheComponents: true,
	experimental: {
		inlineCss: true, // Встраивает критический CSS inline, остальное — deferred
	},

	async headers() {
		return [
			{
				// Применяется ко всем маршрутам (:path* = любой путь)
				source: '/:path*',

				headers: [
					{
						key: 'X-Robots-Tag',
						value: 'noindex, nofollow, nosnippet, noarchive',
					},
				],
			},
		];
	},
};

export default nextConfig;
