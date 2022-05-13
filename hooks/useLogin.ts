import type { User } from '@prisma/client'
import type { UseMutateFunction } from 'react-query'
import { useMutation, useQueryClient } from 'react-query'

import { loginQuery } from '@/services/api'

const useLoginMutation: () => {
	mutate: UseMutateFunction<
		User,
		unknown,
		{
			email: string | null
			password: string | null
		},
		unknown
	>
	isLoading: boolean
	error: unknown
	data: User | undefined
} = () => {
	const queryClient = useQueryClient()

	const { mutate, data, error, isLoading } = useMutation(loginQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('user')
		}
	})
	return { mutate, isLoading, error, data }
}

export default useLoginMutation
