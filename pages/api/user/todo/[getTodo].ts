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

	//! IT'S GONNA FIX SOON! IT DOESN'T RETRIVE ANYTHING
	//! FROM THE USER
	if (req.method === 'GET') {
		const { todoId } = req.query
		console.log(todoId)

		const cookie = req.cookies

		if (!req.cookies.ACCESS_TOKEN) {
			return res.status(500).json({ message: 'cookie not found' })
		}

		const token = jwt.verify(cookie.ACCESS_TOKEN, 'hello') as { id: string }

		const todos = await prisma.todo.findMany({
			where: {
				id: token.id
			}
		})

		console.log(todos)

		todos
			? res.status(200).json({ message: todos })
			: res.status(401).json({ message: 'no todo listed' })
	}
}

export default handler
