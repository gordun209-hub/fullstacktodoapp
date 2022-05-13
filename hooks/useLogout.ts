import type { UseMutateFunction } from 'react-query'
import { useMutation, useQueryClient } from 'react-query'

import { logOutQuery } from '@/services/api'

const useLogoutMutation: () => {
	mutate: UseMutateFunction<void>
	isLoading: boolean
	error: unknown
	data: void | undefined
} = () => {
	const queryClient = useQueryClient()

	const { mutate, data, error, isLoading } = useMutation(logOutQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('user')
		}
	})
	return { mutate, isLoading, error, data }
}
export default useLogoutMutation
