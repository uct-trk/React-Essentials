import EventActions from './components/EventActions';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';
import LoginCheck from './components/LoginCheck';
import ReducerExample from './components/ReducerExample';
import Request from './components/Request';

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
			<Request status="loading" />
			<EventActions />
			<LoginCheck />
			<ReducerExample />
		</div>
	);
}

export default App;
