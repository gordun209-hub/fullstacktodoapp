import bcrypt from 'bcrypt'
import cookie from 'cookie'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../lib/prisma'

const signup: (
	req: NextApiRequest,
	res: NextApiResponse
) => Promise<void> = async (req: NextApiRequest, res: NextApiResponse) => {
	const salt = bcrypt.genSaltSync(10)
	const { email, password } = req.body
	let user
	try {
		user = await prisma.user.create({
			data: {
				email,
				password: bcrypt.hashSync(password, salt)
			}
		})
	} catch (e) {
		res.status(401).json({ error: 'user already exixst' })
		return
	}
	const token = jwt.sign(
		{
			email: user.email,
			id: user.id,
			time: Date.now()
		},
		'hello',
		{ expiresIn: '8h' }
	)
	res.setHeader(
		'Set-cookie',
		cookie.serialize('ACCESS_TOKEN', token, {
			httpOnly: true,
			maxAge: 8 * 60 * 60,
			path: '/',
			sameSite: 'lax',
			secure: process.env.NODE_ENV === 'production'
		})
	)
	res.json(user)
}
export default signup
