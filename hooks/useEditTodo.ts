import type { Todo } from '@prisma/client'
import type { UseMutateFunction } from 'react-query'
import { useMutation } from 'react-query'

import { editTodoQuery } from '@/services/todos'

const useEditTodo: () => {
	mutate: UseMutateFunction<
		Todo,
		unknown,
		{
			id: string
			title: string
			completed: boolean
			deadline: Date
			priority: number
		},
		unknown
	>
	isError: boolean
	isLoading: boolean
	error: unknown
} = () => {
	const { mutate, isError, isLoading, error } = useMutation(editTodoQuery)

	return { mutate, isError, isLoading, error }
}

export default useEditTodo
