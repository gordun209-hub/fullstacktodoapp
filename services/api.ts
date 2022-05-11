import type { Todo, User } from '@prisma/client'

const baseUrl = 'http://localhost:3000'
const GetTodosQuery: () => Promise<Todo> = async () => {
	const res = await fetch(`${baseUrl}/api/todos`)
	const data = await res.json()
	return data
}

const GetUsersQuery: () => Promise<User[]> = async () => {
	const res = await fetch(`${baseUrl}/api/users`)
	const data = await res.json()
	return data
}

const getUserQuery: () => Promise<User> = async () => {
	const res = await fetch(`${baseUrl}/api/me`)
	const data = await res.json()
	return data
}
const signupQuery: ({
	email,
	password
}: {
	email: string
	password: string
}) => Promise<User> = async ({ email, password }) => {
	const res = await fetch(`${baseUrl}/api/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	})
	const data = await res.json()
	return data
}
const loginQuery: ({
	email,
	password
}: {
	email: string | null
	password: string | null
}) => Promise<User> = async ({ email, password }) => {
	const res = await fetch(`${baseUrl}/api/signin`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email,
			password
		})
	})
	const data = await res.json()
	return data
}
const logOutQuery: () => Promise<void> = async () => {
	const res = await fetch(`${baseUrl}/api/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const data = await res.json()
	return data
}

export {
	GetTodosQuery,
	getUserQuery,
	GetUsersQuery,
	loginQuery,
	logOutQuery,
	signupQuery
}
