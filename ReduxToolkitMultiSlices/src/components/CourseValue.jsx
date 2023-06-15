import { useSelector } from 'react-redux';

const CourseValue = () => {
	const totalCost = useSelector(({ courses: { data, searchTerm } }) => {
		return data.filter((course) => course.name.toLowerCase().includes(searchTerm.toLowerCase())).reduce((acc, course) => acc + parseFloat(course.cost), 0);
	});

	return <div className="coursePrice mx-5">Toplam Tutar : {totalCost} TL</div>;
};

export default CourseValue;
