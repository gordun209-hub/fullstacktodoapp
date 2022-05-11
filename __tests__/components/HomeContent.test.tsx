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
