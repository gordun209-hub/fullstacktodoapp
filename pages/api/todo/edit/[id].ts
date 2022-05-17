/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

//! Fixed and tested
//! Only signined user can delete hi

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const { title, completed, id, deadline, priority } = req.body
	try {
		const updatedTodo = await prisma.todo.update({
			where: {
				id: String(id)
			},
			data: {
				completed,
				title,
				deadline,
				priority
			}
		})
		res.status(200).json(updatedTodo)
	} catch (error) {
		res.status(400).json({ error })
	}
}
