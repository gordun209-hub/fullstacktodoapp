import MainContent from '@/components/Layout/MainContent'
import { render, screen } from '@/utils/testUtils'

describe('MainContent', () => {
	render(
		<MainContent>
			<div>laa</div>
		</MainContent>
	)
	test('renders correctly', () => {
		expect(screen).toMatchSnapshot()
		expect(screen.getByText('laa')).toBeInTheDocument()
	})
})
