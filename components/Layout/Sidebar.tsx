import { Button } from '@mui/material'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'

import SidebarLinks from './SidebarLinks'

const drawerWidth = 240

const Sidebar: () => JSX.Element = () => {
	return (
		<Drawer
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
			<Toolbar>Todo App</Toolbar>
			<Divider />
			<SidebarLinks />
			<Button className='absolute bottom-0 right-0 left-0' variant='outlined'>
				Logout
				{/* !!ADD LOGOUT FUNCTION HERE  */}
			</Button>
		</Drawer>
	)
}

export default Sidebar
