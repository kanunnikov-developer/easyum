import Breadcrumbs from '@/widgets/breadcrumbs/breadcrumbs';
import { programmingCourses } from '../lib/programmingCourses';
import DefaultLayout from '../widgets/defaultLayout';

export default function Page() {
	return (
		<div className='container'>
			<Breadcrumbs />
			<DefaultLayout
				span='Курсы'
				title='по программированию'
				activeTab='programming'
				coursesCard={programmingCourses}
			/>
		</div>
	);
}
