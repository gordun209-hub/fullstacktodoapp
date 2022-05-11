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
import { useRouter } from 'next/router'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { loginQuery } from '@/services/api'
import type { FormValues } from '@/types/form'

import AvatarComponent from './Avatar'

const SigninForm: () => JSX.Element = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>()
	const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
		mutate(
			{ email, password },
			{
				onError: err => {
					// eslint-disable-next-line no-console
					console.log(err)
				},
				onSuccess: () => {
					router.push('/')
				}
			}
		)
	}
	const queryClient = useQueryClient()
	const { mutate } = useMutation(loginQuery, {
		onSuccess: () => queryClient.invalidateQueries('user')
	})

	const router = useRouter()
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
