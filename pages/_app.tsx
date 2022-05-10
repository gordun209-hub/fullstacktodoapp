import '../styles/globals.css'

import type { AppProps } from 'next/app'
import type { FC } from 'react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Layout from '@/components/Layout'

// 2. Extend the theme to include custom colors, fonts, etc

const MyApp: FC<AppProps> = ({ Component, pageProps: { ...pageProps } }) => {
	// eslint-disable-next-line react/hook-use-state
	const [queryClient] = React.useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<Layout />
			<Component {...pageProps} />
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}

export default MyApp
