/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (!req.cookies.ACCESS_TOKEN) {
		return res.status(400).json({ message: 'cookie not found' })
	}

	try {
		const deletedTodo = await prisma.todo.delete({
			where: {
				id: String(req.query.delete)
			}
		})
		res.status(200).json({ message: deletedTodo })
	} catch (error) {
		res.status(400).json({ message: 'cant delete todo', error })
	}
}
