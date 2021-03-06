/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

const getTodo = async (req: NextApiRequest, res: NextApiResponse) => {
	const id = req.query.id
	try {
		const todo = await prisma.todo.findUnique({
			where: {
				id: String(id)
			}
		})
		res.status(200).json(todo)
	} catch (error) {
		res.status(400).json({ error })
	}
}
export default getTodo
