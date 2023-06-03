import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Stack } from '@mui/material';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
	event.preventDefault();
	console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
	<Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
		MUI
	</Link>,
	<Link underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/" onClick={handleClick}>
		Core
	</Link>,
	<Typography key="3" color="text.primary">
		Breadcrumb
	</Typography>,
];

export default function BreadcrumbMUI() {
	return (
		<>
			<div role="presentation" onClick={handleClick}>
				<Breadcrumbs aria-label="breadcrumb">
					<Link underline="hover" color="inherit" href="/">
						MUI
					</Link>
					<Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
						Core
					</Link>
					<Typography color="text.primary">Breadcrumbs</Typography>
				</Breadcrumbs>
			</div>

			<Stack mt={5}>
				<Breadcrumbs separator="›" aria-label="breadcrumb">
					{breadcrumbs}
				</Breadcrumbs>
				<Breadcrumbs separator="-" aria-label="breadcrumb">
					{breadcrumbs}
				</Breadcrumbs>
				<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
					{breadcrumbs}
				</Breadcrumbs>
			</Stack>
		</>
	);
}
