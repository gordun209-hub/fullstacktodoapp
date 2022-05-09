// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
import AbortController from 'abort-controller'
import { fetch, Headers, Request, Response } from 'cross-fetch'
// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
global.fetch = fetch
global.Headers = Headers
global.Request = Request
global.Response = Response
global.AbortController = AbortController
