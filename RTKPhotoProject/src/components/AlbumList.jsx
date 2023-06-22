import { useFetchAlbumsQuery } from '../store';

const AlbumList = ({ user }) => {
	const { data, isError, isFetching, isLoading } = useFetchAlbumsQuery(user);

	return <div>{user.name} Albümü</div>;
};

export default AlbumList;
