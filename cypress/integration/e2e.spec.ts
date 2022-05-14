/* eslint-disable cypress/require-data-selectors */
afterEach(() => {
	cy.clearCookies()
})
describe('e2e', () => {
	describe('user can navigate between pages', () => {
		it('should naviagte to home page', () => {
			cy.visit('/')
			cy.get('[data-cy="get-started-link"]').as('getStartedButton')

			cy.get('@getStartedButton').click()
			cy.url().should('include', '/signup')
			cy.get('[data-cy="signin-text"]').should('contain', 'Sign in').click()
			cy.url().should('include', '/signin')
			cy.get('[data-cy="form-submit"]').click()

			cy.get('.mt-1 > :nth-child(2)').should('contain', 'required')
			cy.get('.mt-1 > :nth-child(4)').should('contain', 'required')
		})
	})
	it('should create a new user', () => {
		cy.visit('/signup')
		cy.task('reset')
		cy.get('#email').type('gordun209@hotmail.com')
		cy.get('#password').type('passwordpassword')
		cy.get('[data-cy="form-submit"]').click()
		cy.url().should('include', '/user')
	})
	it('should log in a user', () => {
		cy.visit('/signin')
		cy.task('seed')
		cy.get('#email').type('first@example.com')
		cy.get('#password').type('passwordpassword')
		cy.get('[data-cy="form-submit"]').click()
		cy.url().should('include', '/user')
	})
	it('should give error when email is on use', () => {
		cy.visit('/signup')
		cy.task('seed')
		cy.get('#email').type('first@example.com')
		cy.get('#password').type('passwordpassword')
		cy.get('[data-cy="form-submit"]').click()
	})
})
