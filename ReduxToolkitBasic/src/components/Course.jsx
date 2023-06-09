import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

const Course = ({ id, title, price, img, quantity }) => {
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
				<Button variant="contained" size="small">
					Artır
				</Button>
				<Typography>{quantity}</Typography>
				<Button variant="contained" color="warning" size="small">
					Azalt
				</Button>
				<IconButton>
					<DeleteIcon color="error" />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Course;
