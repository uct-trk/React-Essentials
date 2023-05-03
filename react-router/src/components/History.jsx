import { Link, Outlet } from 'react-router-dom';

// Outlet iç içe route geçerli olacağı zaman kullanırız

const History = () => {
	return (
		<div>
			<h1>History</h1>
			<nav className="nested-nav">
				<Link to={'company'}>Our Companies</Link>
				<Link to={'team'}>Management</Link>
			</nav>
			<Outlet />
		</div>
	);
};

export default History;
