import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import MainContent from '@/components/MainContent'
import MainHero from '@/components/MainHero'

import { createTheme, ThemeProvider } from '@mui/material/styles'

import { SignupForm } from '@/components/index'

const theme = createTheme()

const SignUp: () => JSX.Element = () => {
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
						<SignupForm />
					</ThemeProvider>
				</MainContent>
			</Box>
		</div>
	)
}

export default SignUp
