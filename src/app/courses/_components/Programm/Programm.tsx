import Image from 'next/image';
import styles from './styles.module.css';

interface Programs {
	title: string;
}

interface Props {
	mounth: string;
	programs: Programs[];
}

export default function Programm({ mounth, programs }: Props) {
	return (
		<section id='program' className={styles.programm}>
			<div className={styles.text}>
				<div className={styles.top}>
					<h2>
						<span className='accent'>Программа</span> курса
					</h2>
					<div className={styles.time}>
						<div className={styles.mounth}>{mounth}</div>
						<span>Длительность курса</span>
					</div>
				</div>
				<p className={styles.description}>
					Средний тепм прохождения курса: 4 часа в неделю в занятиях (теория и практика). После каждого занятия —
					практические задания на отработку новых навыков (на 8 - 12 часов в неделю).
				</p>
			</div>
			<div className={styles.programs}>
				{programs.map((program, index) => (
					<div className={styles.card} key={index}>
						<p>{program.title}</p>
					</div>
				))}
			</div>
			<div className={styles.bonus}>
				<div className={styles.bonus_text}>
					<p className={styles.bonus__title}>Подарочный модуль</p>
					<span>Дополнительные три урока по 2 часа в которых вы:</span>
					<ul>
						<li>Оформите портфолио в рамках курса</li>
						<li>Составите профессиональное резюме</li>
						<li>Подготовитесь и пройдете тестовое собеседование вместе со специалистом</li>
					</ul>
				</div>
				<div className={styles.image}>
					<Image src='/courses/ui/programm/bonus.svg' alt='Картинка' width={366} height={250} />
				</div>
			</div>
		</section>
	);
}
