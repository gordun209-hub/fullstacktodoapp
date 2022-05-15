import type { Todo } from '@prisma/client'
import { useQuery } from 'react-query'

import { getTodoQuery } from '@/services/todos'

const useGetTodo: (id: string) => {
	data: Todo | undefined
	error: unknown
	isError: boolean
	isLoading: boolean
} = (id: string) => {
	const { data, isError, isLoading, error } = useQuery(['getTodo', id], () =>
		getTodoQuery({ id })
	)

	return {
		data,
		error,
		isError,
		isLoading
	}
}

export default useGetTodo
