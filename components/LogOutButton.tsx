import { useMutation, useQueryClient } from 'react-query'

import { logOutQuery } from '@/services/api'

const LogOutButton: () => JSX.Element = () => {
	const queryClient = useQueryClient()
	const { mutate } = useMutation('user', logOutQuery, {
		onSuccess: () => {
			queryClient.invalidateQueries('user')
		}
	})

	return (
		<button type='button' data-cy='logout-button' onClick={() => mutate()}>
			logout
		</button>
	)
}

export default LogOutButton
