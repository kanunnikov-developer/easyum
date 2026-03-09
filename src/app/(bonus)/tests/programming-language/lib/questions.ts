export interface Question {
	id: number;
	text: string;
	description: string;
	options: { value: string; label: string }[];
}

export const questions: Question[] = [
	{
		id: 1,
		text: 'Вы собираетесь изучить программирование для того, чтобы...',
		description: 'Выберите один вариант ответа',
		options: [
			{ value: 'a', label: 'Работать в крупной it-компании' },
			{ value: 'b', label: 'Работать дома (фриланс)' },
			{ value: 'c', label: 'Работать в веб-студии' },
			{ value: 'd', label: 'Для своего проекта' },
		],
	},
	{
		id: 2,
		text: 'При создании сайта, с чем бы Вам хотелось работать больше всего?',
		description: 'Выберите один вариант ответа',
		options: [
			{ value: 'a', label: 'С внешним видом сайта' },
			{ value: 'b', label: 'С логикой сайта' },
		],
	},
	{
		id: 3,
		text: 'Сколько времени Вы готовы потратить для приобретения новой it-профессии?',
		description: 'Выберите один вариант ответа',
		options: [
			{ value: 'a', label: '1-2 месяца' },
			{ value: 'b', label: '3-4 месяца' },
			{ value: 'c', label: '4-6 месяцев' },
			{ value: 'd', label: 'Более 6-ти месяцев' },
		],
	},
	{
		id: 4,
		text: 'Над какими проектами предпочитаете работать как программист?',
		description: 'Выберите один вариант ответа',
		options: [
			{ value: 'a', label: 'Сайты' },
			{ value: 'b', label: 'Онлайн-сервисы типа Сбербанк Онлайн, Яндекс Деньги' },
			{ value: 'c', label: 'Проекты, направленные на автоматизацию бизнеса' },
			{ value: 'd', label: 'Приложения для мобильных устройств' },
			{ value: 'e', label: 'Игры' },
		],
	},
	{
		id: 5,
		text: 'К какому языку программирования Вы склоняетесь?',
		description: 'Выберите один вариант ответа',
		options: [
			{ value: 'a', label: 'Еще ни к какому' },
			{ value: 'b', label: 'PHP' },
			{ value: 'c', label: 'Java' },
			{ value: 'd', label: 'JavaScript' },
			{ value: 'e', label: 'C++' },
		],
	},
	{
		id: 6,
		text: 'Ранее работали в сфере it?',
		description: 'Выберите один вариант ответа',
		options: [
			{ value: 'a', label: 'Да' },
			{ value: 'b', label: 'Нет' },
			{ value: 'c', label: 'Немного' },
		],
	},
	{
		id: 7,
		text: 'Какое утверждение максимально Вам подходит?',
		description: 'Выберите один вариант ответа',
		options: [
			{ value: 'a', label: 'Хочу учиться максимально легко' },
			{
				value: 'b',
				label: 'Готов много и сложно учиться. Знаю ради чего всё это',
			},
			{ value: 'c', label: 'Главное – чтобы было интересно учиться' },
		],
	},
];
