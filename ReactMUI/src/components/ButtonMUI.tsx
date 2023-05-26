import { Button, ButtonGroup, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const ButtonMUI = () => {
	return (
		<Stack spacing={4}>
			<Stack direction={'row'} spacing={2}>
				<Button variant="text">Text</Button>
				<Button variant="outlined">Outlined</Button>
				<Button variant="contained">Contained</Button>
			</Stack>

			<Stack direction={'row'} spacing={2}>
				<Button variant="text" color="primary">
					primary
				</Button>
				<Button variant="text" color="secondary">
					secondary
				</Button>
				<Button variant="text" color="success">
					success
				</Button>
				<Button variant="text" color="error">
					error
				</Button>
				<Button variant="text" color="warning">
					warning
				</Button>
				<Button variant="text" color="info">
					info
				</Button>
			</Stack>

			<Stack direction={'row'} spacing={2}>
				<Button variant="outlined" color="primary">
					primary
				</Button>
				<Button variant="outlined" color="secondary">
					secondary
				</Button>
				<Button variant="outlined" color="success">
					success
				</Button>
				<Button variant="outlined" color="error">
					error
				</Button>
				<Button variant="outlined" color="warning">
					warning
				</Button>
				<Button variant="outlined" color="info">
					info
				</Button>
			</Stack>

			<Stack direction={'row'} spacing={2}>
				<Button variant="contained" color="primary">
					primary
				</Button>
				<Button variant="contained" color="secondary">
					secondary
				</Button>
				<Button variant="contained" color="success">
					success
				</Button>
				<Button variant="contained" color="error">
					error
				</Button>
				<Button variant="contained" color="warning">
					warning
				</Button>
				<Button variant="contained" color="info">
					info
				</Button>
			</Stack>

			<Stack direction={'row'} display={'block'} spacing={2}>
				<Button variant="outlined" size="small">
					small
				</Button>
				<Button variant="outlined" size="medium">
					medium
				</Button>
				<Button variant="outlined" size="large">
					large
				</Button>
			</Stack>
			<Stack direction={'row'} spacing={2}>
				<Button variant="outlined" color="error">
					<AddIcon color="error" />
				</Button>

				<Button variant="contained" color="secondary" startIcon={<AddIcon />}>
					Ekle
				</Button>
				<Button variant="contained" color="info" endIcon={<AddIcon />}>
					Ekle
				</Button>
				<Button variant="contained" color="warning" endIcon={<AddIcon />} onClick={() => alert('Tıklandı')}>
					Info
				</Button>
			</Stack>

			<Stack direction={'row'} spacing={2}>
				<ButtonGroup variant="contained">
					<Button>Button 1</Button>
					<Button>Button 2</Button>
					<Button>Button 3</Button>
				</ButtonGroup>
				<ButtonGroup variant="outlined">
					<Button>Button 1</Button>
					<Button>Button 2</Button>
					<Button>Button 3</Button>
				</ButtonGroup>
				<ButtonGroup variant="text">
					<Button>Button 1</Button>
					<Button>Button 2</Button>
					<Button>Button 3</Button>
				</ButtonGroup>
			</Stack>
			<Stack direction={'row'} display={'block'} spacing={2}>
				<ButtonGroup variant="contained" orientation="vertical">
					<Button>Button 1</Button>
					<Button>Button 2</Button>
					<Button>Button 3</Button>
				</ButtonGroup>
				<ButtonGroup variant="contained" size="large" orientation="vertical">
					<Button>Button 1</Button>
					<Button>Button 2</Button>
					<Button>Button 3</Button>
				</ButtonGroup>
			</Stack>
		</Stack>
	);
};

export default ButtonMUI;
