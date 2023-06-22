import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Stack } from '@mui/material';
import { useState } from 'react';

const ExpandeblePanel = ({ children, header }) => {
	const [expanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Stack padding={3} sx={{ backgroundColor: '#f7f9fa', borderRadius: '30px' }}>
			<Stack direction={'row'} justifyContent={'space-between'}>
				<Stack>{header}</Stack>
				<Stack onClick={handleClick} sx={{ cursor: 'pointer' }}>
					{expanded ? <KeyboardArrowDownIcon color="primary" /> : <KeyboardArrowLeftIcon color="primary" />}
				</Stack>
			</Stack>
			{expanded && children}
		</Stack>
	);
};

export default ExpandeblePanel;
