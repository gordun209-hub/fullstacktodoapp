import { Box } from '@mui/material'
import Image from 'next/image'
import type { FC } from 'react'
import React from 'react'

type Props = {
	path: string
}

const MainHero: FC<Props> = ({ path }) => {
	return (
		<Box className='relative hidden lg:inline flex-[1.3]'>
			<Image src={path} alt='hero' layout='fill' objectFit='cover' />
		</Box>
	)
}

export default MainHero
