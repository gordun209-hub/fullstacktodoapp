import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { ReactNode } from 'react'

import {
	MainContent,
	MainHero,
	MainLayout,
	SigninForm
} from '@/components/index'

const theme = createTheme()

const SignIn: {
	(): JSX.Element
	getLayout(page: ReactNode): JSX.Element
} = () => {
	return (
		<div>
			<Box
				sx={{
					display: 'flex',
					height: '100vh'
				}}
			>
				<MainHero path='/auth.jpg' />
				<MainContent>
					<ThemeProvider theme={theme}>
						<SigninForm />
					</ThemeProvider>
				</MainContent>
			</Box>
		</div>
	)
}
export default SignIn

SignIn.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>
