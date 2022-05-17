/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const cookie = req.cookies

	if (!req.cookies.ACCESS_TOKEN) {
		return res.status(500).json({ message: 'Cookie not found' })
	}

	const user: any = jwt.verify(
		cookie.ACCESS_TOKEN,
		process.env.SECRET_KEY as string
	)

	//! Prisma looks for a user whose todo is completed using userId
	//! Gives info below
	try {
		const completedTodo = await prisma.todo.findMany({
			where: {
				userId: user.id,
				completed: true
			},
			select: {
				completed: true,
				title: true,
				priority: true,
				createdAt: true
			}
		})
		//! Below code checks if the user has completed todo
		//! if not, returns a message
		completedTodo.length === 0
			? res.status(201).json({ message: 'The user has no todo' })
			: res.status(200).json(completedTodo)
	} catch (error) {
		res.status(404).json({ message: "Can't retrive completed todos", error })
	}
}
