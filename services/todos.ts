import type { Todo } from '@prisma/client'

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
	const res = await fetch(`${baseUrl}/api/user/todo/makeTodo`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			priority,
			title,
			completed
		})
	})
	const data = await res.json()

	return data
}
const getTodoQuery: () => Promise<Todo> = async () => {
	const res = await fetch(`${baseUrl}/api/user/todo/getTodo`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const data = await res.json()
	return data
}

const completeTodoQuery: ({ id }: { id: number }) => Promise<Todo> = async ({
	id
}) => {
	const res = await fetch(`${baseUrl}/api/user/todo/completeTodo/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const data = await res.json()
	return data
}

export { completeTodoQuery, createTodoQuery, getTodoQuery }
