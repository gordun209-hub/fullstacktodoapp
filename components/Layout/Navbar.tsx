import { AppBar, Toolbar, Typography } from '@mui/material'

const Navbar: () => JSX.Element = () => {
	const drawerWidth = 240

	return (
		<AppBar
			data-cy='appbar'
			className='bg-blue-500 shadow-none'
			position='fixed'
			sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
		>
			<Toolbar data-cy='toolbar'>
				<Typography noWrap data-cy='todos' variant='h6' component='div'>
					Todos
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default Navbar
