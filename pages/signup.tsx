import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

import { AvatarComponent, SignupForm } from '@/components/index'

const theme = createTheme()

const SignUp: () => JSX.Element = () => {
	return (
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
					<AvatarComponent />
					<Typography component='h1' variant='h5'>
						Sign up
					</Typography>
					<SignupForm />
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default SignUp
