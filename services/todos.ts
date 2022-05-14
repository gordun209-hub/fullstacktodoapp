import type { Todo } from '@prisma/client'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

const createTodoQuery: ({
	priority,
	title,
	completed,
	deadline
}: {
	priority: number
	title: string
	completed: boolean
	deadline?: Date
}) => Promise<Todo> = async ({ priority, title, completed, deadline }) => {
	const res = await axios.post(`${baseUrl}/api/user/todo/makeTodo`, {
		priority,
		title,
		completed,
		deadline
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

const deleteTodoQuery: ({ id }: { id: string }) => Promise<Todo> = async ({
	id
}) => {
	const res = await axios.post(`${baseUrl}/api/user/todo/deleteTodo/${id}`)
	return res.data
}

export { completeTodoQuery, createTodoQuery, deleteTodoQuery, getTodoQuery }
