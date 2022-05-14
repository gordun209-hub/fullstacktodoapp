import { useRouter } from 'next/router'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import useLoginMutation from '@/hooks/useLogin'
import useUser from '@/hooks/useUser'
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

	const { mutate } = useLoginMutation()
	const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
		mutate({ email, password })
	}

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
