import Button from '@mui/material/Button'

import useLogout from '@/hooks/useLogout'

const LogOutButton: () => JSX.Element = () => {
	const { mutate } = useLogout()

	return (
		<Button
			className='absolute bottom-0 right-0 left-0 rounded-none border-zinc-300'
			variant='outlined'
			data-cy='logout-button'
			onClick={() => mutate()}
		>
			Logout
		</Button>
	)
}

export default LogOutButton
