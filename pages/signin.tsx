import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import Login from '@/components/Login'
import { getUserQuery } from '@/services/api'

const LoginPage: () => JSX.Element = () => {
	const router = useRouter()
	const { data: user, isLoading: isLoadingUser } = useQuery('user', () =>
		getUserQuery()
	)
	if (user?.id && !isLoadingUser) {
		router.push('/signup')
	}
	return (
		<div>
			<Login />
		</div>
	)
}
export default LoginPage
