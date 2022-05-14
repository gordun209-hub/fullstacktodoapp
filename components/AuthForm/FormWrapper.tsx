import CheckIcon from '@mui/icons-material/Check'
import { Box, Link, Typography } from '@mui/material'

const FormWrapper: ({
	children,
	type
}: {
	children: React.ReactNode
	type: 'signin' | 'signup'
}) => JSX.Element = ({ children, type }) => {
	return (
		<Box className='w-full px-5 lg:px-20 flex flex-col items-center'>
			<Box className='flex items-center mb-5'>
				<CheckIcon className=' bg-blue-500 text-white text-6xl rounded-md p-1' />
				<Typography
					variant='p'
					className='text-3xl font-medium ml-3 text-blue-500'
				>
					Todo
				</Typography>
			</Box>
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
