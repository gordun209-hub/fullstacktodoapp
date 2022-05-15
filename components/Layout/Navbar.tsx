import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { AppBar, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar: () => JSX.Element = () => {
	const drawerWidth = 240

	const router = useRouter()
	const { type } = router.query as { type: string }

	return (
		<AppBar
			data-cy='appbar'
			className='bg-white shadow-none border-b-[1px]'
			position='fixed'
			sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
		>
			<Toolbar data-cy='toolbar'>
				<Typography
					noWrap
					className='w-full text-blue-500 flex items-center justify-between'
					data-cy='todos'
					variant='h6'
					component='div'
				>
					{type ? type.toUpperCase() : 'USER'}
					<Link passHref href='/user'>
						<a>
							<AccountCircleIcon className='text-4xl cursor-pointer' />
						</a>
					</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
