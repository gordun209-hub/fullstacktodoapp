import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelecPriority: ({
	priority,
	setPriority
}: {
	priority: number
	setPriority: (priority: number) => void
}) => JSX.Element = ({ priority, setPriority }) => {
	return (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>priority</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={priority}
				label='priority'
				onChange={e => setPriority(Number(e.target.value))}
			>
				<MenuItem value={1}>low</MenuItem>
				<MenuItem value={2}>medium</MenuItem>
				<MenuItem value={3}>high</MenuItem>
			</Select>
		</FormControl>
	)
}
export default SelecPriority
