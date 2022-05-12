/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

//! deleteTodo works but has an issue
//! A user can delete someone's todo
//! that's gonna get a fix
//! middleware will be added

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const {
		id
	}: {
		id: string
	} = req.body

	//! will check if the user has the cookie or not
	const cookie = req.cookies

	if (!req.cookies.ACCESS_TOKEN) {
		return res.status(400).json({ message: 'cookie not found' })
	}

	const token = jwt.verify(cookie.ACCESS_TOKEN, 'hello') as { id: string }

	const userTodo = await prisma.todo.findMany({
		where: {
			userId: id
		}
	})

	/* if (!userTodo) {
		res.status(404).json({ message: 'Todo not found' })
	}

	if (userTodo[0].userId !== token.id) {
		res.status(401).json({ message: 'Not Authorized' })
	} */

	console.log(userTodo)
	console.log(token.id)

	try {
		const deletedTodo = await prisma.todo.delete({
			where: {
				id
			}
		})
		res.status(200).json({ message: 'deleted', deletedTodo })
	} catch (error) {
		res.status(400).json({ message: 'could not deleted', error })
	}

	/* console.log(id)
	console.log(userTodos.filter(todo => todo.id === id)) */

	/* if (token.id !== id) {
		return res.status(404).json({ message: "you cannot delete one's todo" })
	} */
}
