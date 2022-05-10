import { useRouter } from 'next/router'
import type { ChangeEvent, FC, SyntheticEvent } from 'react'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'

import { loginQuery } from '@/services/api'

const Login: FC = () => {
	const queryClient = useQueryClient()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const mutation = useMutation('user', () => loginQuery({ email, password }), {
		onSuccess: () => {
			queryClient.invalidateQueries('user')
		}
	})
	const router = useRouter()
	const handleSubmit: (e: SyntheticEvent) => Promise<void> = async e => {
		e.preventDefault()
		mutation.mutate()
		router.push('/')
	}
	return (
		<div>
			<div></div>
			<div>
				<div>
					<form onSubmit={handleSubmit}>
						<input
							placeholder='email'
							type='email'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setEmail(e.target.value)
							}
						/>
						<input
							placeholder='password'
							type='password'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setPassword(e.target.value)
							}
						/>
						<button type='submit'>Login</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
