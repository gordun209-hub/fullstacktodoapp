import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined'
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined'
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined'
import UpcomingOutlinedIcon from '@mui/icons-material/UpcomingOutlined'
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material'

const links = [
	{
		name: 'Inbox',
		icon: <MoveToInboxOutlinedIcon />
	},
	{
		name: 'Today',
		icon: <TodayOutlinedIcon />
	},
	{
		name: 'Upcoming',
		icon: <UpcomingOutlinedIcon />
	},
	{
		name: 'Completed',
		icon: <EventAvailableOutlinedIcon />
	}
]

const SidebarLinks: () => JSX.Element = () => {
	return (
		<List>
			{links.map(link => (
				<ListItem key={Date.now()} disablePadding>
					<ListItemButton>
						<ListItemIcon>{link.icon}</ListItemIcon>
						<ListItemText primary={link.name} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	)
}

export default SidebarLinks
