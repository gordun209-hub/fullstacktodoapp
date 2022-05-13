/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable react/hook-use-state */
import '../styles/globals.css'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { TodoLayout } from '@/components/index'

import createEmotionCache from '../src/createEmotionCache'
import theme from '../src/theme'

const clientSideEmotionCache = createEmotionCache()

//@ts-ignore
export default function App(props) {
	const { Component = clientSideEmotionCache, pageProps } = props
	const [queryClient] = useState(() => new QueryClient())
	const getLayout =
		//@ts-ignore
		Component.getLayout || ((page: unknown) => <TodoLayout>{page}</TodoLayout>)

	return (
		<>
			<Head>
				<title>Mantine next example</title>
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width'
				/>
				<link rel='shortcut icon' href='/favicon.svg' />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<QueryClientProvider client={queryClient}>
					{getLayout(<Component {...pageProps} />)}
					<ReactQueryDevtools />
				</QueryClientProvider>
			</ThemeProvider>
		</>
	)
}
