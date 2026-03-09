interface Test {
	id: string;
	title: string;
	image: string;
	category: string;
	href: string;
}

// Пример данных (можно заменить на props)
export const tests: Test[] = [
	{
		id: '1',
		title: 'Определите уровень английского языка',
		image: '/bonus/tests/english.png',
		category: 'Уровень языка',
		href: 'tests/english-level',
	},
	{
		id: '2',
		title: 'Какая IT профессия мне подходит',
		image: '/bonus/tests/it.png',
		category: 'Выбор профессии',
		href: 'tests/it-professiay',
	},
	{
		id: '3',
		title: 'Какой курс выбрать для прохождения',
		image: '/bonus/tests/courses.png',
		category: 'Подбор курса',
		href: 'tests/search-course-for-me',
	},
	{
		id: '4',
		title: 'Какой язык программирования выбрать для изучения',
		image: '/bonus/tests/language.png',
		category: 'Языки программирования',
		href: 'tests/programming-language',
	},
	{
		id: '5',
		title: 'Тестирование ПО: Итоговый тест с сертификатом',
		image: '/bonus/tests/qaTest.png',
		category: 'Итоговые тесты',
		href: 'tests/testqa',
	},
];
