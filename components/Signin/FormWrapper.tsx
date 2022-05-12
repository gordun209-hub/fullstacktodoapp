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
				control={<Checkbox value='remember' color='primary' />}
				label='Remember me'
			/>

			<Button fullWidth type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
				Sign In
			</Button>
			<Grid container>
				<Grid item xs>
					<Link href='#' variant='body2'>
						Forgot password?
					</Link>
				</Grid>
				<Grid item>
					<Link href='/signup' variant='body2'>
						{"Don't have an account? Sign Up"}
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
export default FormWrapper
