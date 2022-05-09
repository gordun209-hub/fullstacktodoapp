import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '../../lib/prisma'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
): Promise<void> {
	const users = await prisma.user.findMany({})
	res.json(users)
}
