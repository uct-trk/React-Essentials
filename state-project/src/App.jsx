import { useState } from 'react';
import Course from './components/Course';

function App() {
	const [courses, setCourses] = useState([]);

	const getRandom = () => {
		const courseArray = ['React', 'Angular', 'Vue', 'Svelte'];

		return courseArray[Math.floor(Math.random() * courseArray.length)];
	};

	const handleClick = () => {
		setCourses([...courses, getRandom()]);
	};

	return (
		<>
			<div>
				<button onClick={handleClick}>Rastgele Kurs Ekle</button>
				{courses?.map((item, index) => (
					<Course key={index} courseTitle={item} />
				))}
			</div>
		</>
	);
}

export default App;
