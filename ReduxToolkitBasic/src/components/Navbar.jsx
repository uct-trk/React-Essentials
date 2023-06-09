import { AppBar, Badge, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const StyledBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: '0 4px',
	},
}));

const Navbar = () => {
	const { quantity } = useSelector((state) => state.cart);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar color="default" position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Ugurcan Turk
					</Typography>
					<IconButton aria-label="cart">
						<StyledBadge badgeContent={quantity} color="default">
							<ShoppingCartIcon color="action" />
						</StyledBadge>
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
