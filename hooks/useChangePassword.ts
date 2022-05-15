import type { User } from '@prisma/client'
import type { UseMutateFunction } from 'react-query'
import { useMutation, useQueryClient } from 'react-query'

import { changePasswordQuery } from '@/services/user'

type ServerError = {
	error: string
}

const useChangePassword: () => {
	mutate: UseMutateFunction<
		User | ServerError,
		unknown,
		{
			oldPassword: string
			newPassword: string
		},
		unknown
	>
	isLoading: boolean
	error: unknown
	data: User | ServerError | undefined
	isError: boolean
} = () => {
	const queryClient = useQueryClient()

	const { mutate, data, error, isLoading, isError } = useMutation(
		changePasswordQuery,
		{
			onSuccess: () => {
				queryClient.invalidateQueries('user')
			}
		}
	)

	return { mutate, isLoading, error, data, isError }
}
export default useChangePassword
