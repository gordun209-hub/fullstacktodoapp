import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { ReactNode } from 'react'

import {
	MainContent,
	MainHero,
	MainLayout,
	SignupForm
} from '@/components/index'

const theme = createTheme()

const SignUp: {
	(): JSX.Element
	getLayout(page: ReactNode): JSX.Element
} = () => {
	return (
		<div>
			<Box className='h-screen flex'>
				<MainHero path='/auth.jpg' />
				<MainContent>
					<ThemeProvider theme={theme}>
						<SignupForm />
					</ThemeProvider>
				</MainContent>
			</Box>
		</div>
	)
}

export default SignUp

SignUp.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>
