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
import { nanoid } from 'nanoid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const links = [
	{
		name: 'Inbox',
		datacy: 'inbox-link',
		icon: <MoveToInboxOutlinedIcon />,
		query: 'inbox'
	},
	{
		name: 'Today',
		icon: <TodayOutlinedIcon />,
		query: 'today',
		datacy: 'today-link'
	},
	{
		name: 'Upcoming',
		icon: <UpcomingOutlinedIcon />,
		query: 'upcoming',
		datacy: 'upcoming-link'
	},
	{
		name: 'Completed',
		icon: <EventAvailableOutlinedIcon />,
		query: 'completed',
		datacy: 'completed-link'
	}
]

const SidebarLinks: () => JSX.Element = () => {
	const router = useRouter()
	const { type } = router.query

	return (
		<List data-cy='icon-list'>
			{links.map(link => (
				<Link
					key={nanoid()}
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
						<ListItemButton data-cy={`-${link.datacy}`}>
							<ListItemIcon
								className={type === link.query ? ' text-blue-500' : ''}
							>
								{link.icon}
							</ListItemIcon>
							<ListItemText data-cy={`${link.datacy}`} primary={link.name} />
						</ListItemButton>
					</ListItem>
				</Link>
			))}
		</List>
	)
}

export default SidebarLinks
