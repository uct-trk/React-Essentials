import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { useState } from 'react';

const AppBarMUI = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();

	const openControl = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<AppBar color="secondary">
			<Toolbar>
				<IconButton color="inherit">
					<MenuIcon />
				</IconButton>
				<Typography component={'div'}>Header Örneği</Typography>
				<Stack direction={'row'} marginLeft={'auto'}>
					<Button sx={{ color: 'white' }}>Anasayfa</Button>
					<Button sx={{ color: 'white' }}>Hakkımızda</Button>
					<Button sx={{ color: 'white' }}>Ürünler</Button>
					<Button sx={{ color: 'white' }}>Fiyatlar</Button>
					<Button sx={{ color: 'white' }} onClick={handleClick}>
						Fırsatlar
					</Button>
				</Stack>
				<Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
					<MenuItem onClick={handleClose}>Kitaplar</MenuItem>
					<MenuItem onClick={handleClose}>Kalemler</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
};

export default AppBarMUI;
