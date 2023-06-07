import { Box, Button, ClickAwayListener, Grid, IconButton, Typography } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import React from 'react';

const HtmlTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: '#f5f5f9',
		color: 'rgba(0, 0, 0, 0.87)',
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: '1px solid #dadde9',
	},
}));

const TooltlpMUI = () => {
	const [open, setOpen] = React.useState(false);

	const handleTooltipClose = () => {
		setOpen(false);
	};

	const handleTooltipOpen = () => {
		setOpen(true);
	};
	return (
		<>
			<Tooltip title="Delete">
				<IconButton>
					<DeleteIcon />
				</IconButton>
			</Tooltip>
			<Tooltip describeChild title="Does not add if it already exists.">
				<Button>Add</Button>
			</Tooltip>
			<Box sx={{ width: 500 }}>
				<Grid container justifyContent="center">
					<Grid item>
						<Tooltip title="Add" placement="top-start">
							<Button>top-start</Button>
						</Tooltip>
						<Tooltip title="Add" placement="top">
							<Button>top</Button>
						</Tooltip>
						<Tooltip title="Add" placement="top-end">
							<Button>top-end</Button>
						</Tooltip>
					</Grid>
				</Grid>
				<Grid container justifyContent="center">
					<Grid item xs={6}>
						<Tooltip title="Add" placement="left-start">
							<Button>left-start</Button>
						</Tooltip>
						<br />
						<Tooltip title="Add" placement="left">
							<Button>left</Button>
						</Tooltip>
						<br />
						<Tooltip title="Add" placement="left-end">
							<Button>left-end</Button>
						</Tooltip>
					</Grid>
					<Grid item container xs={6} alignItems="flex-end" direction="column">
						<Grid item>
							<Tooltip title="Add" placement="right-start">
								<Button>right-start</Button>
							</Tooltip>
						</Grid>
						<Grid item>
							<Tooltip title="Add" placement="right">
								<Button>right</Button>
							</Tooltip>
						</Grid>
						<Grid item>
							<Tooltip title="Add" placement="right-end">
								<Button>right-end</Button>
							</Tooltip>
						</Grid>
					</Grid>
				</Grid>
				<Grid container justifyContent="center">
					<Grid item>
						<Tooltip title="Add" placement="bottom-start">
							<Button>bottom-start</Button>
						</Tooltip>
						<Tooltip title="Add" placement="bottom">
							<Button>bottom</Button>
						</Tooltip>
						<Tooltip title="Add" placement="bottom-end">
							<Button>bottom-end</Button>
						</Tooltip>
					</Grid>
				</Grid>
			</Box>

			<HtmlTooltip
				title={
					<React.Fragment>
						<Typography color="inherit">Tooltip with HTML</Typography>
						<em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>. {"It's very engaging. Right?"}
					</React.Fragment>
				}
			>
				<Button>HTML</Button>
			</HtmlTooltip>

			<Grid item>
				<ClickAwayListener onClickAway={handleTooltipClose}>
					<div>
						<Tooltip
							PopperProps={{
								disablePortal: true,
							}}
							onClose={handleTooltipClose}
							open={open}
							disableFocusListener
							disableHoverListener
							disableTouchListener
							title="Add"
						>
							<Button onClick={handleTooltipOpen}>Click</Button>
						</Tooltip>
					</div>
				</ClickAwayListener>
			</Grid>

			<Tooltip title="You don't have permission to do this">
				<span>
					<Button disabled>A Disabled Button</Button>
				</span>
			</Tooltip>
		</>
	);
};

export default TooltlpMUI;
