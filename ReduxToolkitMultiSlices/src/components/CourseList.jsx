import { useDispatch, useSelector } from 'react-redux';
import { deleteCourse, updateCourse } from '../store/slices/courseSlice';
import { useState } from 'react';

const CourseList = () => {
	const { data: courses, searchTerm } = useSelector((state) => state.courses);

	const dispatch = useDispatch();
	const [editingCourse, setEditingCourse] = useState(null);

	const handleEditCourse = (course) => {
		setEditingCourse(course);
	};

	const handleSaveCourse = (course) => {
		dispatch(updateCourse(course));
		setEditingCourse(null);
	};
	const handleBackCourse = () => {
		setEditingCourse(null);
	};

	const renderedCourses = courses
		.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
		.map((course) => {
			if (editingCourse && editingCourse.id === course.id) {
				return (
					<div key={course.id} className="panel">
						<input type="text" className="input is-expanded mb-3" value={editingCourse.name} onChange={(e) => setEditingCourse({ ...editingCourse, name: e.target.value })} />
						<input type="text" className="input is-expanded mb-3" value={editingCourse.description} onChange={(e) => setEditingCourse({ ...editingCourse, description: e.target.value })} />
						<input type="number" className="input is-expanded" value={editingCourse.cost} onChange={(e) => setEditingCourse({ ...editingCourse, cost: e.target.value })} />
						<div>
							<button className="button is-success mt-3 mr-2" onClick={() => handleSaveCourse(editingCourse)}>
								Kaydet
							</button>
							<button className="button is-warning mt-3" onClick={() => handleBackCourse()}>
								Vazgeç
							</button>
						</div>
					</div>
				);
			}

			return (
				<div key={course.id} className="panel">
					<h1>{course.name}</h1>
					<p>{course.description}</p>
					<p>{course.cost} TL</p>
					<div className="mt-3">
						<button className="button is-danger mr-2" onClick={() => dispatch(deleteCourse(course.id))}>
							Sil
						</button>
						<button className="button is-primary" onClick={() => handleEditCourse(course)}>
							Düzenle
						</button>
					</div>
				</div>
			);
		});

	return <div className="courseList">{renderedCourses}</div>;
};

export default CourseList;
