/* eslint-disable @typescript-eslint/ban-ts-comment */
import { format, parseISO } from 'date-fns'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import Deadline from '@/components/TodoBox/Deadline'
import DatePicker from '@/components/UserPage/DatePicker'
import useEditTodo from '@/hooks/useEditTodo'
import useGetTodo from '@/hooks/useGetTodo'

const Todo: NextPage = () => {
	const { mutate } = useEditTodo()
	const router = useRouter()
	const { id } = router.query as { id: string }
	const { data, error, isLoading } = useGetTodo(id)
	const [title, setTitle] = useState('')
	const [priority, setPriority] = useState(1)
	const [deadline, setDeadline] = useState<Date>(new Date())
	const [isEditing, setIsEditing] = useState(false)
	if (error) {
		return <div>Error</div>
	}
	if (isLoading) {
		return <div>Loading</div>
	}
	return (
		<div>
			<div className='flex justify-center'>
				<div className='block rounded-lg shadow-lg bg-white max-w-sm text-center'>
					{!isEditing ? (
						<>
							<div className='py-3 px-6 border-b border-gray-300'>Featured</div>
							<div className='p-6'>
								<h5 className='text-gray-900 text-xl font-medium mb-2'>
									{/*// @ts-ignore */}
									created at : {format(parseISO(data?.createdAt), 'yyyy-MM-dd')}
								</h5>
								<p className='text-gray-700 text-base mb-4'>{data?.title}</p>
								<button
									type='button'
									className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
									onClick={() => {
										setIsEditing(true)
									}}
								>
									Edit
								</button>
							</div>
							<div className='py-3 px-6 border-t border-gray-300 text-gray-600'>
								{/*// @ts-ignore */}
								<Deadline deadline={data.deadline} />
							</div>
						</>
					) : (
						<>
							<div className='py-3 px-6 border-b border-gray-300'>Featured</div>
							<div className='p-6'>
								<h5 className='text-gray-900 text-xl font-medium mb-2'>
									{/*// @ts-ignore */}
									created at : {format(parseISO(data?.createdAt), 'yyyy-MM-dd')}
								</h5>
								<div className='p-5'>
									<label> title: </label>
									<input
										defaultValue={data?.title}
										value={title}
										onChange={e => setTitle(e.target.value)}
									/>
								</div>
								<div>
									<label>Priority</label>
									<input
										type='number'
										defaultValue={data?.priority}
										value={priority}
										onChange={e => setPriority(Number(e.target.value))}
									/>
								</div>
								<button
									type='button'
									className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
									onClick={() => {
										setIsEditing(false)
										// @ts-ignore
										mutate({ ...data, title, deadline, priority })
									}}
								>
									{isEditing ? 'Save' : 'Cancel'}
								</button>
							</div>
							<div className='py-3 px-6 border-t border-gray-300 text-gray-600'>
								{/*// @ts-ignore */}
								<DatePicker value={deadline} setValue={setDeadline} />
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Todo
