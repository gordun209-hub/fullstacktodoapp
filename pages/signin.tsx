import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useRouter } from 'next/router'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'

import { SigninForm } from '@/components/index'
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
		<ThemeProvider theme={theme}>
			<Grid container component='main' sx={{ height: '100vh' }}>
				<Grid
					item
					xs={false}
					sm={4}
					md={7}
					sx={{
						backgroundImage: 'url(https://source.unsplash.com/random)',
						backgroundRepeat: 'no-repeat',
						backgroundColor: t =>
							t.palette.mode === 'light'
								? t.palette.grey[50]
								: t.palette.grey[900],
						backgroundSize: 'cover',
						backgroundPosition: 'center'
					}}
				/>
				<Grid item square xs={12} sm={8} md={5} component={Paper} elevation={6}>
					{
						<SigninForm
							handleSubmit={handleSubmit}
							register={register}
							errors={errors}
							onSubmit={onSubmit}
						/>
					}
				</Grid>
			</Grid>
		</ThemeProvider>
	)
}
export default SignInSide
