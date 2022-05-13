/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/display-name */
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

const createTestQueryClient: () => QueryClient = () =>
	new QueryClient({
		defaultOptions: {
			queries: {
				retry: false
			}
		}
	})

export function renderWithClient(ui: React.ReactElement) {
	const testQueryClient = createTestQueryClient()
	const { rerender, ...result } = render(
		<QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
	)
	return {
		...result,
		rerender: (rerenderUi: React.ReactElement) =>
			rerender(
				<QueryClientProvider client={testQueryClient}>
					{rerenderUi}
				</QueryClientProvider>
			)
	}
}
export const createWrapper: () => ({
	children
}: {
	children: React.ReactNode
}) => JSX.Element = () => {
	const testQueryClient = createTestQueryClient()
	return ({ children }: { children: React.ReactNode }) => (
		<QueryClientProvider client={testQueryClient}>
			{children}
		</QueryClientProvider>
	)
}
