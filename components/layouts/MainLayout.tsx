import type { FC } from 'react'
import React from 'react'

type Props = {
	children: React.ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
	return (
		<div>
			{/* can add navbar here */}
			<main>{children}</main>
		</div>
	)
}

export default MainLayout
