import { Avatar, AvatarGroup, Badge, Stack } from '@mui/material';
import { green, pink } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PageviewIcon from '@mui/icons-material/Pageview';
import React from 'react';

const AvatarMUI = () => {
	const StyledBadge = styled(Badge)(({ theme }) => ({
		'& .MuiBadge-badge': {
			backgroundColor: '#44b700',
			color: '#44b700',
			boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
			'&::after': {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				borderRadius: '50%',
				animation: 'ripple 1.2s infinite ease-in-out',
				border: '1px solid currentColor',
				content: '""',
			},
		},
		'@keyframes ripple': {
			'0%': {
				transform: 'scale(.8)',
				opacity: 1,
			},
			'100%': {
				transform: 'scale(2.4)',
				opacity: 0,
			},
		},
	}));
	const SmallAvatar = styled(Avatar)(({ theme }) => ({
		width: 22,
		height: 22,
		border: `2px solid ${theme.palette.background.paper}`,
	}));
	return (
		<>
			<Stack direction="row" spacing={2}>
				<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
				<Avatar sx={{ width: 56, height: 56 }} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
				<Avatar sx={{ bgcolor: green[500] }}>
					<AssignmentIcon />
				</Avatar>
				<Avatar sx={{ bgcolor: pink[500] }}>
					<PageviewIcon />
				</Avatar>

				<AvatarGroup max={4}>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
					<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
					<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
					<Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
					<Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
				</AvatarGroup>
			</Stack>
			<Stack direction="row" spacing={2}>
				<StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
					<Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/56.jpg" />
				</StyledBadge>
				<Badge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={<SmallAvatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/30.jpg" />}>
					<Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/50.jpg" />
				</Badge>
			</Stack>
		</>
	);
};

export default AvatarMUI;
