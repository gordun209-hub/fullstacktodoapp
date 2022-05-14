import type { Todo, User } from '@prisma/client'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'
const GetTodosQuery: () => Promise<Todo> = async () => {
	const response = await axios.get(`${baseUrl}/todos`)
	return response.data
}

const GetUsersQuery: () => Promise<User[]> = async () => {
	const res = await axios.get(`${baseUrl}/api/users`)
	return res.data
}

const getUserQuery: () => Promise<User> = async () => {
	const res = await axios.get(`${baseUrl}/api/me`)
	return res.data
}

const signupQuery: ({
	email,
	password
}: {
	email: string
	password: string
}) => Promise<User> = async ({ email, password }) => {
	const res = await axios.post<User>(`${baseUrl}/api/signup`, {
		email,
		password
	})
	return res.data
}
const loginQuery: ({
	email,
	password
}: {
	email: string | null
	password: string | null
}) => Promise<User> = async ({ email, password }) => {
	const res = await axios.post<User>(`${baseUrl}/api/signin`, {
		email,
		password
	})
	return res.data
}
const logOutQuery: () => Promise<void> = async () => {
	const res = await axios.post<void>(`${baseUrl}/api/logout`)
	return res.data
}

export {
	GetTodosQuery,
	getUserQuery,
	GetUsersQuery,
	loginQuery,
	logOutQuery,
	signupQuery
}
