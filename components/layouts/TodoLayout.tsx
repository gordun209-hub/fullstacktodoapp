import { Box, Toolbar } from '@mui/material'
import type { FC } from 'react'
import React from 'react'

import { Navbar, Sidebar } from '@/components/index'

type Props = {
	children: React.ReactNode
}

const TodoLayout: FC<Props> = ({ children }) => {
	return (
		<div className='flex'>
			<Navbar />
			<Sidebar />
			<Box component='main' className='ml-[240px] bg-white p-6'>
				<Toolbar />
				{children}
			</Box>
		</div>
	)
}

export default TodoLayout
