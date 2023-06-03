import * as React from 'react';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import MailIcon from '@mui/icons-material/Mail';

const BadgeMUI = () => {
	const [count, setCount] = React.useState(1);
	const [invisible, setInvisible] = React.useState(false);

	const handleBadgeVisibility = () => {
		setInvisible(!invisible);
	};

	return (
		<>
			<Badge badgeContent={4} color="primary">
				<MailIcon color="action" />
			</Badge>
			<Badge badgeContent={4} color="success">
				<MailIcon color="action" />
			</Badge>

			<Box
				sx={{
					color: 'action.active',
					display: 'flex',
					flexDirection: 'column',
					'& > *': {
						marginBottom: 2,
					},
					'& .MuiBadge-root': {
						marginRight: 4,
					},
				}}
			>
				<div>
					<Badge color="secondary" badgeContent={count} max={10}>
						<MailIcon />
					</Badge>
					<ButtonGroup>
						<Button
							aria-label="reduce"
							onClick={() => {
								setCount(Math.max(count - 1, 0));
							}}
						>
							<RemoveIcon fontSize="small" />
						</Button>
						<Button
							aria-label="increase"
							onClick={() => {
								setCount(count + 1);
							}}
						>
							<AddIcon fontSize="small" />
						</Button>
					</ButtonGroup>
				</div>
				<div>
					<Badge color="primary" badgeContent={3} invisible={invisible}>
						<MailIcon />
					</Badge>
					<FormControlLabel sx={{ color: 'text.primary' }} control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />} label="Show Badge" />
				</div>
			</Box>
		</>
	);
};

export default BadgeMUI;
