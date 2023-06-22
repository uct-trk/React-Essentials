import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import ExpandeblePanel from './ExpandeblePanel';
import PhotoList from './PhotoList';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRemoveAlbumMutation } from '../store';

const AlbumItem = ({ album }) => {
	const [deleteAlbum, result] = useRemoveAlbumMutation();

	const handleDelete = async () => {
		return await deleteAlbum(album).unwrap();
	};

	const header = (
		<Stack direction={'row'} alignItems={'center'}>
			<Button onClick={handleDelete} disabled={result.isLoading}>
				{result.isLoading ? <CircularProgress style={{ width: '25px', height: '25px' }} /> : <DeleteIcon />}
			</Button>
			<Typography>{album.name}</Typography>
		</Stack>
	);
	return (
		<Stack>
			<ExpandeblePanel header={header}>
				<PhotoList album={album} />
			</ExpandeblePanel>
		</Stack>
	);
};

export default AlbumItem;
