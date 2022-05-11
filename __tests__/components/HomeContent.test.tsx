import { HomeContent } from '@/components/index'
import { render, screen } from '@/utils/testUtils'

describe('HomeContent', () => {
	it('renders correctly', async () => {
		render(<HomeContent />)

		expect(screen.getByText('Todo App')).toBeInTheDocument()
	})
})
