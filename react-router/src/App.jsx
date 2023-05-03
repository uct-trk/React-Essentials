import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Company from './components/Company';
import History from './components/History';
import Home from './components/Home';
import MemberDetail from './components/MemberDetail';
import Members from './components/Members';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import Team from './components/Team';
import WrongPath from './components/WrongPath';

// Lazy load oluşturuyoruz
const LazyAboutUs = React.lazy(() => import('./components/About'));

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/about"
					element={
						<Suspense>
							<LazyAboutUs />
						</Suspense>
					}
				/>
				<Route path="/mission" element={<Mission />} />
				<Route path="/history" element={<History />}>
					<Route path="company" element={<Company />} />
					<Route path="team" element={<Team />} />
				</Route>
				<Route path="/members" element={<Members />} />
				<Route path="/members/:memberId" element={<MemberDetail />} />
				<Route path="*" element={<WrongPath />} />
			</Routes>
		</div>
	);
}

export default App;
