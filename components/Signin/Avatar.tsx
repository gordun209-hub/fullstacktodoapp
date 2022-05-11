import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar } from '@mui/material'

const AvatarComponent: () => JSX.Element = () => {
	return (
		<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
			<LockOutlinedIcon />
		</Avatar>
	)
}
export default AvatarComponent
