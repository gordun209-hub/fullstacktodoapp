import type { Todo } from '@prisma/client'
import type { UseMutateFunction } from 'react-query'
import { useMutation, useQueryClient } from 'react-query'

import { deleteTodoQuery } from '@/services/todos'

const useDeleteTodo: () => {
	mutate: UseMutateFunction<
		Todo,
		unknown,
		{
			id: string
		},
		unknown
	>
	error: unknown
	isLoading: boolean
} = () => {
	const queryClient = useQueryClient()
	const { mutate, error, isLoading } = useMutation(deleteTodoQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('todo')
		}
	})

	return { mutate, error, isLoading }
}
export default useDeleteTodo
