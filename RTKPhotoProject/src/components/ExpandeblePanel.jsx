import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Stack } from '@mui/material';
import { useState } from 'react';

const ExpandeblePanel = ({ children, header }) => {
	const [expanded, setExpanded] = useState(false);

	const handleClick = () => {
		setExpanded(!expanded);
	};
	console.log(expanded);
	return (
		<Stack padding={3} sx={{ backgroundColor: 'lightgrey', borderRadius: '30px' }}>
			<Stack direction={'row'} justifyContent={'space-between'}>
				<Stack>{header}</Stack>
				<Stack onClick={handleClick} sx={{ cursor: 'pointer' }}>
					{expanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowLeftIcon />}
				</Stack>
			</Stack>
			{expanded && children}
		</Stack>
	);
};

export default ExpandeblePanel;
