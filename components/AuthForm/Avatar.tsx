import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar } from '@mui/material'

const AvatarComponent: () => JSX.Element = () => {
	return (
		<Avatar data-cy='avatar' sx={{ m: 1, bgcolor: 'secondary.main' }}>
			<LockOutlinedIcon data-cy='icon' />
		</Avatar>
	)
}
export default AvatarComponent
