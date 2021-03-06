import { Sidebar } from '@/components/index'
import { render, screen } from '@/utils/testUtils'

jest.mock('next/router', () => ({
	useRouter: jest.fn().mockImplementation(() => ({
		query: {
			type: 'inbox'
		}
	}))
}))
describe('Sidebar', () => {
	describe('renders properly', () => {
		test('renders inline components', () => {
			render(<Sidebar />)
			expect(
				screen.getByRole('button', { name: /logout/i })
			).toBeInTheDocument()
			expect(screen.getByRole('list')).toBeInTheDocument()
		})
	})
})
