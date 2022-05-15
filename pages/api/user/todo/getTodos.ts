/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

const handler: (
	req: NextApiRequest,
	res: NextApiResponse
) => Promise<any> = async (req: NextApiRequest, res: NextApiResponse) => {
	// @desc   Get a todo
	// @route  GET /api/user/todo/getTodo
	// @access Private
	if (req.method === 'GET') {
		const cookie = req.cookies

		if (!req.cookies.ACCESS_TOKEN) {
			return res.status(500).json({ message: 'cookie not found' })
		}

		//! Get user via cookie
		const user: any = jwt.verify(cookie.ACCESS_TOKEN, 'hello')

		//! we're getting todos from the user corresponding to the cookie
		try {
			const todos = await prisma.todo.findMany({
				where: {
					userId: user.id
				}
			})
			res.status(200).json({ message: todos })
		} catch (error) {
			res.status(401).json({ message: 'no todo listed', error })
		}
	}
}

export default handler
