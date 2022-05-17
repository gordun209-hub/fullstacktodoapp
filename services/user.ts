import type { Todo, User } from '@prisma/client'
import axios from 'axios'

const baseUrl = 'http://localhost:3000'

const getUserQuery: () => Promise<User> = async () => {
	const res = await axios.get(`${baseUrl}/api/user/me`)
	return res.data
}

const signupQuery: ({
	email,
	password
}: {
	email: string
	password: string
}) => Promise<User> = async ({ email, password }) => {
	const res = await axios.post<User>(`${baseUrl}/api/user/signup`, {
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
	const res = await axios.post<User>(`${baseUrl}/api/user/signin`, {
		email,
		password
	})
	return res.data
}

const changePasswordQuery: ({
	oldPassword,
	newPassword
}: {
	oldPassword: string | null
	newPassword: string | null
}) => Promise<User> = async ({ oldPassword, newPassword }) => {
	const res = await axios.post<User>(`${baseUrl}/api/user/change-password`, {
		oldPassword,
		newPassword
	})
	return res.data
}

const logOutQuery: () => Promise<void> = async () => {
	const res = await axios.post<void>(`${baseUrl}/api/user/logout`)
	return res.data
}

export {
	getUserQuery,
	loginQuery,
	logOutQuery,
	signupQuery,
	changePasswordQuery
}
