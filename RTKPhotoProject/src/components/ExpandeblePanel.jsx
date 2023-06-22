import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Stack } from '@mui/material';

const ExpandeblePanel = ({ children, header }) => {
	return (
		<Stack padding={3} sx={{ backgroundColor: 'lightgrey', borderRadius: '30px' }}>
			<Stack direction={'row'} justifyContent={'space-between'}>
				<Stack>{header}</Stack>
				<Stack>
					<KeyboardArrowLeftIcon />
				</Stack>
			</Stack>
			{children}
		</Stack>
	);
};

export default ExpandeblePanel;
