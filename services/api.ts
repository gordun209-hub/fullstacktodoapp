import type { Todo, User } from '@prisma/client'

const GetTodosQuery: () => Promise<Todo> = async () => {
	const res = await fetch('http://localhost:3000/api/todos')
	const data = await res.json()
	return data
}

const GetUsersQuery: () => Promise<User> = async () => {
	const res = await fetch('http://localhost:3000/api/users')
	const data = await res.json()
	return data
}
export { GetTodosQuery, GetUsersQuery }
