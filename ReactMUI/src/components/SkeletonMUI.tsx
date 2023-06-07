import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { useState } from 'react';

const SkeletonMUI = () => {
	const [loading, setLoading] = useState(true);
	return (
		<>
			<Box>
				{loading ? (
					<>
						<Skeleton variant="text" />
						<Skeleton variant="circular" width={40} height={40} />
						<Skeleton variant="rectangular" width={210} height={60} />
						<Skeleton variant="rounded" width={210} height={60} />
						<Skeleton width={250} height={145} animation="wave" />
					</>
				) : (
					<>
						<img width={250} src="https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
					</>
				)}
			</Box>
		</>
	);
};

export default SkeletonMUI;
