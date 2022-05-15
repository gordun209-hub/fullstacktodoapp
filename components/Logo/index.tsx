import CheckIcon from '@mui/icons-material/Check'
import { Box, Typography } from '@mui/material'

const Logo: ({ size }: { size: string }) => JSX.Element = ({ size }) => {
	return (
		<Box className='flex items-center'>
			<CheckIcon
				className={` bg-blue-500 text-white  rounded-md p-1 
                ${size === 'sm' && 'text-2xl'} 
                ${size === 'md' && 'text-4xl'} 
                ${size === 'lg' && 'text-6xl'}
            `}
			/>
			<Typography
				// p invalid
				variant='body1'
				className='text-3xl font-medium ml-3 text-blue-500'
			>
				Todo
			</Typography>
		</Box>
	)
}

export default Logo
