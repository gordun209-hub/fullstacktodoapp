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
import Link from 'next/link'
import { useRouter } from 'next/router'
import { v4 as uuid } from 'uuid'

const links = [
	{
		name: 'Inbox',
		icon: <MoveToInboxOutlinedIcon />,
		query: 'inbox'
	},
	{
		name: 'Today',
		icon: <TodayOutlinedIcon />,
		query: 'today'
	},
	{
		name: 'Upcoming',
		icon: <UpcomingOutlinedIcon />,
		query: 'upcoming'
	},
	{
		name: 'Completed',
		icon: <EventAvailableOutlinedIcon />,
		query: 'completed'
	}
]

const SidebarLinks: () => JSX.Element = () => {
	const router = useRouter()
	const { type } = router.query

	return (
		<List>
			{links.map(link => (
				<Link
					key={uuid()}
					replace
					passHref
					href={{
						pathname: '/user/todos',
						query: { type: link.query }
					}}
				>
					<ListItem
						disablePadding
						className={type === link.query ? 'text-blue-500' : ''}
					>
						<ListItemButton>
							<ListItemIcon
								className={type === link.query ? ' text-blue-500' : ''}
							>
								{link.icon}
							</ListItemIcon>
							<ListItemText primary={link.name} />
						</ListItemButton>
					</ListItem>
				</Link>
			))}
		</List>
	)
}

export default SidebarLinks
