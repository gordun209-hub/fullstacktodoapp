import type {
	FieldError,
	SubmitHandler,
	UseFormHandleSubmit,
	UseFormRegister
} from 'react-hook-form'

export type FormValues = {
	email: string
	password: string
}

export type FormProps = {
	handleSubmit: UseFormHandleSubmit<FormValues>
	register: UseFormRegister<FormValues>
	onSubmit: SubmitHandler<FormValues>
	errors: {
		email?: FieldError | undefined
		password?: FieldError | undefined
	}
}
