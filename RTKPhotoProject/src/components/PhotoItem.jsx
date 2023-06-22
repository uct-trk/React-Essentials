import { Button, CircularProgress, ImageListItem, ImageListItemBar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRemovePhotoMutation } from '../store';

const PhotoItem = ({ photo }) => {
	const [deletePhoto, result] = useRemovePhotoMutation();

	const handleDelete = async () => {
		return await deletePhoto(photo).unwrap();
	};
	return (
		<>
			<ImageListItem>
				<img src={`${photo.url}?w=164&h=164&fit=crop&auto=format`} srcSet={`${photo.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} alt={photo.id} loading="lazy" />
				<ImageListItemBar
					title={photo.name}
					actionIcon={
						<Button onClick={handleDelete} disabled={result.isLoading}>
							{result.isLoading ? <CircularProgress style={{ width: '25px', height: '25px' }} /> : <DeleteIcon />}
						</Button>
					}
				/>
			</ImageListItem>
		</>
	);
};

export default PhotoItem;
