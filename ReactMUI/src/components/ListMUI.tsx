import { Avatar, Box, Collapse, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import React from 'react';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

const ListMUI = () => {
	const [open, setOpen] = React.useState(true);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<>
			<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				<nav aria-label="main mailbox folders">
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary="Inbox" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<DraftsIcon />
								</ListItemIcon>
								<ListItemText primary="Drafts" />
							</ListItemButton>
						</ListItem>
					</List>
				</nav>
				<Divider />
				<nav aria-label="secondary mailbox folders">
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemText primary="Trash" />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton component="a" href="#simple-list">
								<ListItemText primary="Spam" />
							</ListItemButton>
						</ListItem>
					</List>
				</nav>
			</Box>
			<List
				sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						Nested List Items
					</ListSubheader>
				}
			>
				<ListItemButton>
					<ListItemIcon>
						<SendIcon />
					</ListItemIcon>
					<ListItemText primary="Sent mail" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<DraftsIcon />
					</ListItemIcon>
					<ListItemText primary="Drafts" />
				</ListItemButton>
				<ListItemButton onClick={handleClick}>
					<ListItemIcon>
						<InboxIcon />
					</ListItemIcon>
					<ListItemText primary="Inbox" />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItemButton>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						<ListItemButton sx={{ pl: 4 }}>
							<ListItemIcon>
								<StarBorder />
							</ListItemIcon>
							<ListItemText primary="Starred" />
						</ListItemButton>
					</List>
				</Collapse>
			</List>

			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<ImageIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Photos" secondary="Jan 9, 2014" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<WorkIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Work" secondary="Jan 7, 2014" />
				</ListItem>
				<ListItem>
					<ListItemAvatar>
						<Avatar>
							<BeachAccessIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Vacation" secondary="July 20, 2014" />
				</ListItem>
			</List>

			<Box>
				<List>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<InboxIcon />
							</ListItemIcon>
							<ListItemText primary="Inbox" />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemIcon>
								<DraftsIcon />
							</ListItemIcon>
							<ListItemText primary="Drafts" />
						</ListItemButton>
					</ListItem>
				</List>
				<Divider />
				<List>
					<ListItem>
						<ListItemButton>
							<ListItemText primary="Inbox" />
						</ListItemButton>
					</ListItem>
					<ListItem>
						<ListItemButton>
							<ListItemText primary="Drafts" />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</>
	);
};

export default ListMUI;
