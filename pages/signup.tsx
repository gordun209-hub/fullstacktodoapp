import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import MainContent from '@/components/MainContent'
import MainHero from '@/components/MainHero'
import Signup from '@/components/Signup'
import { getUserQuery } from '@/services/api'

const SignupPage: () => JSX.Element = () => {
	const router = useRouter()
	const { data: user, isLoading: isLoadingUser } = useQuery('user', () =>
		getUserQuery()
	)

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
					<Signup />
				</MainContent>
			</Box>
		</div>
	)
}
export default SignupPage
