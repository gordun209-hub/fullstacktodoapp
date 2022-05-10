import { useRouter } from 'next/router'
import type { ChangeEvent, FC, SyntheticEvent } from 'react'
import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'

import { signupQuery } from '@/services/api'

const Signup: FC = () => {
	const queryClient = useQueryClient()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const mutation = useMutation(() => signupQuery({ email, password }), {
		onSuccess: () => {
			queryClient.invalidateQueries('user')
		}
	})
	const router = useRouter()
	const handleSubmit: (e: SyntheticEvent) => Promise<void> = async e => {
		e.preventDefault()
		setIsLoading(true)
		mutation.mutate()
		setIsLoading(false)
		router.push('/')
	}
	return (
		<div>
			<div />
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
						<button type='submit'>Sign up</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Signup
