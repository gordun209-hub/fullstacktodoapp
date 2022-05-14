import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const MainHero: () => JSX.Element = () => {
	return (
		<Box className='relative hidden lg:inline flex-[1.3] overflow-hidden'>
			<Image src='/bg2.jpg' alt='hero' layout='fill' objectFit='cover' />
		</Box>
	)
}

export default MainHero
