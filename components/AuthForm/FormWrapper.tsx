import CheckIcon from '@mui/icons-material/Check'
import { Box, Link, Typography } from '@mui/material'
import Logo from '../Logo'

const FormWrapper: ({
	children,
	type
}: {
	children: React.ReactNode
	type: 'signin' | 'signup'
}) => JSX.Element = ({ children, type }) => {
	return (
		<Box className='w-full px-5 lg:px-20 flex flex-col items-center'>
			<Logo size='lg' />
			{children}
			<Box className='w-full text-right mt-5'>
				<Link
					className='no-underline text-blue-500'
					href={type === 'signin' ? 'signup' : 'signin'}
					variant='body2'
				>
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
