import useUser from '../../hooks/useUser'

const UserPage: () => JSX.Element = () => {
	const { user } = useUser()
	return <div>{user?.email}</div>
}

export default UserPage
