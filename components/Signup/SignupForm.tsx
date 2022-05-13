import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { signupQuery } from '@/services/api'
import type { FormValues } from '@/types/form'

import useUser from '../../hooks/useUser'
import Form from '../AuthForm/Form'
import FormWrapper from '../AuthForm/FormWrapper'

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
		<FormWrapper type='signup'>
			<Form
				errors={errors}
				register={register}
				type='signup'
				submit={handleSubmit(onSubmit)}
			/>
		</FormWrapper>
	)
}
export default SignupForm
