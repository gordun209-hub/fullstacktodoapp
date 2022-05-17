import type { User } from '@prisma/client'
import { useQuery } from 'react-query'

import { getUserQuery } from '@/services/user'

const useGetUser: () => {
	data: User | undefined
	error: unknown
	isLoading: boolean
} = () => {
	const { data, error, isLoading } = useQuery('getUser', getUserQuery)

	return { data, error, isLoading }
}
export default useGetUser
