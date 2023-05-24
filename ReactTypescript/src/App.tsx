import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';

function App() {
	const instructor = {
		firstName: 'Ugurcan',
		lastName: 'Turk',
	};

	const instructorList = [
		{
			id: 1,
			firstName: 'Ugurcan',
			lastName: 'Turk',
		},
		{
			id: 2,
			firstName: 'Can',
			lastName: 'Boz',
		},
		{
			id: 3,
			firstName: 'Ayşe',
			lastName: 'Ak',
		},
	];

	return (
		<div className="App">
			<Home name="Ugurcan" courseNumber={15} isBest={true} />
			<Instructor instructor={instructor} />
			<InstructorList instructorList={instructorList} />
		</div>
	);
}

export default App;
