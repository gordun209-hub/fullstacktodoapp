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

	// if (req.method === 'POST') {
	// 	const { priority, title, completed, user } = req.body

	// 	try {
	// 		const todos = await prisma.todo.create({
	// 			data: {
	// 				priority,
	// 				title,
	// 				completed,
	// 				user: {
	// 					connect: {
	// 						id: String(user.id)
	// 					}
	// 				}
	// 			}
	// 		})
	// 		console.log(todos)
	// 		res.status(202).json({ message: 'submitted successful' })
	// 	} catch (error) {
	// 		res.status(500).json({ message: 'error' })
	// 	}
	// }
}

export default handler
