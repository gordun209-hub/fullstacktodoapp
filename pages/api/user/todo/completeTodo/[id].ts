/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

//! Fixed and tested
//! Only signined user can delete hi

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (!req.cookies.ACCESS_TOKEN) {
		return res.status(400).json({ message: 'cookie not found' })
	}

	try {
		const todo = await prisma.todo.findUnique({
			where: {
				id: String(req.query.id)
			}
		})

		const updatedTodo = await prisma.todo.update({
			where: {
				id: String(req.query.id)
			},
			data: {
				completed: !todo.completed
			}
		})
		res.status(200).json(updatedTodo)
	} catch (error) {
		res.status(400).json({ message: 'cant delete todo', error })
	}
}
