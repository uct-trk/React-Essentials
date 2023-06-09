import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useDispatch } from 'react-redux';
import { decreamentCourse, deleteCourse, increamentCourse } from '../slice/cartSlice';

const Course = ({ id, title, price, img, quantity }) => {
	const dispatch = useDispatch();
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia sx={{ height: 140 }} image={img} title="green iguana" />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{price} TL
				</Typography>
			</CardContent>
			<CardActions sx={{ display: 'flex', gap: '10px' }}>
				<Button variant="contained" size="small" onClick={() => dispatch(increamentCourse(id))}>
					Artır
				</Button>
				<Typography>{quantity}</Typography>
				<Button variant="contained" color="warning" size="small" onClick={() => dispatch(decreamentCourse(id))}>
					Azalt
				</Button>
				<IconButton onClick={() => dispatch(deleteCourse(id))}>
					<DeleteIcon color="error" />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Course;
