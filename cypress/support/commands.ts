/* eslint-disable cypress/require-data-selectors */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('Signup', (email, password) => {
	cy.visit('/signup')
	cy.get('#email').type(email)
	cy.get('#password').type(password)
	cy.get('[data-cy="form-submit"]').click()
})

Cypress.Commands.add('createTodo', todo => {
	cy.get('.MuiInput-input').type(todo)
	cy.get('[data-cy="new-todo"]').click()
})
