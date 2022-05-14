import { Box } from '@mui/material'
import type { ReactNode } from 'react'

import {
	MainContent,
	MainHero,
	MainLayout,
	SigninForm
} from '@/components/index'

const SignIn: {
	(): JSX.Element
	getLayout(page: ReactNode): JSX.Element
} = () => {
	return (
		<div>
			<Box className='h-screen flex'>
				<MainHero />
				<MainContent>
					<SigninForm />
				</MainContent>
			</Box>
		</div>
	)
}
export default SignIn

SignIn.getLayout = (page: ReactNode) => <MainLayout>{page}</MainLayout>
