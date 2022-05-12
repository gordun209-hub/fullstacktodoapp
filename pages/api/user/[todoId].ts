/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

const handler: (
	req: NextApiRequest,
	res: NextApiResponse
) => Promise<any> = async (req: NextApiRequest, res: NextApiResponse) => {
	// @desc   Get a todo
	// @route  GET /api/user/[todoId]
	// @access Private
	if (req.method === 'GET') {
		const { todoId } = req.query
		const todos = await prisma.todo.findUnique({
			where: {
				id: String(todoId)
			}
		})

		todos
			? res.status(200).json({ message: todos })
			: res.status(401).json({ message: 'error' })
	}

	// @desc   Create a todo
	// @route  POST /api/user/[todoId]
	// @access Private
	// IN PROGRESS
	if (req.method === 'POST') {
		// Info that would be retrived from the user
		const {
			title,
			priority,
			completed
		}: {
			title: string
			priority: number
			completed: boolean
		} = req.body

		// cookie and token
		const cookie = req.cookies
		const token = jwt.verify(cookie.ACCESS_TOKEN, 'hello') as { id: string }

		if (!req.cookies.ACCESS_TOKEN) {
			return res.status(500).json({ message: 'error' })
		}

		try {
			const todo = await prisma.todo.create({
				data: {
					title,
					priority,
					completed,
					updatedAt: new Date(),
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
