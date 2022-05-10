import { Box } from '@mui/material'
import type { FC } from 'react'

import LoginForm from './LoginForm'

const Login: FC = () => {
	return (
		<Box>
			<>
				<Box>
					<LoginForm />
				</Box>
			</>
		</Box>
	)
}

export default Login
