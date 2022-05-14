/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Button, Checkbox, Input, Typography } from '@mui/material'
import type { Todo } from '@prisma/client'
import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { SyntheticEvent } from 'react'
import React from 'react'
import { useQuery } from 'react-query'

import { SelectPriority } from '@/components/index'
import ResponsiveDatePickers from '@/components/UserPage/DatePicker'
import { useCreateTodo, useDeleteTodo, useToggleComplete } from '@/hooks/index'
import { getTodoQuery } from '@/services/todos'

const Todos: NextPage = () => {
	const [todo, setTodo] = React.useState('')
	const { mutate: createTodo } = useCreateTodo()
	const router = useRouter()
	const filterType = router.query.type as string
	const { mutate: completeTodo } = useToggleComplete()
	const { data } = useQuery('todo', getTodoQuery)
	const { mutate: deleteTodo } = useDeleteTodo()
	const handleDelete: (id: string) => void = id => {
		deleteTodo({ id })
	}
	const toggleComplete: (id: string) => void = id => {
		completeTodo({ id })
	}
	const [value, setValue] = React.useState<Date | null>(new Date())
	const handleSubmit: (e: SyntheticEvent<HTMLFormElement>) => void = e => {
		e.preventDefault()
		createTodo({
			priority: priority,
			completed: false,
			title: todo,
			deadline: value ? value : undefined
		})
		setTodo('')
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
	const [priority, setPriority] = React.useState<number>(1)
	const calculateTime: (date: Date) => string = date => {
		return formatDistanceToNowStrict(date, { addSuffix: true })
	}
	return (
		<Box>
			<Box
				className='flex items-center gap-3'
				component='form'
				data-cy='todo-form'
				onSubmit={handleSubmit}
			>
				<SelectPriority priority={priority} setPriority={setPriority} />
				<Input
					type='text'
					data-cy='-todo-input'
					placeholder='Todo'
					value={todo}
					onChange={e => setTodo(e.target.value)}
				/>
				<ResponsiveDatePickers value={value} setValue={setValue} />
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
							{''}
							<Typography>
								priority:
								{todo.priority === 1 && 'Low '}{' '}
								{todo.priority === 2 && 'Medium '}{' '}
								{todo.priority === 3 && 'High '}
							</Typography>
							{/* @ts-ignore */}{' '}
							{todo?.deadline && calculateTime(parseISO(todo?.deadline))}
							<Button
								data-cy='todo-checkbox'
								onClick={() => handleDelete(todo.id)}
							>
								Delete
							</Button>
						</Box>
					))}
			</Box>
		</Box>
	)
}

export default Todos
