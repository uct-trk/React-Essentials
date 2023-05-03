import { useSearchParams } from 'react-router-dom';

// useSearchParams, React Router DOM kütüphanesinin bir parçası olarak gelen bir özel bir hook'tur. Bu hook, URL'deki sorgu parametrelerine erişmek ve manipüle etmek için kullanılır.

const Members = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const isActive = searchParams.get('filter') === 'active';
	return (
		<div>
			<h1>Members</h1>
			<button onClick={() => setSearchParams({ filter: 'active' })}>Aktif Üyeler</button>
			<button onClick={() => setSearchParams()}>Tüm Üyeler</button>
			{isActive ? <h2>Aktif Üyeler</h2> : <h2>Tüm Üyeler</h2>}
		</div>
	);
};

export default Members;
