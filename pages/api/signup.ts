import bcrypt from 'bcrypt'
import cookie from 'cookie'
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../lib/prisma'

const signup: (
	req: NextApiRequest,
	res: NextApiResponse
) => Promise<void> = async (req: NextApiRequest, res: NextApiResponse) => {
	//! generate salt
	const salt = bcrypt.genSaltSync(10)
	//! get email and password from body for login
	const { email, password } = req.body
	let user
	try {
		//! create user with prisma client and hash given password
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
	//! generate token for user with user informaton
	const token = jwt.sign(
		{
			email: user.email,
			id: user.id,
			time: Date.now()
		},
		'hello',
		{ expiresIn: '8h' }
	)
	//! set header for cookie
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
	//! response with user
	res.json(user)
}
export default signup
