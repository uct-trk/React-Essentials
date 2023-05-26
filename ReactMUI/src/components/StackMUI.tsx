import { Box, Divider, Paper, Stack, styled } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const StackMUI = () => {
	return (
		<Stack spacing={5}>
			<Box sx={{ width: '100%' }}>
				<Stack spacing={2}>
					<Item>Item 1</Item>
					<Item>Item 2</Item>
					<Item>Item 3</Item>
				</Stack>
			</Box>

			<div>
				<Stack direction={{ xs: 'column', sm: 'row', md: 'row' }} spacing={2}>
					<Item>Item 1</Item>
					<Item>Item 2</Item>
					<Item>Item 3</Item>
				</Stack>
			</div>

			<div>
				<Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
					<Item>Item 1</Item>
					<Item>Item 2</Item>
					<Item>Item 3</Item>
				</Stack>
			</div>
		</Stack>
	);
};

export default StackMUI;
