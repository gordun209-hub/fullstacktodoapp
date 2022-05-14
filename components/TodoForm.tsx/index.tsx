import { Box, Button, Input, Typography } from '@mui/material'
import type { SyntheticEvent } from 'react'
import { useState } from 'react'

import { SelectPriority } from '@/components/index'
import ResponsiveDatePickers from '@/components/UserPage/DatePicker'
import { useCreateTodo } from '@/hooks/index'

const TodoForm: () => JSX.Element = () => {
	const [todo, setTodo] = useState('')
	const [value, setValue] = useState<Date | null>(new Date())
	const [priority, setPriority] = useState<number>(1)

	const { mutate: createTodo } = useCreateTodo()

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

	return (
		<Box
			className='flex items-center gap-3'
			component='form'
			data-cy='todo-form'
			onSubmit={handleSubmit}
		>
			<SelectPriority priority={priority} setPriority={setPriority} />
			<ResponsiveDatePickers value={value} setValue={setValue} />
			<Input
				className='flex-1 border-2 border-blue-500 rounded-[5px] py-[0.7rem] px-4'
				disableUnderline={true}
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
				className='flex-1 bg-blue-500 py-4 hover:bg-blue-400'
			>
				<Typography data-cy='new-todo'>New Todo</Typography>
			</Button>
		</Box>
	)
}

export default TodoForm
