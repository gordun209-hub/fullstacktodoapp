
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import MainContent from '@/components/MainContent'
import MainHero from '@/components/MainHero'
import Signup from '@/components/Signup'
import { getUserQuery } from '@/services/api'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { AvatarComponent, SignupForm } from '@/components/index'


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
		<ThemeProvider theme={theme}>
			<Container component='main' maxWidth='xs'>
				<Box
					sx={{
						marginTop: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
          <MainHero path='/auth.jpg' />
					<AvatarComponent />
					<Typography component='h1' variant='h5'>
						Sign up
					</Typography>
					<SignupForm />
				</Box>
			</Container>
		</ThemeProvider>
        	</MainContent>
			</Box>
		</div>

	)
}

export default SignUp
