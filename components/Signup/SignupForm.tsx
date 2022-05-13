import { Input } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { signupQuery } from '@/services/api'
import type { FormValues } from '@/types/form'

import useUser from '../../hooks/useUser'
import AvatarComponent from '../Signin/Avatar'

const SignupForm: () => JSX.Element = () => {
	const { mutate } = useMutation(signupQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('user')
		}
	})
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
	const { user } = useUser()
	const router = useRouter()
	if (user?.id) {
		router.push('/user')
	}
	return (
		<Box
			noValidate
			data-cy='signup-form'
			component='form'
			className='my-8 mx-4 flex flex-col items-center'
			onSubmit={handleSubmit(onSubmit)}
		>
			<AvatarComponent />
			<Typography component='h1' variant='h5'>
				Sign up
			</Typography>
			<Grid container spacing={2} className='mt-1'>
				<Grid item xs={12}>
					<Input
						required
						fullWidth
						autoFocus
						data-cy='signup-email'
						data-testid='email'
						aria-invalid={errors.email ? 'true' : 'false'}
						{...register('email', {
							required: 'required',
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: 'Entered value does not match email format'
							}
						})}
						id='email'
						type='email'
						placeholder='example@mail.com'
						name='email'
						autoComplete='email'
					/>
					{errors.email && <span role='alert'>{errors.email.message}</span>}
				</Grid>
				<Grid item xs={12}>
					<Input
						required
						fullWidth
						data-cy='signup-password'
						{...register('password', {
							required: 'required',
							minLength: {
								value: 5,
								message: 'min length is 5'
							}
						})}
						id='password'
						data-testid='password'
						autoComplete='current-password'
						placeholder='password'
					/>
					{errors.password && (
						<span data-cy='password-error' role='alert'>
							{errors.password.message}
						</span>
					)}
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						data-cy='signup-remember'
						className='text-zinc-500'
						control={<Checkbox value='allowExtraEmails' color='primary' />}
						label='I agree to the terms and conditions'
					/>
				</Grid>
			</Grid>

			<Button
				fullWidth
				data-cy='signup-submit'
				type='submit'
				variant='contained'
				className='bg-blue-500 hover:bg-blue-400 mt-3 mb-2'
			>
				Sign Up
			</Button>

			<Grid container justifyContent='flex-end'>
				<Grid item>
					<Link data-cy='signup-link' href='signin' variant='body2'>
						<span data-cy='signup-text'>Already have an account? Sign in</span>
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
export default SignupForm
