export interface Question {
	id: number;
	text: string;
	description: string;
	options: { value: string; label: string }[];
	points: Record<string, number>;
}

export const questions: Question[] = [
	{
		id: 1,
		text: 'I __________ a teacher.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'am' },
			{ value: 'b', label: 'are' },
			{ value: 'c', label: 'be' },
			{ value: 'd', label: 'is' },
		],
		points: { a: 1, b: 0, c: 0, d: 0 },
	},
	{
		id: 2,
		text: '_________ you play chess?',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'are' },
			{ value: 'b', label: 'know' },
			{ value: 'c', label: 'can' },
			{ value: 'd', label: 'have' },
		],
		points: { a: 0, b: 0, c: 1, d: 0 },
	},
	{
		id: 3,
		text: 'What are you doing now? I __________ a letter.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'is writing' },
			{ value: 'b', label: 'be writing' },
			{ value: 'c', label: 'am writing' },
			{ value: 'd', label: 'write' },
		],
		points: { a: 0, b: 0, c: 1, d: 0 },
	},
	{
		id: 4,
		text: '____ the students.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'This is' },
			{ value: 'b', label: 'These are' },
			{ value: 'c', label: 'That are' },
			{ value: 'd', label: 'That is' },
		],
		points: { a: 0, b: 1, c: 0, d: 0 },
	},
	{
		id: 5,
		text: 'He advised me ____ the doctor.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'seeing' },
			{ value: 'b', label: 'that I see' },
			{ value: 'c', label: 'see' },
			{ value: 'd', label: 'to see' },
		],
		points: { a: 0, b: 0, c: 0, d: 1 },
	},
	{
		id: 6,
		text: "I'd like ____ English.",
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'to improve my' },
			{ value: 'b', label: 'study' },
			{ value: 'c', label: 'to can speak' },
			{ value: 'd', label: 'perfecting my' },
		],
		points: { a: 1, b: 0, c: 0, d: 0 },
	},
	{
		id: 7,
		text: 'He ____ us that he had been to Paris.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'say' },
			{ value: 'b', label: 'told' },
			{ value: 'c', label: 'saying' },
			{ value: 'd', label: 'said' },
		],
		points: { a: 0, b: 1, c: 0, d: 0 },
	},
	{
		id: 8,
		text: 'Do you know what ____ to do?',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'I am required' },
			{ value: 'b', label: 'am I required' },
			{ value: 'c', label: 'I am requiring' },
			{ value: 'd', label: 'I require' },
		],
		points: { a: 1, b: 0, c: 0, d: 0 },
	},
	{
		id: 9,
		text: 'My brother has been in hospital. I wonder how he ____.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'is getting away' },
			{ value: 'b', label: 'is getting on' },
			{ value: 'c', label: 'gets on' },
			{ value: 'd', label: 'has got across' },
		],
		points: { a: 0, b: 1, c: 0, d: 0 },
	},
	{
		id: 10,
		text: 'I was walking along the road when the car ____.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'crashed' },
			{ value: 'b', label: 'was crashing' },
			{ value: 'c', label: 'had crashed' },
			{ value: 'd', label: 'crashes' },
		],
		points: { a: 1, b: 0, c: 0, d: 0 },
	},
	{
		id: 11,
		text: 'You ____ see him tonight.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'will' },
			{ value: 'b', label: 'are' },
			{ value: 'c', label: 'have' },
			{ value: 'd', label: 'want' },
		],
		points: { a: 1, b: 0, c: 0, d: 0 },
	},
	{
		id: 12,
		text: 'If you ____ the box, you will find a present.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'have opened' },
			{ value: 'b', label: 'open' },
			{ value: 'c', label: 'opened' },
			{ value: 'd', label: 'are opening' },
		],
		points: { a: 0, b: 1, c: 0, d: 0 },
	},
	{
		id: 13,
		text: "I've no idea where __________ .",
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'is he going' },
			{ value: 'b', label: 'he going' },
			{ value: 'c', label: 'he is going' },
			{ value: 'd', label: 'is going' },
		],
		points: { a: 0, b: 0, c: 1, d: 0 },
	},
	{
		id: 14,
		text: 'She __________ be quite overweight when she was a teenager.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'would' },
			{ value: 'b', label: 'is used to' },
			{ value: 'c', label: 'used to' },
			{ value: 'd', label: 'has been' },
		],
		points: { a: 0, b: 0, c: 1, d: 0 }, // used to = 1
	},
	{
		id: 15,
		text: 'He liked the party, __________ ?',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'isn’t he' },
			{ value: 'b', label: 'didn’t he' },
			{ value: 'c', label: 'hasn’t he' },
			{ value: 'd', label: 'doesn’t he' },
		],
		points: { a: 0, b: 1, c: 0, d: 0 },
	},
	{
		id: 16,
		text: 'I __________ go away next week.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'would like' },
			{ value: 'b', label: 'like' },
			{ value: 'c', label: 'like to' },
			{ value: 'd', label: 'would like to' },
		],
		points: { a: 0, b: 0, c: 0, d: 1 },
	},
	{
		id: 17,
		text: 'After __________ his report he was back to work.',
		description: 'Выберите правильный вариант ответа',
		options: [
			{ value: 'a', label: 'write' },
			{ value: 'b', label: 'to write' },
			{ value: 'c', label: 'wrote' },
			{ value: 'd', label: 'writing' },
		],
		points: { a: 0, b: 0, c: 0, d: 1 },
	},
];

export const getResult = (totalPoints: number): string => {
	const max = questions.length;
	const percent = (totalPoints / max) * 100;

	if (percent <= 0 && percent <= 29) return 'Отличный результат! Вы профи в тестировании.';
	if (percent >= 30 && percent <= 58) return 'Хороший уровень. Есть куда расти.';
	if (percent >= 59 && percent <= 82) return 'Средний результат. Подтяните теорию.';
	if (percent >= 83 && percent <= 94) return 'Средний результат. Подтяните теорию.';
	if (percent >= 95) return 'Средний результат. Подтяните теорию.';
	return 'Начальный уровень. Самое время начинать!';
};
