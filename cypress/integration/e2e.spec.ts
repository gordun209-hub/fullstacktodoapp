afterEach(() => {
	cy.clearCookies()
})
describe('e2e', () => {
	describe('user can navigate between pages', () => {
		it('should naviagte to home page', () => {
			cy.visit('/')
			cy.get('[data-cy="get-started-button"]').as('getStartedButton')

			cy.get('@getStartedButton').click()
			cy.url().should('include', '/signup')
			cy.get('[data-cy="signup-text"]').should('contain', 'Sign in').click()
			cy.url().should('include', '/signin')
			cy.get('[data-cy="signin-button"]').click()

			cy.get('[data-cy="email-error"]').should('contain', 'required')
			cy.get('[data-cy="password-error"]').should('contain', 'required')
		})
	})
	it('should create a new user', () => {
		cy.visit('/signup')
		cy.task('reset')
		cy.get('#email').type('gordun209@hotmail.com')
		cy.get('#password').type('passwordpassword')
		cy.get('[data-cy="signup-submit"]').click()
		cy.url().should('include', '/user')
	})
	it('should log in a user', () => {
		cy.visit('/signin')
		cy.task('seed')
		cy.get('#email').type('first@example.com')
		cy.get('#password').type('passwordpassword')
		cy.get('[data-cy="signin-button"]').click()
		cy.url().should('include', '/user')
	})
	it('should give error when email is on use', () => {
		cy.visit('/signup')
		cy.task('seed')
		cy.get('#email').type('first@example.com')
		cy.get('#password').type('passwordpassword')
		cy.get('[data-cy="signup-submit"]').click()
	})
})
