import Brends from './_components/Brends/Brends';
import Courses from './_components/Courses/Courses';
import Discount from './_components/Discount/Discount';
import Feedback from './_components/Feedback/Feedback';
import Hero from './_components/Hero/Hero';
import Reviews from './_components/Reviews/Reviews';
import Statistics from './_components/Statistics/Statistics';
import WhyEasyum from './_components/WhyEasyum/WhyEasyum';
import styles from './page.module.css';
import cn from 'classnames';

export default function Home() {
	return (
		<main className={cn('container', styles.main)}>
			<Hero />
			<Discount />
			<WhyEasyum />
			<Courses />
			<Statistics />
			<Reviews />
			<Brends />
			<Feedback />
		</main>
	);
}
