import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/mission');
	};
	return (
		<div>
			<h1>Home</h1>
			<button onClick={handleNavigate}>Mission</button>
		</div>
	);
};

export default Home;
