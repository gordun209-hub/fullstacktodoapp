import { Box, Grid } from '@mui/material'
import Image from 'next/image'
import type { FC } from 'react'

import LoginForm from './LoginForm'

const Login: FC = () => {
	return (
		<Box>
			<>
				<Grid container alignItems='stretch' justifyContent={'center'}>
					<Grid item bgcolor={'brown'} xs={6}>
						<Box bgcolor={'brown'} />
					</Grid>
					<Grid item xs={6}>
						<LoginForm />
					</Grid>
				</Grid>
			</>
		</Box>
	)
}

export default Login
