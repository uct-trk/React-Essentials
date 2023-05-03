import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import WrongPath from './components/WrongPath';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/mission" element={<Mission />} />
				<Route path="*" element={<WrongPath />} />
			</Routes>
		</div>
	);
}

export default App;
