import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { mobileCourses } from '../lib/mobileCourses';

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по моб. разработке' activeTab='mobile' coursesCard={mobileCourses} />
		</div>
	);
}
