/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
			//! If the user does not provide required information in input
			//! The message will be thrown
			todo.title === '' ||
			todo.priority < 0 ||
			todo.completed === undefined ||
			null
				? res
						.status(201)
						.json({ message: 'The user has no todo or provided invalid input' })
				: res.status(200).json(todo)
		} catch (error) {
			res.status(400).json({ message: error })
		}
	}
}

export default handler
