import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Link,
	TextField
} from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { signupQuery } from '@/services/api'
import type { FormValues } from '@/types/form'
import useUser from '@/utils/useUser'

const SignupForm: () => JSX.Element = () => {
	const { mutate, error, isLoading } = useMutation(signupQuery, {
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
					<TextField
						required
						fullWidth
						id='email'
						{...register('email', { required: true })}
						label='Email Address'
						name='email'
						autoComplete='email'
					/>
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
