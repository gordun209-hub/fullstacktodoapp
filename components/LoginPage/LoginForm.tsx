import {
	Box,
	Button,
	Divider,
	Input,
	InputLabel,
	Stack,
	Typography
} from '@mui/material'
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
		<Box display={'flex'} justifyContent={'center'}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Box display={'flex'} flexDirection={'column'} gap={4} width={'100%'}>
					<Box width={'100%'}>
						<InputLabel error={!!errors.email}> Email </InputLabel>
						<Input
							type='email'
							placeholder='Email'
							{...register('email', {
								required: true
							})}
						/>
					</Box>
					<Box>
						<InputLabel error={!!errors.password}> Password </InputLabel>
						<Input
							type='password'
							placeholder='password'
							{...register('password', { required: true })}
						/>
					</Box>
					{errors.email && <Typography>Email is required</Typography>}
					{errors.password && <Typography>Password is required</Typography>}
					<Box>
						<Button variant='contained' type='submit'>
							<Typography>signin</Typography>
						</Button>
					</Box>
				</Box>
			</form>
		</Box>
	)
}
export default LoginForm
