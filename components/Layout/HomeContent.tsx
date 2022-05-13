/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import useUser from '../../hooks/useUser'

const HomeContent: () => JSX.Element = () => {
	const { user } = useUser()
	const route = user?.id ? '/user' : '/signup'
	return (
		<Box data-cy='homeContent'>
			<Typography variant='h2'>Todo App</Typography>
			<Box className='mt-3 p-2 ' data-cy='landingP'>
				<Typography className='text-lg font-light text-zinc-500'>
					This is a minimal todo app built with Next.js and Material-UI. Todo
					app has never been so easy to use. It's super simple to add a new
					task, mark it as completed, and delete it. If you have any questions
					or feedback, please feel free to contact us. And please don't forget
					to star us on GitHub. 🤩
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
					atque laboriosam quasi velit ab debitis suscipit, fugit adipisci
					obcaecati reprehenderit hic exercitationem doloremque, omnis voluptas
					ducimus quaerat mollitia sit, molestiae dolor et! Voluptas, nostrum
					ullam accusamus rem quis maxime maiores.
				</Typography>

				<Button
					data-cy='get-started-button'
					className='mt-3 bg-green-500'
					variant='contained'
					color='secondary'
				>
					<Link data-cy='get-started-link' href={`${route}`}>
						<a>Get Started</a>
					</Link>
				</Button>
			</Box>
		</Box>
	)
}

export default HomeContent
