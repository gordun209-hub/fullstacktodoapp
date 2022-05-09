import '../styles/globals.css'

import type { AppProps } from 'next/app'
import type { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
	<QueryClientProvider client={queryClient}>
		<Component {...pageProps} />
		<ReactQueryDevtools />
	</QueryClientProvider>
)

export default MyApp
