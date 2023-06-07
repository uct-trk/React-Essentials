import { Alert, Box, Button, IconButton, Snackbar, SnackbarOrigin, Stack } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const SnackbarMUI = () => {
	const [state, setState] = React.useState<State>({
		opens: false,
		vertical: 'top',
		horizontal: 'center',
	});
	const { vertical, horizontal, opens } = state;
	const [open, setOpen] = React.useState(false);
	const [open1, setOpen1] = React.useState(false);
	const [opened, setOpened] = React.useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const handleClick1 = () => {
		setOpen1(true);
	};

	const handleClose1 = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen1(false);
	};

	const handleOpenSnack = () => {
		setOpened(true);
	};

	const handleClose2 = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpened(false);
	};

	const handleClicks = (newState: SnackbarOrigin) => () => {
		setState({ opens: true, ...newState });
	};

	const handleCloses = () => {
		setState({ ...state, opens: false });
	};

	const buttons = (
		<React.Fragment>
			<Button
				onClick={handleClicks({
					vertical: 'top',
					horizontal: 'center',
				})}
			>
				Top-Center
			</Button>
			<Button
				onClick={handleClicks({
					vertical: 'top',
					horizontal: 'right',
				})}
			>
				Top-Right
			</Button>
			<Button
				onClick={handleClicks({
					vertical: 'bottom',
					horizontal: 'right',
				})}
			>
				Bottom-Right
			</Button>
			<Button
				onClick={handleClicks({
					vertical: 'bottom',
					horizontal: 'center',
				})}
			>
				Bottom-Center
			</Button>
			<Button
				onClick={handleClicks({
					vertical: 'bottom',
					horizontal: 'left',
				})}
			>
				Bottom-Left
			</Button>
			<Button
				onClick={handleClicks({
					vertical: 'top',
					horizontal: 'left',
				})}
			>
				Top-Left
			</Button>
		</React.Fragment>
	);

	const action = (
		<React.Fragment>
			<Button color="secondary" size="small" onClick={handleClose}>
				UNDO
			</Button>
			<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	const aksiyon = (
		<>
			<Button color="secondary" size="small" onClick={handleClose2}>
				Geri al
			</Button>
			<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose2}>
				<CloseIcon fontSize="small" />
			</IconButton>
		</>
	);
	return (
		<>
			<Button onClick={handleClick}>Open simple snackbar</Button>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message="Note archived" action={action} />

			<Stack mt={4}>
				<Button variant="outlined" onClick={handleClick1}>
					Open success snackbar
				</Button>
				<Snackbar open={open1} autoHideDuration={6000} onClose={handleClose1}>
					<Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>
						This is a success message!
					</Alert>
				</Snackbar>
			</Stack>

			<Stack>
				{buttons}
				<Snackbar anchorOrigin={{ vertical, horizontal }} open={opens} onClose={handleCloses} message="I love snacks" key={vertical + horizontal} />
			</Stack>

			<Box>
				<Button onClick={handleOpenSnack}>Snackbarı aç</Button>
				<Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={opened} action={aksiyon} message="Snackbar mesajı" onClose={handleClose2} autoHideDuration={2000} />
			</Box>
		</>
	);
};

export default SnackbarMUI;
