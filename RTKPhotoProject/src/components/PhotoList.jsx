import { useAddPhotoMutation, useFetchPhotoQuery } from '../store';
import { Button, CircularProgress, ImageList, Skeleton, Stack, Typography } from '@mui/material';
import PhotoItem from './PhotoItem';

const PhotoList = ({ album }) => {
	const { data, isError, isFetching, isLoading } = useFetchPhotoQuery(album);
	const [addPhoto, result] = useAddPhotoMutation();

	const handleAddPhoto = async () => {
		return await addPhoto(album).unwrap();
	};

	let content;
	if (isFetching && isLoading) {
		content = <Skeleton variant="rectangular" sx={{ width: '100%', height: '200px', borderRadius: '30px' }} />;
		return content;
	} else if (isError) {
		content = <div>Hata var</div>;
		return content;
	} else {
		content =
			data?.length > 0 ? (
				<ImageList sx={{ width: 'auto', height: 'auto' }} cols={3} rowHeight={250}>
					{data?.map((photo) => {
						return <PhotoItem key={photo.id} photo={photo} />;
					})}
				</ImageList>
			) : (
				<Typography>Fotograf yok! </Typography>
			);
	}

	return (
		<>
			<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} margin={1}>
				<Typography component={'h1'} fontSize={16}>
					{album.name} Fotoğrafları
				</Typography>
				<Button color="info" variant="contained" onClick={handleAddPhoto} disabled={result.isLoading}>
					{result.isLoading ? <CircularProgress style={{ width: '25px', height: '25px' }} /> : <span>Foto Ekle</span>}
				</Button>
			</Stack>
			{content}
		</>
	);
};

export default PhotoList;
