/* eslint-disable no-console */
import type { Todo, User } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import { genSaltSync, hashSync } from 'bcrypt'

const prisma = new PrismaClient()
const salt = genSaltSync()

const seed: () => Promise<[User, User, Todo, Todo]> = async () => {
	const deleteUsers = prisma.user.deleteMany()
	const deleteTodos = prisma.todo.deleteMany()
	await prisma.$transaction([deleteUsers, deleteTodos])
	const first = await prisma.user.upsert({
		where: {
			email: 'first@example.com'
		},
		update: {},
		create: {
			email: 'first@example.com',
			password: hashSync('passwordpassword', salt),
			name: 'first'
		}
	})
	const second = await prisma.user.upsert({
		where: {
			email: 'second@example.com'
		},
		update: {},
		create: {
			email: 'second@example.com',
			password: hashSync('passwordpassword', salt),
			name: 'second'
		}
	})
	const todo1 = await prisma.todo.create({
		data: {
			completed: false,
			priority: 2,
			title: 'todo1',
			deadline: new Date(),
			user: {
				connect: {
					id: first.id
				}
			}
		}
	})
	const todo2 = await prisma.todo.create({
		data: {
			completed: true,
			priority: 1,
			title: 'todo2',
			deadline: new Date(),
			user: {
				connect: {
					id: second.id
				}
			}
		}
	})
	return Promise.all([first, second, todo1, todo2])
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
export default seed
