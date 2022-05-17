import { Box, Button, TextField } from '@mui/material'

import useChangePassword from '../../hooks/useChangePassword'
import useUser from '../../hooks/useUser'

const UserPage: () => JSX.Element = () => {
	const { user } = useUser()
	const { mutate, data, error } = useChangePassword()

	const handleSubmit = e => {
		e.preventDefault()
		const { oldPassword, newPassword } = e.currentTarget.elements
		mutate({ oldPassword: oldPassword.value, newPassword: newPassword.value })
	}

	return (
		<Box className='w-full space-y-10 flex flex-col items-center justify-center'>
			<Box>{user?.email}</Box>
			<Box className='h-full w-full flex items-center justify-center'>
				<Box
					component='form'
					className='w-[50%] flex flex-col gap-3'
					onSubmit={handleSubmit}
				>
					<TextField
						id='outlined-basic'
						label='Old password'
						variant='outlined'
						placeholder='Old password'
						name='oldPassword'
						type='password'
					/>
					<TextField
						id='outlined-basic'
						label='New password'
						variant='outlined'
						placeholder='New password'
						name='newPassword'
						type='password'
					/>
					<Box className='text-green-500'>{data && data.message}</Box>
					<Box className='text-red-500'>
						{(error as Error)?.response?.data.message}
					</Box>
					<Button
						type='submit'
						className='bg-blue-500 hover:bg-blue-400'
						variant='contained'
					>
						Change password
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default UserPage
