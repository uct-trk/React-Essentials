import { Box, Stack, Checkbox, FormLabel, FormGroup, FormControlLabel, FormHelperText } from '@mui/material';
import { useState } from 'react';

const CheckboxMUI = () => {
	const [value, setValue] = useState<Array<string>>([]);
	const [isCheck, setIsCheck] = useState<boolean>(false);
	const [languages, setLanguages] = useState<Array<string>>([]);

	const handleChange = (event: any) => {
		const selectedValue: string = event.target.value;
		const isChecked: boolean = event.target.checked;

		if (isChecked) {
			setValue((prevValue: Array<string>) => [...prevValue, selectedValue]);
		} else {
			setValue((prevValue: Array<string>) => prevValue.filter((item) => item !== selectedValue));
		}
	};

	const handleLanguages = (event: any) => {
		const index = languages.indexOf(event.target.value);
		if (index === -1) {
			setLanguages([...languages, event.target.value]);
		} else {
			setLanguages(languages.filter((i) => i !== event.target.value));
		}
	};

	return (
		<Stack spacing={4}>
			<Box>
				<FormLabel>Eğitim Durumu</FormLabel>
				<FormGroup row onChange={handleChange} value={value}>
					<FormControlLabel value="ilkokul" disabled control={<Checkbox defaultChecked={true} />} label="İlk Okul" />
					<FormControlLabel value="lise" control={<Checkbox />} label="Lise" />
					<FormControlLabel value="üni" control={<Checkbox />} label="Üniversite" />
					<FormControlLabel value="master" control={<Checkbox />} label="Yüksek Lisans" />
				</FormGroup>
			</Box>

			<Box>
				<FormLabel>Kullanım Koşulları</FormLabel>
				<FormGroup row>
					<FormControlLabel control={<Checkbox onChange={(e: any) => setIsCheck(e.target.checked)} value={isCheck} />} label="Kabul Ediyorum" />
					<FormHelperText>{!isCheck && 'Koşulları kabul ediniz'}</FormHelperText>
				</FormGroup>
			</Box>

			<Box>
				<FormLabel>Uzmanlık Alanın</FormLabel>
				<FormGroup row>
					<FormControlLabel value="react" control={<Checkbox onChange={handleLanguages} checked={languages?.includes('react')} />} label="React" />
					<FormControlLabel value="vue" control={<Checkbox onChange={handleLanguages} checked={languages?.includes('vue')} />} label="Vue" />
					<FormControlLabel value="ang" control={<Checkbox onChange={handleLanguages} checked={languages?.includes('ang')} />} label="Angular" />
					<FormControlLabel value="svelte" control={<Checkbox onChange={handleLanguages} checked={languages?.includes('svelte')} />} label="Svelte" />
				</FormGroup>
			</Box>
		</Stack>
	);
};

export default CheckboxMUI;
