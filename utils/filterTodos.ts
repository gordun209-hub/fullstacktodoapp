import type { Todo } from '@prisma/client'
import { isWithinInterval, parseISO } from 'date-fns'

const filterTodos: (todos: Todo[], filterType: string) => Todo[] = (
	todos,
	filterType
) => {
	todos = todos.filter(todo => {
		if (filterType === 'completed') {
			return todo.completed
		} else if (filterType === 'upcoming') {
			return (
				!todo.completed &&
				todo.deadline &&
				isWithinInterval(parseISO(todo?.deadline), {
					start: new Date(Date.now()),
					end: new Date(Date.now() + 8640000000)
				})
			)
		} else if (filterType === 'today') {
			return (
				!todo.completed &&
				todo.deadline &&
				isWithinInterval(parseISO(todo?.deadline), {
					start: new Date(Date.now()),
					end: new Date(Date.now() + 86400000)
				})
			)
		}
		return true
	})
	return todos
}
export default filterTodos
