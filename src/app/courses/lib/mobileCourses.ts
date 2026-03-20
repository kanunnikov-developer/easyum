export interface CardCourses {
	id: string;
	img: string;
	link: string;
}

export const mobileCourses: CardCourses[] = [
	{
		id: '23',
		img: '/courses/mobile/android.svg',
		link: '/courses/mobile-development/java-android',
	},
	{
		id: '24',
		img: '/courses/mobile/ios.svg',
		link: '/courses/mobile-development/mobiledev-ios',
	},
];
