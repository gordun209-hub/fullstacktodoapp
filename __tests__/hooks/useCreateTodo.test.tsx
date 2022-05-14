import { renderHook, waitFor } from '@testing-library/react'
import { rest } from 'msw'

import useCreateTodo from '@/hooks/useCreateTodo'
import { createWrapper } from '@/utils/testHookUtils'

import { server } from '../../jest.setup'

describe('query hook', () => {
	test('succesful query hook', async () => {
		server.use(
			rest.post(
				'http://localhost:3000/api/user/todo/makeTodo',
				(req, res, ctx) => {
					const { title } = req.body as { title: string }
					return res(
						ctx.json({
							data: {
								id: 1,
								title,
								completed: false,
								priority: 1
							}
						})
					)
				}
			)
		)
		const { result } = renderHook(() => useCreateTodo(), {
			wrapper: createWrapper()
		})
		await waitFor(() =>
			expect(
				result.current.mutate({
					priority: 1,
					completed: false,
					title: 'test'
				})
			)
		)
		await waitFor(() => expect(result.current.isSuccess).toBe(true))
		expect(result.current.data).toEqual({
			data: {
				id: 1,
				title: 'test',
				completed: false,
				priority: 1
			}
		})
	})
	test('failed query hook', async () => {
		server.use(
			rest.post(
				'http://localhost:3000/api/user/todo/makeTodo',
				(req, res, ctx) => {
					return res(ctx.status(500))
				}
			)
		)
		const { result } = renderHook(() => useCreateTodo(), {
			wrapper: createWrapper()
		})
		await waitFor(() => expect(result.current.isSuccess).toBe(false))
	})
})
