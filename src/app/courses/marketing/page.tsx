import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { marketingCourses } from '../lib/marketingCourses';

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по маркетингу' activeTab='marketing' coursesCard={marketingCourses} />
		</div>
	);
}
