import type { FC } from 'react'
import React from 'react'

import { Navbar, Sidebar } from '@/components/index'

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
