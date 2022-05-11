import type { FC } from 'react'
import React from 'react'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

type Props = {
	children: React.ReactNode
}

const TodoLayout: FC<Props> = ({ children }) => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<main>{children}</main>
		</div>
	)
}

export default TodoLayout
