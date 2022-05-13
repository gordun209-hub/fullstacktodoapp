import useUser from 'hooks/useUser'
import { useRouter } from 'next/router'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { loginQuery } from '@/services/api'
import type { FormValues } from '@/types/form'

import Form from '../AuthForm/Form'
import FormWrapper from '../AuthForm/FormWrapper'

const SigninForm: () => JSX.Element = () => {
	const router = useRouter()
	const { user } = useUser()
	if (user?.id) {
		router.push('/user')
	}
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
					alert('hey')
					router.push('/')
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
		<FormWrapper type='signin'>
			<Form
				errors={errors}
				register={register}
				type='signin'
				submit={handleSubmit(onSubmit)}
			/>
		</FormWrapper>
	)
}
export default SigninForm
