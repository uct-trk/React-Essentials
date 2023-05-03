import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="nav-wrapper">
			<NavLink to={'/'}>Home</NavLink>
			<NavLink to={'/about'}>About</NavLink>
			<NavLink to={'/history'}>History</NavLink>
		</nav>
	);
};

export default Navbar;
