/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (!req.cookies.ACCESS_TOKEN) {
		return res.status(400).json({ message: 'Cookie not found' })
	}

	const { oldPassword, newPassword } = req.body

	const { id } = jwt.verify(
		req.cookies.ACCESS_TOKEN,
		process.env.SECRET_KEY as string
	)

	const user = await prisma.user.findUnique({
		where: {
			id: id as string
		}
	})

	if (bcrypt.compareSync(oldPassword, user?.password)) {
		const salt = bcrypt.genSaltSync(10)
		const updatedUser = await prisma.user.update({
			where: {
				id: user.id as string
			},
			data: {
				password: bcrypt.hashSync(newPassword, salt)
			}
		})
		res.json({ message: 'Password changed succesfully!' })
	}
	res.status(400).json({ message: 'Wrong password' })
}
