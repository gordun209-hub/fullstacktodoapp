/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

const handler: (
	req: NextApiRequest,
	res: NextApiResponse
) => Promise<any> = async (req: NextApiRequest, res: NextApiResponse) => {
	// @desc   Create a todo
	// @route  POST /api/user/todo/makeTodo
	// @access Private
	if (req.method === 'POST') {
		// todo list
		const {
			title,
			priority,
			completed,
			deadline
		}: {
			title: string
			priority: number
			completed: boolean
			deadline: Date
		} = req.body

		//! will check if the user has the cookie or not
		const cookie = req.cookies

		if (!req.cookies.ACCESS_TOKEN) {
			return res.status(500).json({ message: 'cookie not found' })
		}

		const token = jwt.verify(cookie.ACCESS_TOKEN, 'hello') as { id: string }

		// prisma creates a new todo in the database
		try {
			const todo = await prisma.todo.create({
				data: {
					title,
					priority,
					completed,
					updatedAt: new Date(),
					deadline,
					user: {
						connect: {
							id: token?.id
						}
					}
				}
			})
			res.status(202).json(todo)
		} catch (error) {
			res.status(400).json({ message: error })
		}
	}
}

export default handler
