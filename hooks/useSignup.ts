import type { User } from '@prisma/client'
import type { UseMutateFunction } from 'react-query'
import { useMutation, useQueryClient } from 'react-query'

import { signupQuery } from '@/services/api'

const useSignupMutation: () => {
	mutate: UseMutateFunction<
		User,
		unknown,
		{
			email: string
			password: string
		},
		unknown
	>
	isLoading: boolean
	error: unknown
	data: User | undefined
} = () => {
	const queryClient = useQueryClient()

	const { mutate, data, error, isLoading } = useMutation(signupQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('user')
		}
	})

	return { mutate, isLoading, error, data }
}
export default useSignupMutation
