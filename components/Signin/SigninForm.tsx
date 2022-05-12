import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
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
					router.push('/user')
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
		<Box className='my-8 mx-4 flex flex-col items-center'>
			<AvatarComponent />
			<Typography component='h1' variant='h5'>
				Sign in
			</Typography>
			<Box
				noValidate
				component='form'
				className='mt-1'
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
					className='text-zinc-500'
					control={<Checkbox value='remember' color='primary' />}
					label='Remember me'
				/>
				<Button
					fullWidth
					type='submit'
					variant='contained'
					className='mt-3 mb-2 bg-blue-500 hover:bg-blue-400'
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
