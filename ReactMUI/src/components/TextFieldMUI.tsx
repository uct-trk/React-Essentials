import { TextField, Stack, InputAdornment } from '@mui/material';
import { useState } from 'react';

const TextFieldMUI = () => {
	const [value, setValue] = useState('');

	return (
		<Stack spacing={4}>
			<Stack direction={'row'} spacing={2}>
				<TextField label="İsim" />
				<TextField label="İsim" variant="outlined" />
				<TextField label="İsim" variant="filled" />
				<TextField label="İsim" variant="standard" />
			</Stack>
			<Stack direction={'row'} spacing={2}>
				<TextField label="İsim" variant="outlined" size="small" />
				<TextField label="İsim" variant="filled" size="medium" />
			</Stack>

			<Stack direction={'row'} spacing={2}>
				<TextField label="İsim" variant="outlined" color="primary" />
				<TextField label="İsim" variant="filled" color="warning" />
			</Stack>
			<Stack direction={'row'} spacing={2}>
				<TextField type="password" label="Şifre" variant="outlined" helperText="Lütfen şifre giriniz" />
			</Stack>
			<Stack direction={'row'} spacing={2}>
				<TextField disabled type="password" label="tıklanamaz" variant="outlined" helperText="tıklayamazsın" />
			</Stack>
			<Stack direction={'row'} spacing={2}>
				<TextField InputProps={{ readOnly: true }} type="password" label="readonly" variant="outlined" helperText="Read only field" />
			</Stack>
			<Stack direction={'row'} spacing={2}>
				<TextField InputProps={{ startAdornment: <InputAdornment position="start">TL</InputAdornment> }} label="Toplam" variant="outlined" />
			</Stack>
			<Stack direction={'row'} spacing={2}>
				<TextField InputProps={{ endAdornment: <InputAdornment position="end">TL</InputAdornment> }} label="Toplam" variant="outlined" />
			</Stack>
			<Stack direction={'row'} spacing={2}>
				<TextField type="password" label="Şifre" variant="outlined" onChange={(e) => setValue(e.target.value)} value={value} helperText={`${!value ? 'Lütfen Şifrenizi Giriniz' : 'Şifrenizi Kimseyle Paylaşmayın'}`} />
			</Stack>
		</Stack>
	);
};

export default TextFieldMUI;
