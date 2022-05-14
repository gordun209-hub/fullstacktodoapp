import { Box } from '@mui/system'

import { useToggleComplete } from '@/hooks/index'

import Deadline from './Deadline'
import EditMenu from './EditMenu'
import Priority from './Priority'
import Title from './Title'

const TodoBox: ({ todo }, { todo: Object }) => JSX.Element = ({ todo }) => {
	const { id, completed, title, priority, deadline } = todo

	const { mutate: completeTodo } = useToggleComplete()

	const toggleComplete: (id: string) => void = id => {
		completeTodo({ id })
	}

	return (
		<Box className='flex items-center border-[1px] border-zinc-200 rounded-md p-2'>
			<Box className='flex items-center' onClick={() => toggleComplete(id)}>
				<Title completed={completed} id={id} title={title} />
				<Box className='flex items-center space-x-2'>
					<Priority priority={priority} />
					<Deadline deadline={deadline} />
				</Box>
			</Box>
			<EditMenu id={id} />
		</Box>
	)
}

export default TodoBox
