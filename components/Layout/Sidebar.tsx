import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'

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
			<Toolbar className='bg-blue-500 text-white text-lg font-black'>
				TODO APP
			</Toolbar>
			<Divider />
			<SidebarLinks />
			<LogOutButton />
		</Drawer>
	)
}

export default Sidebar
