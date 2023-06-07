import { Alert, AlertTitle, Box, Button, Collapse, IconButton, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const AlertMUI = () => {
	const [open, setOpen] = React.useState(true);
	return (
		<>
			<Stack sx={{ width: '100%' }} spacing={2}>
				<Alert severity="error">This is an error alert — check it out!</Alert>
				<Alert severity="warning">This is a warning alert — check it out!</Alert>
				<Alert severity="info">This is an info alert — check it out!</Alert>
				<Alert severity="success">This is a success alert — check it out!</Alert>
			</Stack>
			<Stack mt={4} sx={{ width: '100%' }} spacing={2}>
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>
					This is an error alert — <strong>check it out!</strong>
				</Alert>
				<Alert severity="warning">
					<AlertTitle>Warning</AlertTitle>
					This is a warning alert — <strong>check it out!</strong>
				</Alert>
				<Alert severity="info">
					<AlertTitle>Info</AlertTitle>
					This is an info alert — <strong>check it out!</strong>
				</Alert>
				<Alert severity="success">
					<AlertTitle>Success</AlertTitle>
					This is a success alert — <strong>check it out!</strong>
				</Alert>
			</Stack>

			<Stack mt={4} sx={{ width: '100%' }} spacing={2}>
				<Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
				<Alert
					action={
						<Button color="inherit" size="small">
							UNDO
						</Button>
					}
				>
					This is a success alert — check it out!
				</Alert>
			</Stack>

			<Box mt={4} sx={{ width: '100%' }}>
				<Collapse in={open}>
					<Alert
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									setOpen(false);
								}}
							>
								<CloseIcon fontSize="inherit" />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						Close me!
					</Alert>
				</Collapse>
				<Button
					disabled={open}
					variant="outlined"
					onClick={() => {
						setOpen(true);
					}}
				>
					Re-open
				</Button>
			</Box>

			<Stack mt={4} sx={{ width: '100%' }} spacing={2}>
				<Alert variant="filled" severity="error">
					This is an error alert — check it out!
				</Alert>
				<Alert variant="filled" severity="warning">
					This is a warning alert — check it out!
				</Alert>
				<Alert variant="filled" severity="info">
					This is an info alert — check it out!
				</Alert>
				<Alert variant="filled" severity="success">
					This is a success alert — check it out!
				</Alert>
			</Stack>
		</>
	);
};

export default AlertMUI;
