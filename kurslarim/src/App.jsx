import { useEffect, useState } from 'react';
import axios from 'axios';
import Courses from './components/Courses';
import Loading from './components/Loading';
import './App.css';

function App() {
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await axios.get('http://localhost:3000/courses');
			setCourses(response.data);
			setLoading(false);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const handleDelete = (id) => {
		const afterDeletedCourses = courses.filter((course) => course.id !== id);
		setCourses(afterDeletedCourses);
	};

	if (loading)
		return (
			<>
				<Loading />
			</>
		);

	return (
		<>
			{courses.length > 0 ? (
				<Courses courses={courses} handleDelete={handleDelete} />
			) : (
				<>
					<h2>Kurs Kalmadı</h2> <button onClick={fetchData}>Tekrar Yükle</button>
				</>
			)}
		</>
	);
}

export default App;
