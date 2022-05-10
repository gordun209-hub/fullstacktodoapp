import Link from 'next/link'
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
		<nav>
			<ul>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
			</ul>
			{user?.id && !isLoadingUser ? (
				<div>
					<h1>Hello, {user.name}</h1>
					<LogOutButton />
				</div>
			) : (
				<div>
					<h1>Hello, guest</h1>
					<Link href='/signin'>
						<a>signin</a>
					</Link>
					<Link href='/signup'>
						<a>signup</a>
					</Link>
				</div>
			)}
		</nav>
	)
}
export default Layout
