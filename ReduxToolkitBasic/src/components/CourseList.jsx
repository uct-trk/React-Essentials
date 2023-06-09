import { Alert, Button, Divider, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Course from './Course';

const CourseList = () => {
	const { cartItems, quantity, total } = useSelector((state) => state.cart);
	return (
		<div>
			{quantity > 1 ? (
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
					<Stack flexDirection={'row'} gap={3}>
						<Typography>Toplam Tutar</Typography>
						<Typography>{total} TL</Typography>
						<Button>Temizle</Button>
					</Stack>
				</Stack>
			)}
		</div>
	);
};

export default CourseList;
