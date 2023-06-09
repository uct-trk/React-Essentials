import { Alert, Box, Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import Course from './Course';
import { clearCart } from '../slice/cartSlice';

const CourseList = () => {
	const { cartItems, quantity, total } = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	return (
		<div>
			{quantity < 1 ? (
				<Stack sx={{ width: '50%', margin: '0 auto' }} spacing={2}>
					<Alert variant="filled" severity="warning">
						Sepetiniz Boş
					</Alert>
				</Stack>
			) : (
				<Stack mt={5}>
					<Grid container spacing={4}>
						{cartItems?.map((item) => {
							return (
								<Grid item md={6} key={item.id}>
									<Course {...item} />
								</Grid>
							);
						})}
					</Grid>
					<Divider />
					<Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%', background: 'white' }}>
						<Stack display={'flex'} flexDirection={'row'} justifyContent={'space-around'} alignItems={'center'}>
							<Box display={'flex'} flexDirection={'row'} gap={3}>
								<Typography fontSize={20} color={'black'}>
									Toplam Tutar
								</Typography>
								<Typography fontSize={20} color={'black'}>
									{total} TL
								</Typography>
							</Box>
							<IconButton onClick={() => dispatch(clearCart())}>
								Temizle <DeleteIcon />
							</IconButton>
						</Stack>
					</Box>
				</Stack>
			)}
		</div>
	);
};

export default CourseList;
