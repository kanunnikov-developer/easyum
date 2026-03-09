import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import { allCourses } from './lib/allCourses';
import DefaultLayout from './widgets/defaultLayout';

export default function Page() {
	return (
		<section className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Все курсы' title='EasyUM' activeTab='all' coursesCard={allCourses} />
		</section>
	);
}
