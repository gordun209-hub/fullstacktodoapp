/* eslint-disable @typescript-eslint/explicit-function-return-type */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
import { Box, Button, Input } from '@mui/material'
import type { FC } from 'react'
import type { FieldError, UseFormRegister } from 'react-hook-form'

import type { FormValues } from '@/types/form'

import FormError from './FormError'

type FormProps = {
	errors: {
		email?: FieldError | undefined
		password?: FieldError | undefined
	}
	register: UseFormRegister<FormValues>
	type: 'signin' | 'signup'
	submit: () => void
	serverError?: string
}
const Form: FC<FormProps> = ({
	errors,
	register,
	type,
	submit,
	serverError
}) => {
	const emailValidator = {
		...register('email', {
			required: 'required',
			pattern: {
				value: /\S+@\S+\.\S+/,
				message: 'Entered value does not match email format'
			}
		})
	}

	const passwordValidator = {
		...register('password', {
			required: 'required',
			minLength: {
				value: 5,
				message: 'min length is 5'
			}
		})
	}

	const inputClass =
		'border-2 border-blue-100 focus-within:border-blue-300 px-3 py-2 rounded-md'

	return (
		<Box
			noValidate
			className='w-full mt-10 space-y-4'
			component='form'
			onSubmit={submit}
		>
			<Input
				required
				fullWidth
				autoFocus
				aria-invalid={errors.email ? 'true' : 'false'}
				{...emailValidator}
				id='email'
				type='email'
				disableUnderline={true}
				placeholder='example@mail.com'
				name='email'
				autoComplete='email'
				className={`${inputClass}  ${
					errors.email && 'focus-within:border-red-400 border-red-400'
				}`}
			/>

			<FormError errors={errors?.email} />
			<Input
				required
				fullWidth
				id='password'
				type='password'
				disableUnderline={true}
				aria-invalid={errors.password ? 'true' : 'false'}
				{...passwordValidator}
				autoComplete='current-password'
				placeholder='password'
				className={`${inputClass} ${
					errors.password && 'focus-within:border-red-400 border-red-400'
				} `}
			/>

			<FormError errors={errors.password} />
			<p className='text-red-500'>{serverError}</p>

			<Button
				fullWidth
				data-cy='form-submit'
				type='submit'
				variant='contained'
				className='bg-blue-500 hover:bg-blue-400 py-2 mt-3 mb-2'
			>
				{type === 'signup' ? 'Sign up' : 'Sign in'}
			</Button>
		</Box>
	)
}

export default Form
