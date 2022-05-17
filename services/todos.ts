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
	const res = await axios.post(`${baseUrl}/api/todo/create`, {
		priority,
		title,
		completed,
		deadline
	})

	return res.data
}
const getTodosQuery: () => Promise<Todo[]> = async () => {
	const res = await axios.get(`${baseUrl}/api/todo/get`)
	return res.data
}

const completeTodoQuery: ({ id }: { id: string }) => Promise<Todo> = async ({
	id
}) => {
	const res = await axios.post(`${baseUrl}/api/todo/complete/${id}`, {
		id
	})
	return res.data
}

const deleteTodoQuery: ({ id }: { id: string }) => Promise<Todo> = async ({
	id
}) => {
	const res = await axios.post(`${baseUrl}/api/todo/delete/${id}`)
	return res.data
}
const getTodoQuery: ({ id }: { id: string }) => Promise<Todo> = async ({
	id
}) => {
	const res = await axios.get(`${baseUrl}/api/todo/get/${id}`)
	return res.data
}

const editTodoQuery: ({
	id,
	title,
	completed,
	deadline,
	priority
}: {
	id: string
	title: string
	priority: number
	completed: boolean
	deadline: Date
}) => Promise<Todo> = async ({ id, title, completed, deadline, priority }) => {
	const res = await axios.post(`${baseUrl}/api/todo/edit/${id}`, {
		id,
		title,
		completed,
		deadline,
		priority
	})
	return res.data
}

export {
	completeTodoQuery,
	createTodoQuery,
	deleteTodoQuery,
	editTodoQuery,
	getTodoQuery,
	getTodosQuery
}
