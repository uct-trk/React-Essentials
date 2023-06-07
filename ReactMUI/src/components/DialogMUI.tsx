import { AppBar, Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Slide, Stack, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { blue } from '@mui/material/colors';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
	open: boolean;
	selectedValue: string;
	onClose: (value: string) => void;
}

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="left" ref={ref} {...props} />;
});

function SimpleDialog(props: SimpleDialogProps) {
	const { onClose, selectedValue, open } = props;

	const handleClose = () => {
		onClose(selectedValue);
	};

	const handleListItemClick = (value: string) => {
		onClose(value);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Set backup account</DialogTitle>
			<List sx={{ pt: 0 }}>
				{emails.map((email) => (
					<ListItem disableGutters>
						<ListItemButton onClick={() => handleListItemClick(email)} key={email}>
							<ListItemAvatar>
								<Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
									<PersonIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary={email} />
						</ListItemButton>
					</ListItem>
				))}
				<ListItem disableGutters>
					<ListItemButton autoFocus onClick={() => handleListItemClick('addAccount')}>
						<ListItemAvatar>
							<Avatar>
								<AddIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary="Add account" />
					</ListItemButton>
				</ListItem>
			</List>
		</Dialog>
	);
}

const DialogMUI = () => {
	const [open, setOpen] = React.useState(false);
	const [open1, setOpen1] = React.useState(false);
	const [open2, setOpen2] = React.useState(false);
	const [open3, setOpen3] = React.useState(false);
	const [selectedValue, setSelectedValue] = React.useState(emails[1]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value: string) => {
		setOpen(false);
		setSelectedValue(value);
	};

	const handleClickOpen1 = () => {
		setOpen1(true);
	};

	const handleClose1 = () => {
		setOpen1(false);
	};

	const handleClickOpen2 = () => {
		setOpen2(true);
	};

	const handleClose2 = () => {
		setOpen2(false);
	};

	const handleClickOpen3 = () => {
		setOpen3(true);
	};

	const handleClose3 = () => {
		setOpen3(false);
	};

	return (
		<div>
			<Stack>
				<Typography variant="subtitle1" component="div">
					Selected: {selectedValue}
				</Typography>
				<br />
				<Button variant="outlined" onClick={handleClickOpen}>
					Open simple dialog
				</Button>
				<SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
			</Stack>
			<Stack mt={4}>
				<Button variant="outlined" onClick={handleClickOpen1}>
					Open alert dialog
				</Button>
				<Dialog open={open1} onClose={handleClose1} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
					<DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose1}>Disagree</Button>
						<Button onClick={handleClose1} autoFocus>
							Agree
						</Button>
					</DialogActions>
				</Dialog>
			</Stack>

			<Stack mt={4}>
				<Button variant="outlined" onClick={handleClickOpen2}>
					Open form dialog
				</Button>
				<Dialog open={open2} onClose={handleClose2}>
					<DialogTitle>Subscribe</DialogTitle>
					<DialogContent>
						<DialogContentText>To subscribe to this website, please enter your email address here. We will send updates occasionally.</DialogContentText>
						<TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose2}>Cancel</Button>
						<Button onClick={handleClose2}>Subscribe</Button>
					</DialogActions>
				</Dialog>
			</Stack>

			<Stack mt={4}>
				<Button onClick={handleClickOpen3}>Dialogu Aç</Button>
				<Dialog fullScreen TransitionComponent={Transition} open={open3} onClose={handleClose3}>
					<AppBar sx={{ position: 'relative' }}>
						<Toolbar>
							<IconButton edge="start" color="inherit" onClick={handleClose3} aria-label="close">
								<CloseIcon />
							</IconButton>
							<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
								Sound
							</Typography>
							<Button autoFocus color="inherit" onClick={handleClose3}>
								save
							</Button>
						</Toolbar>
					</AppBar>
					<List>
						<ListItem button>
							<ListItemText primary="Phone ringtone" secondary="Titania" />
						</ListItem>
						<Divider />
						<ListItem button>
							<ListItemText primary="Default notification ringtone" secondary="Tethys" />
						</ListItem>
					</List>
				</Dialog>
			</Stack>
		</div>
	);
};

export default DialogMUI;
