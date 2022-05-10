import { useRouter } from 'next/router'
import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { loginQuery } from '@/services/api'
import type { FormValues } from '@/types/form'

const LoginForm: FC = () => {
	const queryClient = useQueryClient()
	const { mutate } = useMutation(loginQuery, {
		onSuccess: () => queryClient.invalidateQueries('user')
	})

	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>()
	const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
		mutate({ email, password })
		router.push('/')
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type='email'
				placeholder='Email'
				{...register('email', {
					required: true
				})}
			/>
			<input
				type='password'
				placeholder='password'
				{...register('password', { required: true })}
			/>
			{errors.email && <p>Email is required</p>}
			{errors.password && <p>Password is required</p>}

			<input type='submit' />
		</form>
	)
}
export default LoginForm
