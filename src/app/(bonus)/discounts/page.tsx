import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import cn from 'classnames';

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<Breadcrumbs />
			<h1 className='accent'>Скидки EasyUM</h1>
			<section className={styles.discount__section}>
				<div className={styles.card_grid}>
					{/*Первая скидка*/}
					<div className={styles.card_left}>
						<div className={styles.image}>
							<img src={`/bonus/discounts/img1.svg`} alt='Картинка' />
						</div>
						<div className={styles.info}>
							<div className={styles.text}>
								<h2>СКИДКА НА ПОВТОР КУРСА</h2>
								<p>{`Если вы прошли курс, и чувствуете \n что не до конца поняли его, вы можете \n пройти его повторно со скидкой -50%!`}</p>
								<span>*Срок действия не ограничен</span>
							</div>
						</div>
					</div>

					{/*Вторая скидка*/}
					<div className={styles.card_right}>
						<div className={styles.info}>
							<div className={styles.text}>
								<h2>СКИДКА НА ВТОРОЙ КУРС</h2>
								<p>{`В течении 10 дней после покупки курса, \n скидка - 30% на последующий в подарок!`}</p>
								<span>
									*Скидка 30% распространяется на курс равной или меньшей длительности. При покупке курса большей
									длительности, скидка распространяется на количество месяцев равное первому курсу
								</span>
							</div>
						</div>
						<div className={styles.image}>
							<img src={`/bonus/discounts/img2.svg`} alt='Картинка' />
						</div>
					</div>

					{/*Тертья скидка*/}
					<div className={styles.card_left}>
						<div className={styles.image}>
							<img src={`/bonus/discounts/img3.svg`} alt='Картинка' />
						</div>
						<div className={styles.info}>
							<div className={styles.text}>
								<h2>СКИДКА НА ВСЁ</h2>
								<p>{`После покупки любого курса -10% \n на все дальнейшие покупки!`}</p>
								<span>*Скидка распространяется на все курсы, срок акции не ограничен</span>
							</div>
						</div>
					</div>

					{/*Четвертая скидка*/}
					<div className={styles.card_right}>
						<div className={styles.info}>
							<div className={styles.text}>
								<h2>СКИДКА ДЛЯ ДРУГА</h2>
								<p>{`Для наших клиентов -15% \n на все курсы при записи друга!`}</p>
								<span>*Скидка распространяется на все курсы, срок акции не ограничен</span>
							</div>
						</div>
						<div className={styles.image}>
							<img src={`/bonus/discounts/img4.svg`} alt='Картинка' />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
