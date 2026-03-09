import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from '../english-level/styles.module.css';
import TestForm from './ui/TestForm';
import SwiperBlock from '../english-level/ui/swiper/swipre';
import cn from 'classnames';

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<div className={styles.header}>
				<Breadcrumbs />
				<h2>
					<span className='accent'>Тест: </span>Помогите выбрать курс, исходя из моих потребностей
				</h2>
				<div className={styles.form}>
					<TestForm />
				</div>
				<div className={styles.description}>
					<p>
						Хотите устроиться в международную IT-компанию или начать свой бизнес? Создать сайт или открыть
						интернет-магазин, который сможете наполнять и продвигать без затрат на услуги специалистов? Возможно, вам
						нужно научиться верстать сайты или художественно оформлять веб-проекты, или создавать объекты трехмерной
						графики?
					</p>
					<br />
					<p>
						Образовательный центр EasyUM поможет разобраться во всем многообразии IT-курсов. Мы подберем курс
						персонально для вас. Проходите тест – и вы узнаете, какой курс соответствует вашим потребностям и
						возможностям.
					</p>
				</div>
				<div className={styles.gallerry}>
					<h2>Другие тесты</h2>
					<SwiperBlock />
				</div>
			</div>
		</div>
	);
}
