import type { AxiosError } from 'axios'

type Error = AxiosError<{ error: string }>
export default Error
