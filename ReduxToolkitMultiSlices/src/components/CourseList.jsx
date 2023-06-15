import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse } from '../store/slices/courseSlice';

const CourseList = () => {
	const { data: courses } = useSelector((state) => state.courses);
	const dispatch = useDispatch();

	const renderedCourses = courses?.map((course) => {
		return (
			<div key={course.id} className="panel">
				<h1>{course.name}</h1>
				<p>{course.description}</p>
				<p>{course.cost}</p>
				<button className="button is-danger" onClick={() => dispatch(deleteCourse(course.id))}>
					Sil
				</button>
			</div>
		);
	});

	return <div className="courseList">{renderedCourses}</div>;
};

export default CourseList;
