import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	TextField,
	Typography
} from '@mui/material'

import type { FormProps } from '@/types/form'

import AvatarComponent from './Avatar'

const SigninForm: ({
	handleSubmit,
	register,
	onSubmit
}: FormProps) => JSX.Element = ({
	handleSubmit,
	register,
	onSubmit,
	errors
}) => {
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
			<Box
				noValidate
				component='form'
				sx={{ mt: 1 }}
				onSubmit={handleSubmit(onSubmit)}
			>
				<TextField
					required
					fullWidth
					autoFocus
					{...register('email', {
						required: true,
						pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						minLength: 3
					})}
					margin='normal'
					id='email'
					label='Email Address'
					name='email'
					autoComplete='email'
				/>
				{errors.email && <p>{errors.email.message}</p>}
				<TextField
					required
					fullWidth
					margin='normal'
					label='Password'
					type='password'
					{...register('password', { required: true, minLength: 6 })}
					id='password'
					autoComplete='current-password'
				/>
				<FormControlLabel
					control={<Checkbox value='remember' color='primary' />}
					label='Remember me'
				/>
				<Button
					fullWidth
					type='submit'
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
				>
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
		</Box>
	)
}
export default SigninForm
