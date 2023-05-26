import { Radio, FormControl, FormLabel, FormControlLabel, RadioGroup, FormHelperText } from '@mui/material';
import { useState } from 'react';

const RadioGroupMUI = () => {
	const [value, setValue] = useState('');
	console.log(value);
	return (
		<FormControl>
			<FormLabel color={`${value === '2000' ? 'primary' : value === '3000' ? 'secondary' : 'warning'}`}>Maaş Beklentiniz</FormLabel>
			<RadioGroup row name="expected-salary" value={value} onChange={(e) => setValue(e.target.value)}>
				<FormControlLabel label="2000$" value="2000" color="secondary" control={<Radio color="primary" />} />
				<FormControlLabel label="3000$" value="3000" color="secondary" control={<Radio color="secondary" />} />
				<FormControlLabel label="4000$" value="4000" color="secondary" control={<Radio color="warning" />} />
			</RadioGroup>
			<FormHelperText>Seçiminizi yapınız</FormHelperText>
		</FormControl>
	);
};

export default RadioGroupMUI;
