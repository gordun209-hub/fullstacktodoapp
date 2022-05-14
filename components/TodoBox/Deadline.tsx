import { Typography, Box } from '@mui/material'
import { parseISO } from 'date-fns'

import calculateTime from '@/utils/calculateTime'

const Deadline: () => JSX.Element = ({ deadline }) => {
	return (
		<Box>
			<Typography className='text-zinc-500 text-[0.85rem] font-light'>
				{deadline && calculateTime(parseISO(deadline))}
			</Typography>
		</Box>
	)
}

export default Deadline
