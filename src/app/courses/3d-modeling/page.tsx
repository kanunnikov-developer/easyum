import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import DefaultLayout from '../widgets/defaultLayout';
import { threedCourses } from '../lib/threedCourses';

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout span='Курсы' title='по 3D Моделированию' activeTab='threeD' coursesCard={threedCourses} />
		</div>
	);
}
