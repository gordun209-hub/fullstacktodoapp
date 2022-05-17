import type { User } from '@prisma/client'
import { useQuery } from 'react-query'

import { getUserQuery } from '@/services/user'

const useGetUsers: () => {
	data: User | undefined
	error: unknown
	isLoading: boolean
} = () => {
	const { data, error, isLoading } = useQuery('getUsers', getUserQuery)

	return { data, error, isLoading }
}

export default useGetUsers
