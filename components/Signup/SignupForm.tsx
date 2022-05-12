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
		mutate({ email, password })
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
					<TextField
						required
						fullWidth
						id='email'
						{...register('email', { required: true })}
						label='Email Address'
						name='email'
						autoComplete='email'
					/>
					{errors.email && <p>please enter a valid email address</p>}
				</Grid>
				<Grid item xs={12}>
					<TextField
						required
						fullWidth
						label='Password'
						{...register('password', { required: true, minLength: 8 })}
						type='password'
						id='password'
						autoComplete='new-password'
					/>
					{errors.password && <p> password min length 8 </p>}
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						className='text-zinc-500'
						control={<Checkbox value='allowExtraEmails' color='primary' />}
						label='I agree to the terms and conditions'
					/>
				</Grid>
			</Grid>

			<Button
				fullWidth
				type='submit'
				variant='contained'
				className='bg-blue-500 hover:bg-blue-400 mt-3 mb-2'
			>
				Sign Up
			</Button>

			<Grid container justifyContent='flex-end'>
				<Grid item>
					<Link href='signin' variant='body2'>
						Already have an account? Sign in
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
export default SignupForm
