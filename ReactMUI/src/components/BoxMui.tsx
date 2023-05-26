import { Box } from '@mui/material';
import React from 'react';

const BoxMui = () => {
	return (
		<Box
			sx={{
				width: 300,
				height: 300,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'orange',
				backgroundColor: 'primary.dark',
				'&:hover': {
					backgroundColor: 'primary.main',
					cursor: 'pointer',
					opacity: [0.9, 0.8, 0.7],
				},
			}}
		>
			BoxMui
		</Box>
	);
};

export default BoxMui;
