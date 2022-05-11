import { Box, Typography } from '@mui/material'
import type { FC } from 'react'
import React from 'react'

type Props = {
	children: React.ReactNode
}

const MainContent: FC<Props> = ({ children }) => {
	return (
		<Box
			sx={{
				position: 'relative',
				flex: 1,
				paddingY: 10,
				paddingX: 5
			}}
		>
			{children}

			<footer
				style={{
					left: 0,
					right: 0,
					bottom: 10,
					textAlign: 'center',
					position: 'absolute'
				}}
			>
				<Typography
					sx={{
						fontSize: '0.9rem',
						fontWeight: 'light',
						color: 'text.secondary'
					}}
				>
					<span>
						&copy; {new Date().getFullYear()} Todo App. All rights reserved.
					</span>
				</Typography>
			</footer>
		</Box>
	)
}

export default MainContent
