/* eslint-disable import/export */
/* eslint-disable react/hook-use-state */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import type { FC, ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { TodoLayout } from '@/components/index'

import type createEmotionCache from '../src/createEmotionCache'
import theme from '../src/theme'

// const getLayout =
// 	//@ts-ignore
// 	Component.getLayout || ((page: unknown) => <TodoLayout>{page}</TodoLayout>)
const AllProviders: FC<
	{ children: ReactElement } & {
		emotionCache?: ReturnType<typeof createEmotionCache>
	}
> = ({ children }) => {
	const queryClient = new QueryClient()
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<QueryClientProvider client={queryClient}>
					<TodoLayout>{children}</TodoLayout>
					<ReactQueryDevtools />
				</QueryClientProvider>
			</ThemeProvider>
		</>
	)
}

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
