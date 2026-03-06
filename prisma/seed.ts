import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';
import { Prisma, PrismaClient } from '../PrismaApp/generated/prisma/client';

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
	adapter,
});

const regionData: Prisma.RegionCreateInput[] = [
	{
		subdomain: 'msc',
		city: 'Москва',
		preposutional: 'Москве',
		address: 'г. Москва, ул. Большая Новодмитровская 23, территория коворкинга «Flacon SPACE»',
		email: 'msc@msc.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa4aacec9814255cc0c829ff31e82d10501b2a7ccf06efa03954399d63c9e049b&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '4 минуты от метро Дмитровская',
	},
	{
		subdomain: 'krasnodar',
		city: 'Краснодар',
		preposutional: 'Краснодаре',
		address: 'г. Краснодар, Красная ул., 118. Территория коворкинга «Bloks»',
		email: 'msc@msc.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa4aacec9814255cc0c829ff31e82d10501b2a7ccf06efa03954399d63c9e049b&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
	{
		subdomain: 'rostov',
		city: 'Ростов-на-Дону',
		preposutional: 'Ростове-на-Дону',
		address: 'г. Ростов-на-Дону, пр. Театральный 85, 4 этаж. Территория коворкинга «Рубин»',
		email: 'msc@msc.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa4aacec9814255cc0c829ff31e82d10501b2a7ccf06efa03954399d63c9e049b&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
];

export async function main() {
	for (const region of regionData) {
		await prisma.region.upsert({
			where: { subdomain: region.subdomain },
			update: {},
			create: region,
		});
	}
}
main();
