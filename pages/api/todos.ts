import type { User } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

import { validateRoute } from '@/lib/auth'

import prisma from '../../lib/prisma'

export default validateRoute(
	async (_req: NextApiRequest, res: NextApiResponse, user: User) => {
		const todos = await prisma.todo.findMany({
			where: {
				userId: user.id
			}
		})
		res.json(todos)
	}
)
