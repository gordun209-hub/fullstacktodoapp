import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import Login from '@/components/Login'
import MainContent from '@/components/MainContent'
import MainHero from '@/components/MainHero'
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
			<Box
				sx={{
					display: 'flex',
					height: '100vh'
				}}
			>
				<MainHero path='/auth.jpg' />
				<MainContent>
					<Login />
				</MainContent>
			</Box>
		</div>
	)
}
export default LoginPage
