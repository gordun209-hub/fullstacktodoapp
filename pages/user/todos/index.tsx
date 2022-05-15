import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import TodoBox from '@/components/TodoBox'
import TodoForm from '@/components/TodoForm.tsx'
import { getTodosQuery } from '@/services/todos'
import filterTodos from '@/utils/filterTodos'

const Todos: NextPage = () => {
	const router = useRouter()
	const filterType = router.query.type as string
	const { data } = useQuery('todo', getTodosQuery)

	return (
		<Box>
			<TodoForm />
			<Box className='mt-5 space-y-3'>
				{data &&
					filterTodos(data, filterType)?.map(todo => (
						<TodoBox key={todo.id} todo={todo} />
					))}
			</Box>
		</Box>
	)
}
export default Todos
