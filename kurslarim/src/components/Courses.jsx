import { useState } from 'react';
import Course from './Course';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Courses = ({ courses, handleDelete }) => {
	const [index, setIndex] = useState(0);
	const { description, title, img, price, id } = courses[index];

	// manuel basit bir slider oluşturuldu
	const checkIndex = (newIndex) => {
		if (newIndex < 0) {
			return courses?.length - 1;
		}
		if (newIndex > courses.length - 1) {
			return 0;
		}
		return newIndex;
	};

	const prevCourse = () => {
		setIndex((i) => {
			let newIndex = i - 1;
			return checkIndex(newIndex);
		});
	};
	console.log(index, 'index');

	const nextCourse = () => {
		setIndex((i) => {
			let newIndex = i + 1;
			return checkIndex(newIndex);
		});
	};

	return (
		<div className="courseMainDiv">
			<div className="">
				<h2>Kursalar</h2>
			</div>
			<div>
				<button onClick={prevCourse}>
					<FaChevronLeft></FaChevronLeft>
				</button>
				<div className="card">
					<div className="desc-wrapper">
						<img src={img} alt="" />
						<p>{description}</p>
					</div>
					<div className="cardTitlePrice">
						<div>
							<h2 className="cardTitle">{title}</h2>
							<h2 className="cardPrice">{price} TL</h2>
						</div>
					</div>
				</div>
				<button onClick={nextCourse}>
					<FaChevronRight></FaChevronRight>
				</button>
				{/* {courses?.map((course) => (
					<Course key={course.id} {...course} handleDelete={handleDelete} />
				))} */}
			</div>
		</div>
	);
};

export default Courses;
