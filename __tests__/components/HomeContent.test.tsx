/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/display-name */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { HomeContent } from '@/components/index'
import { render, screen, waitFor } from '@/utils/testUtils'

describe('HomeContent', () => {
	test('Button gets user href when there is a user', async () => {
		render(<HomeContent />)

		expect(screen.getByText('Todo App')).toBeInTheDocument()
		await waitFor(() => {
			const href = screen
				.getByRole('link', { name: /get started/i })
				.getAttribute('href')
			expect(href).toBe('/user')
		})
		expect(screen).toMatchSnapshot()
	})
	//!TODO write test for when no user
})
