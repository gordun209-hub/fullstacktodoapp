const convertPriority: (priority: number) => string = priority => {
	switch (priority) {
		case 1:
			return 'Low'
		case 2:
			return 'Medium'
		case 3:
			return 'High'
		default:
			return 'Low'
	}
}
export default convertPriority
