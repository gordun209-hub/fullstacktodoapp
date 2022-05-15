/* eslint-disable react/no-unescaped-entities */
import GitHubIcon from '@mui/icons-material/GitHub'
import { Box, Button, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

import useUser from '@/hooks/useUser'

import Logo from '../Logo'

const HomeContent: () => JSX.Element = () => {
	const { user } = useUser()
	const route = user?.id ? '/user' : '/signup'
	return (
		<Box data-cy='homeContent' className='px-10'>
			<Logo size='lg' />

			<Box className='mt-8' data-cy='landingP'>
				<Typography className='text-lg font-light text-zinc-500'>
					This is a minimal todo app built with Next.js and Material-UI. Todo
					app has never been so easy to use. It's super simple to add a new
					task, mark it as completed, and delete it. If you have any questions
					or feedback, please feel free to contact us. And please don't forget
					to star us on GitHub. 🤩
				</Typography>

				<Box className='flex gap-3 mt-8'>
					<Button
						className='bg-blue-500 hover:bg-blue-400'
						data-cy='get-started-button'
						variant='contained'
						color='secondary'
					>
						<Link
							data-cy='github-link'
							href='https://github.com/gordun209-hub/fullstacktodoapp'
							target='_blank'
						>
							<a className='flex items-center'>
								<GitHubIcon className='mr-2' />
								Github
							</a>
						</Link>
					</Button>
					<Button
						className='border-blue-500 text-blue-500 hover:bg-blue-100 hover:border-blue-400'
						data-cy='get-started-button'
						variant='outlined'
						color='secondary'
					>
						<Link href={`${route}`}>
							<a data-cy='get-started-link'>Get Started</a>
						</Link>
					</Button>
				</Box>
			</Box>
		</Box>
	)
}

export default HomeContent
