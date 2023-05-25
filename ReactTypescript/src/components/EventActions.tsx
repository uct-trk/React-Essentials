import { useState } from 'react';

const EventActions = () => {
	const [value, setValue] = useState('');
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number): void => {
		console.log(event, id);
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	console.log(value);
	return (
		<div>
			<button onClick={(e) => handleClick(e, 4)}>Sil</button>
			<input type="text" onChange={handleChange} />
		</div>
	);
};

export default EventActions;
