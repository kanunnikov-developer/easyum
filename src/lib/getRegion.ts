import { headers } from 'next/headers';
import prisma from './prisma';

const DEFAULT_SUBDOMAIN = 'msc';

export type Region = {
	id: string;
	subdomain: string;
	city: string;
	preposutional: string;
	address: string;
	email: string;
	map: string;
	metro: string;
};

export default async function getRegion() {
	const subdomain = await getSubdomain();
	return region(subdomain);
}

async function getSubdomain() {
	const hostHeader = (await headers()).get('x-subdomain');
	if (!hostHeader) return DEFAULT_SUBDOMAIN;

	const host = hostHeader?.split(':')[0]?.toLowerCase() ?? '';
	const parts = host.split('.').filter(Boolean);
	const subdomain = parts[0];

	return subdomain;
}

async function region(subdomain: string) {
	'use cache';

	let region = await prisma.region.findUnique({
		where: { subdomain },
	});

	if (!region && subdomain !== DEFAULT_SUBDOMAIN) {
		region = await prisma.region.findUnique({
			where: { subdomain: DEFAULT_SUBDOMAIN },
		});
	}

	if (!region) return null;

	return {
		id: region.id,
		subdomain: region.subdomain,
		city: region.city,
		preposutional: region.preposutional,
		address: region.address,
		metro: region.metro,
		map: region.map,
		email: region.email,
	};
}
