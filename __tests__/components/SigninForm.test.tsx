import userEvent from '@testing-library/user-event'

import { SigninForm } from '@/components/index'
import { render, screen } from '@/utils/testUtils'

describe('Signin form', () => {
	describe('validation of inputs', () => {
		it('displays error when empty input', async () => {
			render(<SigninForm />)
			userEvent.click(screen.getByRole('button', { name: /sign in/i }))
			expect(await screen.findAllByRole('alert')).toHaveLength(2)
		})
	})
})
