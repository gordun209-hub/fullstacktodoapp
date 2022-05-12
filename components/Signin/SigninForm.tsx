import { Input } from '@mui/material'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { loginQuery } from '@/services/api'
import type { FormValues } from '@/types/form'

import FormWrapper from './FormWrapper'

const SigninForm: () => JSX.Element = () => {
	const router = useRouter()

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

	return (
		<Box
			noValidate
			component='form'
			sx={{ mt: 1 }}
			onSubmit={handleSubmit(onSubmit)}
		>
			<FormWrapper>
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
				{errors.password && <span role='alert'>{errors.password.message}</span>}
			</FormWrapper>
		</Box>
	)
}
export default SigninForm
