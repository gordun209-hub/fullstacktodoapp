import React from 'react'
import type { FieldError } from 'react-hook-form'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FormError: (props: {
	errors: FieldError | undefined
}) => JSX.Element | null = ({ errors }) => {
	return errors ? (
		<span
			className='text-red-500 text-sm'
			data-testid='alert'
			data-cy='error'
			role='alert'
		>
			{errors?.message}
		</span>
	) : null
}

export default FormError
