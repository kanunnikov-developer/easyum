import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import { testingCourses } from '../lib/testingCourses';
import DefaultLayout from '../widgets/defaultLayout';

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по тестированию' activeTab='testing' coursesCard={testingCourses} />
		</div>
	);
}
