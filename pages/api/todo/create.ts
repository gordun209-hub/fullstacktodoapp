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

		const token = jwt.verify(
			cookie.ACCESS_TOKEN,
			process.env.SECRET_KEY as string
		) as { id: string }

		try {
			const todo = await prisma.todo.create({
				data: {
					title,
					priority,
					completed,

					deadline,
					user: {
						connect: {
							id: token?.id
						}
					}
				}
			})
			res.json(todo)
		} catch (e) {
			res.status(400).json({ error: e })
		}
	}
}

export default handler
