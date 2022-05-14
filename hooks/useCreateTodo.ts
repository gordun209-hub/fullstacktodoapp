import type { Todo } from '@prisma/client'
import type { UseMutateFunction } from 'react-query'
import { useMutation, useQueryClient } from 'react-query'

import { createTodoQuery } from '@/services/todos'

const useCreateTodo: () => {
	mutate: UseMutateFunction<
		Todo,
		unknown,
		{
			priority: number
			title: string
			completed: boolean
			deadline?: Date
		},
		unknown
	>
	isLoading: boolean
	error: unknown
	data: Todo | undefined
	isSuccess: boolean
} = () => {
	const queryClient = useQueryClient()
	const { mutate, isLoading, error, data, isSuccess } = useMutation(
		createTodoQuery,
		{
			onSuccess: () => {
				queryClient.invalidateQueries('todo')
			}
		}
	)

	return {
		data,
		mutate,
		isLoading,
		error,
		isSuccess
	}
}

export default useCreateTodo
