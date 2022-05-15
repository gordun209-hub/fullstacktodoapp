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
			<Box
				data-cy='main'
				component='main'
				className='ml-[240px] w-full bg-white p-6'
			>
				<Toolbar data-cy='todo-toolbar' />
				{children}
			</Box>
		</div>
	)
}

export default TodoLayout
