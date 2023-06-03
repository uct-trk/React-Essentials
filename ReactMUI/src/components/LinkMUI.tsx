import { Box, Link } from '@mui/material';
import React from 'react';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
const LinkMUI = () => {
	return (
		<>
			<Box
				sx={{
					typography: 'body1',
					'& > :not(style) + :not(style)': {
						ml: 2,
					},
				}}
				onClick={preventDefault}
			>
				<Link href="#">Link</Link>
				<Link href="#" color="inherit">
					{'color="inherit"'}
				</Link>
				<Link href="#" variant="body2">
					{'variant="body2"'}
				</Link>
			</Box>
			<Box mt={6}>
				<Link href="#" underline="none">
					{'underline="none"'}
				</Link>
				<Link href="#" underline="hover">
					{'underline="hover"'}
				</Link>
				<Link href="#" underline="always">
					{'underline="always"'}
				</Link>
			</Box>
		</>
	);
};

export default LinkMUI;
