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
		const { title, priority, completed } = req.body

		// cookie and token
		const cookie = req.cookies
		const token = jwt.verify(cookie.ACCESS_TOKEN, 'hello')

		if (!req.cookies.ACCESS_TOKEN) {
			return res.status(500).json({ message: 'error' })
		}

		console.log(cookie)

		try {
			await prisma.todo.create({
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
			res.status(202).json({ message: 'submitted successfully' })
		} catch (error) {
			res.status(400).json({ message: error })
		}
	}
}

export default handler
