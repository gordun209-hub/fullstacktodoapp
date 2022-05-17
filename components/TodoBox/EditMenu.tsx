/* eslint-disable @typescript-eslint/ban-ts-comment */
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Menu, MenuItem, Typography } from '@mui/material'
import Link from 'next/link'
// @ts-nocheck
import React, { useState } from 'react'

import { useDeleteTodo } from '@/hooks/index'

const EditMenu: ({ id }: { id: string }) => JSX.Element = ({ id }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)

	const { mutate: deleteTodo } = useDeleteTodo()

	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
	const handleClose = () => {
		setAnchorEl(null)
	}

	const handleDelete: (id: string) => void = id => {
		deleteTodo({ id })
	}

	return (
		<Box>
			{/* @ts-ignore */}
			<MoreVertIcon
				className='ml-3 cursor-pointer'
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			/>

			<Menu
				id='basic-menu'
				open={open}
				anchorEl={anchorEl}
				MenuListProps={{
					'aria-labelledby': 'basic-button'
				}}
				onClose={handleClose}
			>
				{/* @ts-ignore */}

				<MenuItem onClose={handleClose} onClick={() => handleDelete(id)}>
					<DeleteOutlineIcon className='text-[1.15rem] text-zinc-600 cursor-pointer' />
					<Typography className='ml-1 text-sm text-zinc-600'>Delete</Typography>
				</MenuItem>

				{/* @ts-ignore */}

				<Link passHref href={`/user/todos/${id}`}>
					<MenuItem onClick={handleClose}>
						<EditIcon className='text-[1.15rem] text-zinc-600 cursor-pointer' />
						<Typography className='ml-1 text-sm text-zinc-600'>Edit</Typography>
					</MenuItem>
				</Link>
			</Menu>
		</Box>
	)
}

export default EditMenu
