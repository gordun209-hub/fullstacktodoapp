import { Box, Button, Checkbox, Input, Typography } from '@mui/material'
import type { NextPage } from 'next'
import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

import {
	completeTodoQuery,
	createTodoQuery,
	getTodoQuery
} from '@/services/todos'

const Todos: NextPage = () => {
	// const router = useRouter()
	// const { type } = router.query

	const queryClient = useQueryClient()
	const { mutate: createTodo } = useMutation(createTodoQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('todo')
		}
	})
	const { mutate: completeTodo } = useMutation(completeTodoQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('todo')
		}
	})

	const { data } = useQuery('todo', getTodoQuery)

	// get todos

	const handleSubmit = e => {
		e.preventDefault()
		const todo = e.target.todo.value
		createTodo({ priority: 1, completed: false, title: todo })
	}

	const toggleComplete = id => {
		completeTodo({ id })
	}

	return (
		<Box>
			<Box
				className='flex items-center gap-3'
				component='form'
				onSubmit={handleSubmit}
			>
				<Input type='text' placeholder='Todo' name='todo' />
				<Button
					type='submit'
					variant='contained'
					className='bg-blue-500 hover:bg-blue-400 mt-3 mb-2'
				>
					New Todo
				</Button>
			</Box>

			<Box>
				{data &&
					data.map(todo => (
						<Box key={todo.id} className='flex items-center'>
							<Checkbox
								checked={todo.completed}
								onClick={() => toggleComplete(todo.id)}
							/>
							<Typography
								className={`${
									todo.completed ? 'line-through text-zinc-400' : ''
								}`}
							>
								{todo.title}
							</Typography>
						</Box>
					))}
			</Box>
		</Box>
	)
}

export default Todos
