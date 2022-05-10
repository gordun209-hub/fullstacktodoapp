/* eslint-disable @typescript-eslint/no-explicit-any */
import type { User } from '@prisma/client'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from './prisma'
//TODO add proper type
//! take handler that type is like express function, then return a function for validating user
export const validateRoute = (handler: any) => {
	//! this parts is for validating user token -------------------------------0
	return async (req: NextApiRequest, res: NextApiResponse) => {
		const token = req.cookies.ACCESS_TOKEN
		if (token) {
			let user: User | null
			try {
				const { id } = jwt.verify(token, 'hello') as { id: string }
				user = await prisma.user.findUnique({
					where: { id }
				})
				if (!user) {
					throw new Error('Not real user')
				}
			} catch (e) {
				res.status(401)
				res.json({ error: 'Not authorized' })
				return
			}
			//! -----------------------------------------------------------------------0
			//! if valid return taken function
			//! if its not response with error and not authorized
			return handler(req, res, user)
		}
		res.status(401)
		res.json({ error: 'Not Authorized' })
	}
}

export const validateToken: (token: string) => string | jwt.JwtPayload = (
	token: string
) => {
	const user = jwt.verify(token, 'hello')
	return user
}
