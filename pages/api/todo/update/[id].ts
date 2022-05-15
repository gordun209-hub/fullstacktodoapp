/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const {
		title,
		priority,
		completed
	}: {
		title: string
		priority: number
		completed: boolean
	} = req.body

	if (!req.cookies.ACCESS_TOKEN) {
		return res.status(401).json({ message: 'cookie not found' })
	}

	try {
		const updatedTodo = await prisma.todo.update({
			where: {
				id: String(req.query.id)
			},
			data: {
				title,
				priority,
				completed
			}
		})
		res.status(200).json(updatedTodo)
	} catch (error) {
		res.status(404).json({ message: "can't update todo", error })
	}
}
