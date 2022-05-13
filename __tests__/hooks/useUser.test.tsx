import { renderHook, waitFor } from '@testing-library/react'
import { rest } from 'msw'

import { createWrapper } from '@/utils/testHookUtils'

import useUser from '../../hooks/useUser'
import { server } from '../../jest.setup'

describe('query hook', () => {
	test('succesful query hook', async () => {
		const { result } = renderHook(() => useUser(), {
			wrapper: createWrapper()
		})
		await waitFor(() => expect(result.current.isSuccess).toBe(true))
		expect(result.current.user?.id).toBe(1)
	})

	test('failed query hook', async () => {
		server.use(
			rest.get('*', (req, res, ctx) => {
				return res(ctx.status(500))
			})
		)
		const { result } = renderHook(() => useUser(), {
			wrapper: createWrapper()
		})

		await waitFor(() => expect(result.current.isError).toBeDefined())
	})
})
