import { Button, CircularProgress, Skeleton, Stack, Typography } from '@mui/material';
import { useAddAlbumMutation, useFetchAlbumsQuery } from '../store';
import AlbumItem from './AlbumItem';

const AlbumList = ({ user }) => {
	const { data, isError, isFetching, isLoading } = useFetchAlbumsQuery(user);
	const [addAlbum, result] = useAddAlbumMutation();

	const handleAddAlbum = async () => {
		return await addAlbum(user).unwrap();
	};

	let content;
	if (isFetching && isLoading) {
		content = <Skeleton variant="rectangular" sx={{ width: '100%', height: '200px', borderRadius: '30px' }} />;
		return content;
	} else if (isError) {
		content = <div>Hata var</div>;
		return content;
	} else {
		content = data?.map((album) => {
			return <AlbumItem key={album.id} album={album} />;
		});
	}

	return (
		<>
			<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} margin={1}>
				<Typography component={'h1'} fontSize={16}>
					{user.name} Albümü
				</Typography>
				<Button color="info" variant="outlined" onClick={handleAddAlbum} disabled={result.isLoading}>
					{result.isLoading ? <CircularProgress style={{ width: '25px', height: '25px' }} /> : <span>Album Ekle</span>}
				</Button>
			</Stack>
			{content}
		</>
	);
};

export default AlbumList;
