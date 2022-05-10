import bcrypt from 'bcrypt'
import cookie from 'cookie'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../lib/prisma'

const login: (
	req: NextApiRequest,
	res: NextApiResponse
) => Promise<void> = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email, password } = req.body
	const user = await prisma.user.findUnique({
		where: {
			email
		}
	})
	if (user && bcrypt.compareSync(password, user.password)) {
		const token = jwt.sign(
			{
				id: user.id,
				email: user.email,
				time: Date.now()
			},
			'hello',
			{
				expiresIn: '8h'
			}
		)
		//! set token and cookie at header
		res.setHeader(
			'Set-Cookie',
			cookie.serialize('ACCESS_TOKEN', token, {
				httpOnly: true,
				maxAge: 8 * 60 * 60,
				path: '/',
				sameSite: 'lax',
				secure: process.env.NODE_ENV === 'production'
			})
		)
		//!response with json
		res.json(user)
	} else {
		res.status(401)
		res.json({ error: 'Email or password is wrong' })
	}
}
export default login
