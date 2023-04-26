import './App.css';
import Header from './components/Header';
import './App.css';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList';

function App() {
	const [images, setImages] = useState([]);

	const handleSearch = async (query) => {
		const result = await searchImages(query);
		setImages(result);
	};
	console.log(images?.data?.results, 'img');
	return (
		<div>
			<Header handleSearch={handleSearch} />
			<ImageList images={images} />
		</div>
	);
}

export default App;
