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
		subdomain: 'it',
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
	{
		subdomain: 'samara',
		city: 'Самара',
		preposutional: 'Самаре',
		address: 'г. Самара, ул. Скляренко, 32. Коворкинг "Fun(c)".',
		email: 'samara@easyum.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A40d62eb207e498cd1bd0c8731a2de83956c8705a252632b905e1ca1e8442ab7f&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
	{
		subdomain: 'saratov',
		city: 'Саратов',
		preposutional: 'Саратове',
		address: 'г. Саратов, Аткарская улица, 66. Деловой Центр‎ «Спутник»',
		email: 'saratov@easyum.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Ab6dc6c28323548ed854a4d60d3c710e304b34775117e7656870eed926ec03634&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
	{
		subdomain: 'vrn',
		city: 'Воронеж',
		preposutional: 'Воронеже',
		address: 'г. Воронеж, ул. Фридриха Энгельса, 60А. Коворкинг "КРЦ"',
		email: 'vrn@easyum.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A206b57c734450a83fab35e63ffaa3c8940c02b48362c1411b3bd4cc5ce1bb5d2&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
	{
		subdomain: 'izhevsk',
		city: 'Ижевск',
		preposutional: 'Ижевске',
		address: 'г. Ижевск, Проезд им. Дерябина, 3/4. Коворкинг "FUN(c)"',
		email: 'izhevsk@easyum.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Abae1bda3dfc9b85935796a74c69fd81536e29722326deb5c5be33902969ddf3f&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
	{
		subdomain: 'nn',
		city: 'Нижний Новгород',
		preposutional: 'Нижнем Новгороде',
		address: 'г. Нижний Новгород, ул. Новая 28. Коворкинг "Vmeste"',
		email: 'nn@easyum.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3Abbb33cc75191392b58280733fee4367d95e731f7c5255d7a10ef0a84c497eaed&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
	{
		subdomain: 'ekaterinburg',
		city: 'Екатеринбург',
		preposutional: 'Екатеринбурге',
		address: 'г. Екатеринбург, Добролюбова 16/2, 3 этаж. Коворкинг "‎FREE PEOPLE"',
		email: 'ekaterinburg@easyum.ru',
		map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A3648ef882435edaf10f4bcb3aacc2fb2966d1e84fd78dedda1dab3aff6a4240a&width=600&height=400&lang=ru_RU&scroll=true',
		metro: '',
	},
];

const initialViews = [
    { slug: "kto-takoj-front-end-razrabotchik", views: 0 },
    { slug: "testing-po-v-2026-godu", views: 0 },
	{ slug: "kakoj-yazyk-programmirovaniya-uchit-pervym", views: 0 },
	{ slug: "kak-voity-v-it-s-nula-2026", views: 0 },
	{ slug: "s-kakogo-yazyka-stoit-nachat-obuchenie-programmirovaniyu", views: 0 },
	{ slug: "open-easyum", views: 0 },
	{ slug: "ujti-v-ajti-5-sovetov-kak-vyzhat-maksimum-iz-kursov-programmirovaniya", views: 0 },
	{ slug: 'top-6-sovetov-kak-stat-krutym-veb-dizajnerom', views: 0 }
];

export async function main() {
	for (const region of regionData) {
		await prisma.region.upsert({	
			where: { subdomain: region.subdomain },
			update: region,
			create: region,
		});
	}

	for (const v of initialViews) {
    await prisma.postView.upsert({
      where: { slug: v.slug },
      update: {},
      create: v,
    });
  }
}
  
main();
