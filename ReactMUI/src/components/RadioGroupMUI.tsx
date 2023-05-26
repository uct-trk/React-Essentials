import { Radio, FormControl, FormLabel, FormControlLabel, RadioGroup, FormHelperText, Stack, Button } from '@mui/material';
import { useState } from 'react';

const RadioGroupMUI = () => {
	const [value, setValue] = useState('');
	const [radioValue, setRadioValue] = useState('');
	const [helper, setHelper] = useState('');
	const [error, setError] = useState(false);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (radioValue === 'ugurcan') {
			alert(radioValue);
			setError(false);
		} else if (radioValue === 'umit') {
			alert(radioValue);
			setError(false);
		} else {
			setError(true);
			setHelper('Lütfen seçim yapınız');
		}
	};
	return (
		<Stack spacing={4}>
			<FormControl>
				<FormLabel color={`${value === '2000' ? 'primary' : value === '3000' ? 'secondary' : 'warning'}`}>Maaş Beklentiniz</FormLabel>
				<RadioGroup row name="expected-salary" value={value} onChange={(e) => setValue(e.target.value)}>
					<FormControlLabel label="2000$" value="2000" color="secondary" control={<Radio color="primary" />} />
					<FormControlLabel label="3000$" value="3000" color="secondary" control={<Radio color="secondary" />} />
					<FormControlLabel label="4000$" value="4000" color="secondary" control={<Radio color="warning" />} />
				</RadioGroup>
				<FormHelperText>Seçiminizi yapınız</FormHelperText>
			</FormControl>

			<form onSubmit={handleSubmit}>
				<FormControl error={error}>
					<FormLabel>En Kapsamlı Frontend eğitimini veren kim?</FormLabel>
					<RadioGroup value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
						<FormControlLabel value={'ugurcan'} label="Uğurcan Türk" control={<Radio />} />
						<FormControlLabel value={'umit'} label="Ümit Türk" control={<Radio />} />
					</RadioGroup>
					<FormHelperText>{!radioValue && helper}</FormHelperText>
					<Button type="submit" variant="outlined">
						Gönder
					</Button>
				</FormControl>
			</form>
		</Stack>
	);
};

export default RadioGroupMUI;
