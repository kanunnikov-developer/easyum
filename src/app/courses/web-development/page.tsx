import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { webCourses } from '../lib/webCourses';

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по Web разработке' activeTab='web' coursesCard={webCourses} />
		</div>
	);
}
