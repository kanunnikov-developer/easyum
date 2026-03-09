import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import styles from './styles.module.css';
import TestsTabs from './ui/tabs';
import cn from 'classnames';

export default function Page() {
	return (
		<div className={cn('container', styles.page)}>
			<Breadcrumbs />
			<section className={styles.header}>
				<h1>
					<span className='accent'>Все тесты</span> академии EasyUM
				</h1>
				<p>
					Наши специалисты разработали тесты, чтобы помочь вам найти свою идеальную IT-профессию. Также тесты определят
					уровень ваших знаний в выбранном направлении и укажут путь для совершенствования.
				</p>
				<p>Проходить тесты быстро и легко. Попробуйте!</p>
			</section>

			<section className={styles.tabsTest}>
				<TestsTabs />
			</section>
		</div>
	);
}
