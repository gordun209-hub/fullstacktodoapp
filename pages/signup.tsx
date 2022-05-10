import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

import Signup from '@/components/Signup'
import { getUserQuery } from '@/services/api'

const SignupPage: () => JSX.Element = () => {
	const router = useRouter()
	const { data: user, isLoading: isLoadingUser } = useQuery('user', () =>
		getUserQuery()
	)

	return (
		<div>
			<Signup />
		</div>
	)
}
export default SignupPage
