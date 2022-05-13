import { Navbar } from '@/components/index'
import { render, screen } from '@/utils/testUtils'

describe('Navbar', () => {
	test('should render correctly', () => {
		render(<Navbar />)
		expect(screen.getByText('Todos')).toBeInTheDocument()
		expect(screen).toMatchSnapshot()
	})
})
