import { AppBar, Toolbar, Typography } from '@mui/material'
import { useRouter } from 'next/router'

const Navbar: () => JSX.Element = () => {
	const drawerWidth = 240
	const router = useRouter()
	const { pathname } = router

	return (
		<AppBar
			position='fixed'
			sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
		>
			<Toolbar>
				<Typography noWrap variant='h6' component='div'>
					Todos
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
