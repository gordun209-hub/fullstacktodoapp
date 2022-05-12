import { Input } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { useRouter } from 'next/router'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { signupQuery } from '@/services/api'
import type { FormValues } from '@/types/form'

import useUser from '../../hooks/useUser'

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
		router.push('/')
	}
	return (
		<Box
			noValidate
			component='form'
			sx={{ mt: 3 }}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Input
						required
						fullWidth
						autoFocus
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
						{...register('password', {
							required: 'required',
							minLength: {
								value: 5,
								message: 'min length is 5'
							}
						})}
						id='password'
						autoComplete='current-password'
						placeholder='password'
					/>
					{errors.password && (
						<span role='alert'>{errors.password.message}</span>
					)}
				</Grid>
				<Grid item xs={12}>
					<FormControlLabel
						control={<Checkbox value='allowExtraEmails' color='primary' />}
						label='I want to receive inspiration, marketing promotions and updates via email.'
					/>
				</Grid>
			</Grid>

			<Button fullWidth type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
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
