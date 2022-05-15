import { Navbar } from '@/components/index'
import { render, screen } from '@/utils/testUtils'

jest.mock('next/router', () => ({
	useRouter: jest.fn().mockImplementation(() => ({
		query: {
			type: 'USER'
		}
	}))
}))
describe('Navbar', () => {
	test('should render correctly', () => {
		render(<Navbar />)
		expect(screen.getByText('USER')).toBeInTheDocument()
		expect(screen).toMatchSnapshot()
	})
})
