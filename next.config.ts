import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	reactCompiler: true,
	cacheComponents: true,
	experimental: {
		inlineCss: true, // Встраивает критический CSS inline, остальное — deferred
	},
};

export default nextConfig;
