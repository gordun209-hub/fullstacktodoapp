/* eslint-disable react/no-unescaped-entities */
import { Box } from '@mui/material'
import type { ReactNode } from 'react'

import {
	HomeContent,
	MainContent,
	MainHero,
	MainLayout
} from '@/components/index'

const Home: {
	(): JSX.Element
	getLayout(page: ReactNode): JSX.Element
} = () => {
	return (
		<div>
			<Box className='flex h-screen'>
				<MainHero path='/hero.jpg' />
				<MainContent>
					<HomeContent />
				</MainContent>
			</Box>
		</div>
	)
}

export default Home

Home.getLayout = page => <MainLayout>{page}</MainLayout>
