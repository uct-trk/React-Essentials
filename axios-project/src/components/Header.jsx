import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Header = ({ handleSearch }) => {
	const [value, setValue] = useState('');

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		handleSearch(value);
	};
	return (
		<section className="section">
			<div className="search-div">
				<form onSubmit={handleFormSubmit}>
					<div className="search-wrapper">
						<label>Ne Arıyorsun</label>
						<input type="text" onChange={handleChange} value={value} />
					</div>
				</form>
			</div>
		</section>
	);
};

export default Header;
