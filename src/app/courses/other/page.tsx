import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { otherCourses } from '../lib/otherCourses';

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Другие курсы' title='EasyUM' activeTab='other' coursesCard={otherCourses} />
		</div>
	);
}
