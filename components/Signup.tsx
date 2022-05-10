import { Box, Button, Flex, Input } from '@chakra-ui/react'
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
		<Box bg='black' height='100vh' width='100vw' color='white'>
			<Flex
				borderBottom='white 1px solid'
				height='100px'
				justify='center'
				align='center'
			></Flex>
			<Flex height='calc(100vh - 100px)' justify='center' align='center'>
				<Box padding='50px' bg='gray.900' borderRadius='6px'>
					<form onSubmit={handleSubmit}>
						<Input
							placeholder='email'
							type='email'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setEmail(e.target.value)
							}
						/>
						<Input
							placeholder='password'
							type='password'
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setPassword(e.target.value)
							}
						/>
						<Button
							type='submit'
							sx={{
								'&:hover': {
									bg: 'green.300'
								}
							}}
							bg='green.500'
							isLoading={isLoading}
						>
							Sign up
						</Button>
					</form>
				</Box>
			</Flex>
		</Box>
	)
}

export default Signup
