import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import Login from '@/components/LoginPage/Login'
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
		<Box>
			<Login />
		</Box>
	)
}
export default LoginPage
