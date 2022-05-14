/* eslint-disable @typescript-eslint/ban-ts-comment */
import { format, parseISO } from 'date-fns'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

import useGetTodo from '@/hooks/useGetTodo'
import calculateTime from '@/utils/calculateTime'

const Todo: NextPage = () => {
	const router = useRouter()
	const { id } = router.query as { id: string }
	const { data, error, isLoading } = useGetTodo(id)
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
						>
							Edit
						</button>
					</div>
					<div className='py-3 px-6 border-t border-gray-300 text-gray-600'>
						{/*// @ts-ignore */}

						{data.deadline && calculateTime(parseISO(data?.deadline))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Todo
