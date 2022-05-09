import '../styles/globals.css'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import type { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const MyApp: FC<AppProps> = ({
	Component,
	pageProps: { session, ...pageProps }
}) => (
	<QueryClientProvider client={queryClient}>
		<SessionProvider session={session}>
			<Component {...pageProps} />
			<ReactQueryDevtools />
		</SessionProvider>
	</QueryClientProvider>
)

export default MyApp
