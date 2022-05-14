import { Typography, Box } from '@mui/material'
import convertPriority from '@/utils/convertPriority'

const Priority: () => JSX.Element = ({ priority }) => {
	return (
		<Box>
			<Typography className='text-sm ml-4 text-zinc-400'>
				{convertPriority(priority) === 'Low' && (
					<span className='block rounded-full bg-yellow-500 w-2 h-2'></span>
				)}
				{convertPriority(priority) === 'Medium' && (
					<span className='block rounded-full bg-orange-500 w-2 h-2'></span>
				)}
				{convertPriority(priority) === 'High' && (
					<span className='block rounded-full bg-red-500 w-2 h-2'></span>
				)}
			</Typography>
		</Box>
	)
}

export default Priority
