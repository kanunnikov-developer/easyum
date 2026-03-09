import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { designCourses } from '../lib/designCourses';

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по дизайну' activeTab='design' coursesCard={designCourses} />
		</div>
	);
}
