import { Box } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useRouter } from 'next/router'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { SigninForm } from '@/components/index'
import MainContent from '@/components/MainContent'
import MainHero from '@/components/MainHero'
import { loginQuery } from '@/services/api'
import type { FormValues } from '@/types/form'

const theme = createTheme()

const SignInSide: () => JSX.Element = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<FormValues>()

	const onSubmit: SubmitHandler<FormValues> = ({ email, password }) => {
		mutate(
			{ email, password },
			{
				onError: err => {
					console.log(err)
				},
				onSuccess: () => {
					router.push('/')
				}
			}
		)
	}
	const queryClient = useQueryClient()
	const { mutate } = useMutation(loginQuery, {
		onSuccess: () => queryClient.invalidateQueries('user')
	})

	const router = useRouter()
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
					<ThemeProvider theme={theme}>
						<SigninForm />
					</ThemeProvider>
				</MainContent>
			</Box>
		</div>
	)
}
export default SignInSide
