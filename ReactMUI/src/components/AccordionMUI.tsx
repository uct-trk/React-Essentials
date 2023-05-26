import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const AccordionMUI = () => {
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false);
	};
	return (
		<Stack spacing={4}>
			<div>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>Accordion 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>Accordion 2</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion disabled>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>Disabled Accordion</Typography>
					</AccordionSummary>
				</Accordion>
			</div>

			<div>
				<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
						<Typography>İlk Bölüm</Typography>
					</AccordionSummary>
					<AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci itaque saepe enim explicabo eos, maiores magnam distinctio nisi perferendis? Repudiandae ad quisquam tempora ratione reiciendis corporis nihil, similique eveniet reprehenderit.</AccordionDetails>
				</Accordion>
				<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
						<Typography>İkinci Bölüm</Typography>
					</AccordionSummary>
					<AccordionDetails>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reprehenderit dolorem, esse dolores, nostrum nemo, commodi dignissimos rerum officia quos voluptate atque dolore quod tempora. Quasi dolores inventore veniam ad.</AccordionDetails>
				</Accordion>
				<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
						<Typography>Üçüncü Bölüm</Typography>
					</AccordionSummary>
					<AccordionDetails>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ducimus, fugiat officia possimus ullam reiciendis dicta laboriosam quam ipsum ea, aliquid consectetur quo accusamus asperiores eius, est quidem voluptates? Dolorem.</AccordionDetails>
				</Accordion>
			</div>
		</Stack>
	);
};

export default AccordionMUI;
