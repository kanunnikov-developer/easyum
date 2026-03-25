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
		email: 'msc@easyum.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa4aacec9814255cc0c829ff31e82d10501b2a7ccf06efa03954399d63c9e049b&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '4 минуты от метро Дмитровская',
	},
	{
		subdomain: 'krasnodar',
		city: 'Краснодар',
		preposutional: 'Краснодаре',
		address: 'г. Краснодар, Красная ул., 118. Территория коворкинга «Bloks»',
		email: 'krasnodar@easyum.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A21cb350153a74a9a929befdf20109837c6405ab5588561b18eeeb52bff241606&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
	{
		subdomain: 'rostov',
		city: 'Ростов-на-Дону',
		preposutional: 'Ростове-на-Дону',
		address: 'г. Ростов-на-Дону, пр. Театральный 85, 4 этаж. Территория коворкинга «Рубин»',
		email: 'rostov@easyum.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A87fc5f6460a7cdf61290abe0a35c8a71459c09679ac7bb4f3ae0c80344b58a7c&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
	{
		subdomain: 'spb',
		city: 'Санкт-Петербург',
		preposutional: 'Санкт-Петербурге',
		address: 'г. Санкт-Петербург, набережная канала Грибоедова 19 - территория коворкинга "Место Встречи"',
		email: 'spb@easyum.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ab961072daf544a527b09de18dcb889bf7c590a80e19a4b4b5d0dc5d5ab0adb33&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
];

export async function main() {
	for (const region of regionData) {
		await prisma.region.upsert({
			where: { subdomain: region.subdomain },
			update: region,
			create: region,
		});
	}
}
main();
