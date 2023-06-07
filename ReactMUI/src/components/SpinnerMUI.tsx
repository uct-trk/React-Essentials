import { Box, Button, CircularProgress, Fab, LinearProgress, Stack } from '@mui/material';
import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import { green } from '@mui/material/colors';

const SpinnerMUI = () => {
	const [loading, setLoading] = React.useState(false);
	const [success, setSuccess] = React.useState(false);
	const timer = React.useRef<number>();

	const buttonSx = {
		...(success && {
			bgcolor: green[500],
			'&:hover': {
				bgcolor: green[700],
			},
		}),
	};

	React.useEffect(() => {
		return () => {
			clearTimeout(timer.current);
		};
	}, []);

	const handleButtonClick = () => {
		if (!loading) {
			setSuccess(false);
			setLoading(true);
			timer.current = window.setTimeout(() => {
				setSuccess(true);
				setLoading(false);
			}, 2000);
		}
	};
	return (
		<>
			<Stack>
				<Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
					<CircularProgress color="secondary" />
					<CircularProgress color="success" />
					<CircularProgress color="inherit" />
				</Stack>

				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<Box sx={{ m: 1, position: 'relative' }}>
						<Fab aria-label="save" color="primary" sx={buttonSx} onClick={handleButtonClick}>
							{success ? <CheckIcon /> : <SaveIcon />}
						</Fab>
						{loading && (
							<CircularProgress
								size={68}
								sx={{
									color: green[500],
									position: 'absolute',
									top: -6,
									left: -6,
									zIndex: 1,
								}}
							/>
						)}
					</Box>
					<Box sx={{ m: 1, position: 'relative' }}>
						<Button variant="contained" sx={buttonSx} disabled={loading} onClick={handleButtonClick}>
							Accept terms
						</Button>
						{loading && (
							<CircularProgress
								size={24}
								sx={{
									color: green[500],
									position: 'absolute',
									top: '50%',
									left: '50%',
									marginTop: '-12px',
									marginLeft: '-12px',
								}}
							/>
						)}
					</Box>
				</Box>
				<Box flexDirection={'column'} display={'flex'} gap={3} sx={{ width: '100%' }}>
					<LinearProgress />
					<LinearProgress color="secondary" />
					<LinearProgress color="success" />
					<LinearProgress color="inherit" />
				</Box>
			</Stack>
		</>
	);
};

export default SpinnerMUI;
