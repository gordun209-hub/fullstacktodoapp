/* eslint-disable cypress/require-data-selectors */
afterEach(() => {
	cy.clearCookies()
})
beforeEach(() => {
	cy.task('reset')
})
describe('e2e test for creating and editing todos', () => {
	it('should sign up', () => {
		cy.Signup('test@email.com', 'passwordpassword')
		cy.url().should('include', '/user')
		cy.get('[data-cy="main"] > :nth-child(2)').should(
			'contain',
			'test@email.com'
		)
		cy.get('[data-cy="-inbox-link"]').click()
		cy.createTodo('test todo')
		cy.get('[data-cy="new-todo"]').should('have.length', 1)
		cy.createTodo('test todo2')
		cy.createTodo('test todo3')
		cy.get('[data-cy="main"]').should('include.text', 'test todo3')
		cy.get(
			':nth-child(1) > :nth-child(1) > :nth-child(1) > [data-cy="todo-checkbox"] > .PrivateSwitchBase-input'
		).click()
		cy.get('[data-cy="-completed-link"]').click()
		cy.get('[data-cy="todo-title"]').should('be.visible')
	})
})
