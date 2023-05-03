import { useNavigate } from 'react-router-dom';

const Mission = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(-1);
	};
	return (
		<div>
			<h1>Mission</h1>
			<button onClick={handleNavigate}>Geriye Dön</button>
		</div>
	);
};

export default Mission;
