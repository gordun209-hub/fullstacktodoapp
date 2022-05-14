/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import * as React from 'react'

export default function ResponsiveDatePickers({
	value,
	setValue
}: {
	value: Date | null
	setValue: (value: Date | null) => void
}) {
	return (
		<LocalizationProvider className='flex-1' dateAdapter={AdapterDateFns}>
			<Stack spacing={3}>
				<DatePicker
					disablePast
					label='DateTime'
					openTo='year'
					views={['year', 'month', 'day']}
					value={value}
					renderInput={params => <TextField {...params} />}
					onChange={newValue => {
						setValue(newValue)
					}}
				/>
			</Stack>
		</LocalizationProvider>
	)
}
