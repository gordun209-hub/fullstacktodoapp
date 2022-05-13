import type { User } from '@prisma/client'
import { useQuery } from 'react-query'

import { getUserQuery } from '@/services/api'

const useUser: () => {
	user: User | undefined
	error: unknown
	isLoading: boolean
	isSuccess: boolean
	isError: boolean
} = () => {
	const { data, error, isLoading, isSuccess, isError } = useQuery(
		'user',
		getUserQuery
	)

	return {
		user: data,
		error,
		isLoading,
		isSuccess,
		isError
	}
}

export default useUser
