import cookie from 'cookie'
// src/mocks/handlers.js
import { rest } from 'msw'
const baseUrl = 'http://localhost:3000/api'
export const handlers = [
	rest.get(`${baseUrl}/me`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json({
				id: 1
			})
		)
	}),
	rest.get(`${baseUrl}/todos`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					id: 1,
					title: 'Learn GraphQL',
					completed: true,
					priority: 1
				},
				{
					id: 2,
					title: 'Learn React',
					completed: false,
					priority: 2
				}
			])
		)
	}),
	rest.get(`${baseUrl}/users`, (req, res, ctx) => {
		return res(
			ctx.status(200),
			ctx.json([
				{
					id: 1,
					email: 'ali-han80@hotmail.com',
					password: '123456'
				},
				{
					id: 2,
					email: 'albas-han80@hotmail.com',
					password: '123456'
				}
			])
		)
	}),
	rest.post(`${baseUrl}/signup`, (req, res, ctx) => {
		const { email, password } = req.body as {
			email: string
			password: string
		}
		return res(
			ctx.status(200),
			ctx.json({
				id: 1,
				email,
				password
			})
		)
	}),
	rest.post(`${baseUrl}/signin`, (req, res, ctx) => {
		const { email, password } = req.body as {
			email: string
			password: string
		}
		return res(
			ctx.status(200),
			ctx.json({
				id: 1,
				email,
				password
			})
		)
	}),
	rest.post(`${baseUrl}/logout`, (req, res, ctx) => {
		return res(ctx.status(200))
	})
]
