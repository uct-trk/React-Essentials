import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Stack, Tab, Tabs } from '@mui/material';
import React from 'react';

const TabsMUI = () => {
	const [value, setValue] = React.useState('1');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	const [values, setValues] = React.useState('1');

	const handleChanges = (event: React.SyntheticEvent, newValue: string) => {
		setValues(newValue);
	};
	return (
		<Stack>
			<Box sx={{ width: '100%', typography: 'body1' }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab label="Item One" value="1" />
							<Tab label="Item Two" value="2" />
							<Tab label="Item Three" value="3" />
						</TabList>
					</Box>
					<TabPanel value="1">Item One</TabPanel>
					<TabPanel value="2">Item Two</TabPanel>
					<TabPanel value="3">Item Three</TabPanel>
				</TabContext>
			</Box>

			<Box mt={4} sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
				<TabContext value={values}>
					<Tabs value={values} onChange={handleChanges} variant="scrollable" scrollButtons="auto" aria-label="scrollable auto tabs example">
						<Tab label="Item One" value={'1'} />
						<Tab label="Item Two" value={'2'} />
						<Tab label="Item Three" value={'3'} />
						<Tab label="Item Four" value={'4'} />
						<Tab label="Item Five" value={'5'} />
						<Tab label="Item Six" value={'6'} />
						<Tab label="Item Seven" value={'7'} />
					</Tabs>
					<TabPanel value={'1'}>Item One</TabPanel>
					<TabPanel value={'2'}>Item Two</TabPanel>
					<TabPanel value={'3'}>Item Three</TabPanel>
					<TabPanel value={'4'}>Item Four</TabPanel>
					<TabPanel value={'5'}>Item Five</TabPanel>
					<TabPanel value={'6'}>Item Six</TabPanel>
					<TabPanel value={'7'}>Item Seven</TabPanel>
				</TabContext>
			</Box>
		</Stack>
	);
};

export default TabsMUI;
