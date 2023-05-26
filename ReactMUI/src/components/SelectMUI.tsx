import { Box, MenuItem, Stack, TextField } from '@mui/material';
import { useState } from 'react';

const SelectMUI = () => {
	const [value, setValue] = useState('');

	const [multi, setMulti] = useState([]);

	const handleChange = (e: any) => {
		setValue(e.target.value);
	};

	const handleMulti = (e: any) => {
		setMulti(e.target.value);
	};

	return (
		<Stack spacing={5}>
			<Box width={'250px'}>
				<TextField select label="Ülke" fullWidth value={value} onChange={handleChange}>
					<MenuItem value="tr">Türkiye</MenuItem>
					<MenuItem value="nd">Hollanda</MenuItem>
					<MenuItem value="usa">Amerika</MenuItem>
					<MenuItem value="fr">Fransa</MenuItem>
				</TextField>
			</Box>

			<Box width={'250px'}>
				<TextField SelectProps={{ multiple: true }} select value={multi} onChange={handleMulti} color="warning" label="Ülke" fullWidth>
					<MenuItem value="tr">Türkiye</MenuItem>
					<MenuItem value="nd">Hollanda</MenuItem>
					<MenuItem value="usa">Amerika</MenuItem>
					<MenuItem value="fr">Fransa</MenuItem>
				</TextField>
			</Box>
		</Stack>
	);
};

export default SelectMUI;
