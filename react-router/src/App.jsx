import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Company from './components/Company';
import History from './components/History';
import Home from './components/Home';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import Team from './components/Team';
import WrongPath from './components/WrongPath';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/mission" element={<Mission />} />
				<Route path="/history" element={<History />}>
					<Route path="company" element={<Company />} />
					<Route path="team" element={<Team />} />
				</Route>
				<Route path="*" element={<WrongPath />} />
			</Routes>
		</div>
	);
}

export default App;
