import { Box, Button, Checkbox, Input, Typography } from '@mui/material'
import type { Todo } from '@prisma/client'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { SyntheticEvent } from 'react'
import React from 'react'
import { useQuery } from 'react-query'

import { useCreateTodo, useToggleComplete } from '@/hooks/index'
import { getTodoQuery } from '@/services/todos'

const Todos: NextPage = () => {
	const [todo, setTodo] = React.useState('')
	const { mutate: createTodo } = useCreateTodo()
	const router = useRouter()
	const filterType = router.query.type as string
	const { mutate: completeTodo } = useToggleComplete()

	const { data } = useQuery('todo', getTodoQuery)

	const handleSubmit: (e: SyntheticEvent<HTMLFormElement>) => void = e => {
		e.preventDefault()
		createTodo({ priority: 1, completed: false, title: todo })
		setTodo('')
	}

	const toggleComplete: (id: string) => void = id => {
		completeTodo({ id })
	}
	const filterTodos: (todos: Todo[]) => Todo[] = todos => {
		todos = todos.filter(todo => {
			if (filterType === 'completed') {
				return todo.completed
			} else {
				return true
			}
		})
		return todos
	}
	return (
		<Box>
			<Box
				className='flex items-center gap-3'
				component='form'
				data-cy='todo-form'
				onSubmit={handleSubmit}
			>
				<Input
					type='text'
					data-cy='-todo-input'
					placeholder='Todo'
					value={todo}
					onChange={e => setTodo(e.target.value)}
				/>
				<Button
					type='submit'
					disabled={!todo}
					data-cy='todo-submit'
					variant='contained'
					className='bg-blue-500 hover:bg-blue-400 mt-3 mb-2'
				>
					<Typography data-cy='new-todo'>New Todo</Typography>
				</Button>
			</Box>

			<Box>
				{data &&
					filterTodos(data)?.map(todo => (
						<Box key={todo.id} className='flex items-center'>
							<Checkbox
								data-cy='todo-checkbox'
								checked={todo.completed}
								onClick={() => toggleComplete(todo.id)}
							/>
							<Typography
								data-cy='todo-title'
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
