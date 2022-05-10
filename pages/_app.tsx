import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import type { FC } from 'react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import Layout from '@/components/Layout'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac'
	}
}

const theme = extendTheme({ colors })

const MyApp: FC<AppProps> = ({ Component, pageProps: { ...pageProps } }) => {
	// eslint-disable-next-line react/hook-use-state
	const [queryClient] = React.useState(() => new QueryClient())

	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>
				<Layout />
				<Component {...pageProps} />
				<ReactQueryDevtools />
			</ChakraProvider>
		</QueryClientProvider>
	)
}

export default MyApp
