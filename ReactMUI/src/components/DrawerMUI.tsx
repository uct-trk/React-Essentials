import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const DrawerMUI = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});
	const handleOpe = () => {
		setIsOpen(true);
	};
	const handleClose = () => {
		setIsOpen(false);
	};

	const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor: Anchor) => (
		<Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<IconButton size="large" onClick={handleOpe}>
				<MenuIcon />
			</IconButton>
			<Drawer open={isOpen} anchor="right" onClose={handleClose}>
				<Box width={250} textAlign={'center'}>
					<Typography component={'div'} variant="h6">
						Soldaki panel
					</Typography>
				</Box>
			</Drawer>

			<div>
				{(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
					<div key={anchor}>
						<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
						<Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
							{list(anchor)}
						</Drawer>
					</div>
				))}
			</div>
		</div>
	);
};

export default DrawerMUI;
