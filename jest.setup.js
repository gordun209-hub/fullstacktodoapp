// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
import AbortController from 'abort-controller'
import { fetch, Headers, Request, Response } from 'cross-fetch'
let n = 0
jest.mock('nanoid', () => ({
	nanoid: () => `${n++}`
}))
import { setLogger } from 'react-query'

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response
global.AbortController = AbortController
// Establish API mocking before all tests.

import { setupServer } from 'msw/node'

import { handlers } from './__mocks__/handlers'

// This configures a request mocking server with the given request handlers.

export const server = setupServer(...handlers)
beforeAll(() => server.listen())

// // Reset any request handlers that we may add during the tests,

// // so they don't affect other tests.

afterEach(() => server.resetHandlers())

// // Clean up after the tests are finished.

afterAll(() => server.close())
setLogger({
	log: console.log,
	warn: console.warn,
	error: () => {}
})
