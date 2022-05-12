import userEvent from '@testing-library/user-event'

import { SigninForm } from '@/components/index'
import { render, screen } from '@/utils/testUtils'

describe('Signin form', () => {
	describe('validation of inputs', () => {
		it('displays error when empty input', async () => {
			render(<SigninForm />)
			userEvent.click(screen.getByRole('button', { name: /sign in/i }))
			expect(
				screen.getByText(/Entered value does not match email format/i)
			).toBeInTheDocument()
		})
	})
})
