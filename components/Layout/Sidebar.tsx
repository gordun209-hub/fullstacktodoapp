import { Box, Divider, Drawer, Toolbar } from '@mui/material'

import Logo from '../Logo'
import LogOutButton from '../LogOutButton'
import SidebarLinks from './SidebarLinks'

const drawerWidth = 240

const Sidebar: () => JSX.Element = () => {
	return (
		<Drawer
			data-cy='drawer'
			className='shrink-0'
			sx={{
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box'
				}
			}}
			variant='permanent'
			anchor='left'
		>
			<Toolbar className='flex items-center'>
				<Logo size='md' />
			</Toolbar>
			<Divider />
			<SidebarLinks />
			<LogOutButton />
		</Drawer>
	)
}

export default Sidebar
