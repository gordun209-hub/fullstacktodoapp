import cookie from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

const logout: (req: NextApiRequest, res: NextApiResponse) => void = (
	req: NextApiRequest,
	res: NextApiResponse
) => {
	if (req.method === 'POST') {
		res.setHeader(
			'Set-Cookie',
			cookie.serialize('ACCESS_TOKEN', '', {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production',
				sameSite: 'lax',
				path: '/'
			})
		)
		res.status(200).json({ message: 'Success' })
	}
}
export default logout
