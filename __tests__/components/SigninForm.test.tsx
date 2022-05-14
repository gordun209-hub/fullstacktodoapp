import userEvent from '@testing-library/user-event'

import { SigninForm } from '@/components/index'
import { render, screen } from '@/utils/testUtils'

jest.mock('next/router', () => ({
	useRouter: jest.fn(() => ({
		push: jest.fn()
	}))
}))
describe('Signin form', () => {
	describe('validation of inputs', () => {
		it('displays error when empty input', async () => {
			render(<SigninForm />)
			userEvent.click(screen.getByRole('button', { name: /sign in/i }))
			expect(await screen.findAllByRole('alert')).toHaveLength(2)
		})
		it('should display matching error when email is invalid', async () => {
			render(<SigninForm />)
			const emailInput = screen.getByRole('textbox')
			const passwordInput = screen.getByPlaceholderText(/password/i)
			await userEvent.type(emailInput, 'email')
			await userEvent.type(passwordInput, 'password')
			await userEvent.click(screen.getByRole('button', { name: /sign in/i }))
			expect(await screen.findByRole('alert')).toBeInTheDocument()
			expect(await screen.findByRole('alert')).toHaveTextContent(
				/Entered value does not match email format/i
			)
		})
		it('should display matching error when password is invalid', async () => {
			render(<SigninForm />)
			const emailInput = screen.getByRole('textbox')
			const passwordInput = screen.getByPlaceholderText(/password/i)
			await userEvent.type(emailInput, 'ali-han80@hotmail.com')
			await userEvent.type(passwordInput, 'pass')
			await userEvent.click(screen.getByRole('button', { name: /sign in/i }))
			expect(await screen.findByRole('alert')).toBeInTheDocument()
			expect(await screen.findByRole('alert')).toHaveTextContent(
				/min length is 5/i
			)
		})
	})
})
