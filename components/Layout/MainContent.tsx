import { Box, Typography } from '@mui/material'
import type { FC } from 'react'
import React from 'react'

type Props = {
	children: React.ReactNode
}

const MainContent: FC<Props> = ({ children }) => {
	return (
		<Box className='relative flex-1 flex items-center justify-center py-10 px-5'>
			{children}

			<footer className='left-0 right-0 bottom-3 text-center absolute'>
				<Typography className='text-sm text-zinc-500 font-light'>
					<span>
						&copy; {new Date().getFullYear()} Todo App. All rights reserved.
					</span>
				</Typography>
			</footer>
		</Box>
	)
}

export default MainContent
