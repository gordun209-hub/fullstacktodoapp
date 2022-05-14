declare namespace Cypress {
	interface Chainable<Subject> {
		Signup(email: string, password: string): Chainable<Element>
		createTodo(todo: string): Chainable<Element>
	}
}
