import { Stack } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import { useState } from 'react';

const LoadingButtonMUI = () => {
	const [value, setValue] = useState(false);
	return (
		<Stack>
			<LoadingButton loading>Kaydet</LoadingButton>
			<LoadingButton
				loading={value}
				variant="outlined"
				onClick={() => {
					setValue(true);
				}}
			>
				Kaydet
			</LoadingButton>
		</Stack>
	);
};

export default LoadingButtonMUI;
