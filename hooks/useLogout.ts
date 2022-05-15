import { useRouter } from 'next/router'
import type { UseMutateFunction } from 'react-query'
import { useMutation, useQueryClient } from 'react-query'

import { logOutQuery } from '@/services/user'

const useLogoutMutation: () => {
	mutate: UseMutateFunction<void>
	isLoading: boolean
	error: unknown
	data: void | undefined
} = () => {
	const queryClient = useQueryClient()
	const router = useRouter()
	const { mutate, data, error, isLoading } = useMutation(logOutQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('user').then(() => {
				router.push('/')
			})
		}
	})
	return { mutate, isLoading, error, data }
}
export default useLogoutMutation
