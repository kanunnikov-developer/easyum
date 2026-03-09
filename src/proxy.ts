// proxy.ts
import { NextResponse, type NextRequest } from 'next/server';

const DEFAULT_SUBDOMAIN = 'msc';

export function proxy(request: NextRequest) {
	const hostHeader = request.headers.get('host');
	const host = hostHeader?.split(':')[0]?.toLowerCase() ?? '';
	const parts = host.split('.').filter(Boolean);
	const subdomain = parts[0] || '';

	if (!subdomain || subdomain === 'www' || subdomain === 'localhost') {
		const url = new URL(request.url);
		const domain = parts.slice(-2).join('.') || 'localhost:3000';
		url.hostname = `${DEFAULT_SUBDOMAIN}.${domain}`;
		return NextResponse.redirect(url);
	}

	const response = NextResponse.next();
	response.headers.set('x-subdomain', subdomain);

	return response;
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
