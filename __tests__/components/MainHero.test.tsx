import { MainHero } from '@/components/index'
import { render, screen } from '@/utils/testUtils'

describe('must same with snapshots', () => {
	render(<MainHero path={'/hero.jpg'} />)
	test('is same with snapshot', () => {
		expect(screen).toMatchSnapshot()
	})
})
