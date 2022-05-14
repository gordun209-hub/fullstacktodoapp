import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import AvatarComponent from './Avatar'

const FormWrapper: ({
	children,
	type
}: {
	children: React.ReactNode
	type: 'signin' | 'signup'
}) => JSX.Element = ({ children, type }) => {
	return (
		<Box className='w-full px-5 lg:px-20 flex flex-col items-center'>
			<AvatarComponent />
			<Typography component='h1' variant='h5'>
				{type === 'signin' ? 'Sign in' : 'Sign up'}
			</Typography>

			{children}

			<Box className='w-full text-right mt-2'>
				<Link href={type === 'signin' ? 'signup' : 'signin'} variant='body2'>
					{type === 'signin' ? (
						<span data-cy='signup-text'>
							Don&lsquo;t have an account? Sign up
						</span>
					) : (
						<span data-cy='signin-text'>Already have an account? Sign in</span>
					)}
				</Link>
			</Box>
		</Box>
	)
}
export default FormWrapper
