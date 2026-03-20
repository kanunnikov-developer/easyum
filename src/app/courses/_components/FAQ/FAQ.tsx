'use client';

import styles from './styles.module.css';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; // или свои иконки

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const faqItems = [
		{
			question: 'Сколько в среднем процент трудоустроенных студентов?',
			answer:
				'Если говорить честно, то около 70 - 75% наших выпускников трудоустраивается в среднем за 2-3 месяца после окончания курса. Остальные - или не закончили курс по своим причинам, или просто не нуждаются в новой работе.',
		},
		{
			question: 'Можно записаться на курс, если у меня нет русского паспорта?',
			answer: 'Конечно можно, гражданин любой страны может пройти у нас курс. ',
		},
		{
			question: 'Я совсем новичок. У меня получится?',
			answer:
				'Получится! Курс рассчитан на слушателей, которые полностью с 0, и совершенно ничего не знает из области it.',
		},
		{
			question: 'А что если я днем работаю? Я смогу учиться?',
			answer:
				'Да! Курс рассчитан специально для тех кто работает, и имеет только только по 2-4 часов свободного времени в неделю, для выполнения домашнего задания. График занятий выстраивается именно в вечернее время, чтоб было комфортно совмещать с работой или учебой.',
		},
		{
			question: 'Где территориально в очном формате проходят занятия?',
			answer:
				'Москва: центр города (м. Павелецкая 5 минут), Шлюзовая набережная 6 стр 4. \n Казань: центр города, Чернышевского 33. Во всех остальных городах все наши занятия проходят на территории коворкингов в центре города. Так же напомним что любой наш курс можно пройти в режиме ОНЛАЙН или по ВИДЕО-КУРСУ.',
		},
	];

	const toggleItem = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>
					Часто задаваемые <span className='accent'>вопросы</span>
				</h2>

				<div className={styles.list}>
					{faqItems.map((item, index) => (
						<div key={index} className={`${styles.item} ${openIndex === index ? styles.open : ''}`}>
							<button className={styles.question} onClick={() => toggleItem(index)}>
								<span>{item.question}</span>
								{openIndex === index ? <ChevronUp className={styles.icon} /> : <ChevronDown className={styles.icon} />}
							</button>

							<div className={styles.answerWrapper}>
								<div className={styles.answer}>{item.answer}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
