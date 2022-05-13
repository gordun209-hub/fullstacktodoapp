import { Button } from '@mui/material'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useMutation } from 'react-query'

import { logOutQuery } from '@/services/api'

import SidebarLinks from './SidebarLinks'

const drawerWidth = 240

const Sidebar: () => JSX.Element = () => {
	const router = useRouter()
	const { mutate } = useMutation('user', logOutQuery)

	const handleLogout = (): void => {
		mutate()
		router.push('/')
	}

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
			<Button
				className='absolute bottom-0 right-0 left-0 rounded-none border-zinc-300'
				variant='outlined'
				data-cy='logout-button'
				onClick={handleLogout}
			>
				Logout
			</Button>
		</Drawer>
	)
}

export default Sidebar
