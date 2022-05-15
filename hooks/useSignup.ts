import type { User } from '@prisma/client'
import type { UseMutateFunction } from 'react-query'
import { useMutation, useQueryClient } from 'react-query'

import { signupQuery } from '@/services/api'

type ServerError = {
	error: string
}
const useSignupMutation: () => {
	mutate: UseMutateFunction<
		User | ServerError,
		unknown,
		{
			email: string
			password: string
		},
		unknown
	>
	isLoading: boolean
	error: unknown
	data: User | ServerError | undefined
	isError: boolean
} = () => {
	const queryClient = useQueryClient()

	const { mutate, data, error, isLoading, isError } = useMutation(signupQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('user')
		}
	})

	return { mutate, isLoading, error, data, isError }
}
export default useSignupMutation
