import * as React from 'react';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Avatar, BottomNavigation, BottomNavigationAction, Box, CssBaseline, ListItem, ListItemAvatar, ListItemText, Paper } from '@mui/material';
import { List } from '@mui/icons-material';

const ButtonNavigationMUI = () => {
	const [value, setValue] = React.useState(0);
	return (
		<Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
			<CssBaseline />
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
				<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
				<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
			</BottomNavigation>
		</Box>
	);
};

export default ButtonNavigationMUI;
