// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
	rest.get('http://localhost:3000/api/me', (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					id: 1,
					text: 'Hello World',
					user: {
						id: 1,
						name: 'John Doe'
					}
				}
			])
		)
	})
]
