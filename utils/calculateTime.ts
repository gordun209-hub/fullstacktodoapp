import { formatDistanceToNowStrict } from 'date-fns'

const calculateTime: (date: Date) => string = date => {
	return formatDistanceToNowStrict(date, { addSuffix: true })
}
export default calculateTime
