import { Link } from 'react-router-dom';
import BannerImage from '../assets/banneryeni.jpg';
import '../styles/home.css';

const Home = () => {
	return (
		<div className="mainPage" style={{ backgroundImage: `url(${BannerImage})` }}>
			<div className="order">
				<Link to="/menu">
					<button>SİPARİŞ VER</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;
