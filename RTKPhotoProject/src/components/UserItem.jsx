import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import AlbumList from './AlbumList';
import ExpandeblePanel from './ExpandeblePanel';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRemoveUserMutation } from '../store';

const UserItem = ({ user }) => {
	const [deleteUser, result] = useRemoveUserMutation();

	const handleDelete = () => {
		deleteUser(user).unwrap();
	};

	const header = (
		<Stack direction={'row'} alignItems={'center'}>
			<Button onClick={handleDelete} disabled={result.isLoading}>
				{result.isLoading ? <CircularProgress style={{ width: '25px', height: '25px' }} /> : <DeleteIcon />}
			</Button>
			<Typography>{user.name}</Typography>
		</Stack>
	);

	return (
		<Stack margin={3}>
			<ExpandeblePanel header={header}>
				<AlbumList user={user} />
			</ExpandeblePanel>
		</Stack>
	);
};

export default UserItem;
