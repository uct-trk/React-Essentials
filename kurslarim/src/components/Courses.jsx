import Course from './Course';

const Courses = ({ courses, handleDelete }) => {
	return (
		<div className="courseMainDiv">
			<div className="">
				<h2>Kursalar</h2>
			</div>
			<div>
				{courses?.map((course) => (
					<Course key={course.id} {...course} handleDelete={handleDelete} />
				))}
			</div>
		</div>
	);
};

export default Courses;
