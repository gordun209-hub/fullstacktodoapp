import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	Typography
} from '@mui/material'

import AvatarComponent from './Avatar'

const FormWrapper: ({
	children
}: {
	children: React.ReactNode
}) => JSX.Element = ({ children }) => {
	return (
		<Box
			data-cy='form-wrapper'
			sx={{
				my: 8,
				mx: 4,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			<AvatarComponent />
			<Typography component='h1' variant='h5'>
				Sign in
			</Typography>
			{children}
			<FormControlLabel
				data-cy='remember-me'
				control={<Checkbox value='remember' color='primary' />}
				label='Remember me'
			/>

			<Button
				fullWidth
				data-cy='signin-button'
				type='submit'
				variant='contained'
				sx={{ mt: 3, mb: 2 }}
			>
				Sign In
			</Button>
			<Grid container>
				<Grid item xs>
					<Link href='#' data-cy='forgot-password' variant='body2'>
						Forgot password?
					</Link>
				</Grid>
				<Grid item>
					<Link href='/signup' data-cy='signup' variant='body2'>
						<span data-cy='signup-text'>
							Don&apos;t have an account? Sign Up
						</span>
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
export default FormWrapper
