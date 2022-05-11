import useUser from '@/utils/useUser'

const UserPage: () => JSX.Element = () => {
	const { user } = useUser()
	return <div>{user?.email}</div>
}

export default UserPage
