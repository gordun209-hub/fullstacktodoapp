/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Box, Button, TextField } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import { format, parseISO } from 'date-fns'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { SelectPriority } from '@/components/index'
import DatePicker from '@/components/UserPage/DatePicker'
import useEditTodo from '@/hooks/useEditTodo'
import useGetTodo from '@/hooks/useGetTodo'

const Todo: NextPage = () => {
	const router = useRouter()
	const { mutate } = useEditTodo()
	const { id } = router.query as { id: string }
	const { data, error, isLoading } = useGetTodo(id)
	const [title, setTitle] = useState('')
	const [priority, setPriority] = useState(1)
	const [deadline, setDeadline] = useState<Date>(new Date())

	const handleClick = async type => {
		if (type === 'save') {
			mutate({ ...data, title, deadline, priority })
		}

		router.push({
			pathname: '/user/todos',
			query: {
				type: 'inbox'
			}
		})
	}

	useEffect(() => {
		setTitle(data?.title || '')
		setPriority(data?.priority ?? 1)
		setDeadline(data?.deadline)
	}, [data])

	return isLoading || error ? (
		<Box className='flex items-center justify-center'>
			<CircularProgress />
		</Box>
	) : (
		<Box className='h-full flex items-center justify-center'>
			<Box className='w-[60%] block rounded-lg border-[1px] bg-white max-w-sm text-center'>
				<Box className='py-3 px-6 border-b border-gray-300'>EDIT TODO</Box>
				<Box className='flex gap-3 flex-col p-6'>
					<Box className='text-zinc-600 text-md font-light mb-2'>
						{format(parseISO(data?.createdAt), 'yyyy-MM-dd')}
					</Box>
					<TextField
						id='outlined-basic'
						label='Title'
						variant='outlined'
						placeholder='Text'
						value={title}
						defaultValue={title}
						onChange={e => setTitle(e.target.value)}
					/>
					<SelectPriority priority={priority} setPriority={setPriority} />
					<Box className='flex gap-3'>
						<Button
							className='flex-1 bg-zinc-400 hover:bg-zinc-500'
							variant='contained'
							type='button'
							onClick={() => handleClick('cancel')}
						>
							Cancel
						</Button>

						<Button
							className='flex-1 bg-blue-500 hover:bg-blue-600'
							variant='contained'
							type='button'
							onClick={() => handleClick('save')}
						>
							Save
						</Button>
					</Box>
				</Box>
				<Box className='py-3 px-6 border-t border-gray-300 text-gray-600'>
					<DatePicker value={deadline} setValue={setDeadline} />
				</Box>
			</Box>
		</Box>
	)
}

export default Todo
