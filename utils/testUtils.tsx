/* eslint-disable import/export */
/* eslint-disable react/hook-use-state */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import 'mutationobserver-shim'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import type { FC, ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import theme from '../src/theme'

const AllProviders: FC<{ children: ReactElement }> = ({ children }) => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: 0
			}
		}
	})

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</ThemeProvider>
	)
}

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
