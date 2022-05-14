/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {
	const deleteUsers = prisma.user.deleteMany()
	const deleteTodos = prisma.todo.deleteMany()
	return await prisma.$transaction([deleteUsers, deleteTodos])
}
main()
	.catch(() => {
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})

export default main
