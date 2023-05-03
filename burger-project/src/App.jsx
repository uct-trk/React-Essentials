import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import Home from './components/Home';
import { Menu } from './components/Menu';
import Navbar from './components/Navbar';
import WrongPage from './components/WrongPage';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/menu" element={<Menu />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<WrongPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
