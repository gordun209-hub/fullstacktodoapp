import type { Todo } from '@prisma/client'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

const createTodoQuery: ({
	priority,
	title,
	completed
}: {
	priority: number
	title: string
	completed: boolean
}) => Promise<Todo> = async ({ priority, title, completed }) => {
	const res = await axios.post(`${baseUrl}/api/user/todo/makeTodo`, {
		priority,
		title,
		completed
	})

	return res.data
}
const getTodoQuery: () => Promise<Todo[]> = async () => {
	const res = await axios.get(`${baseUrl}/api/todos`)
	return res.data
}

const completeTodoQuery: ({ id }: { id: string }) => Promise<Todo> = async ({
	id
}) => {
	const res = await axios.post(`${baseUrl}/api/user/todo/completeTodo/${id}`, {
		id
	})
	return res.data
}

export { completeTodoQuery, createTodoQuery, getTodoQuery }
