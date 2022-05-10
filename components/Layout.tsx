import NextLink from 'next/link'
import { useQuery } from 'react-query'

import { getUserQuery } from '@/services/api'

import LogOutButton from './LogOutButton'

const Layout: () => JSX.Element = () => {
	const { data: user, isLoading: isLoadingUser } = useQuery('user', () =>
		getUserQuery()
	)
	if (isLoadingUser) {
		return <div></div>
	}
	return (
		<div>
			<ul>
				<li>
					<NextLink href='/'>
						<a>Home</a>
					</NextLink>
				</li>
			</ul>
			{user?.id && !isLoadingUser ? (
				<div>
					<LogOutButton />
				</div>
			) : (
				<div>
					<div>Hello, guest</div>
					<div>
						<NextLink passHref href='/signin'>
							<a>signin</a>
						</NextLink>
						<NextLink passHref href='/signup'>
							<a>signup</a>
						</NextLink>
					</div>
				</div>
			)}
		</div>
	)
}
export default Layout
