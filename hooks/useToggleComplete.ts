import type { Todo } from '@prisma/client'
import type { UseMutateFunction } from 'react-query'
import { useMutation, useQueryClient } from 'react-query'

import { completeTodoQuery } from '@/services/todos'

const useCompleteTodo: () => {
	mutate: UseMutateFunction<
		Todo,
		unknown,
		{
			id: string
		},
		unknown
	>
	isLoading: boolean
	error: unknown
} = () => {
	const queryClient = useQueryClient()
	const { mutate, isLoading, error } = useMutation(completeTodoQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('todo')
		}
	})

	return {
		mutate,
		isLoading,
		error
	}
}

export default useCompleteTodo
