import React from 'react'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FormErorr: ({ errors }) => JSX.Element = ({ errors }) => {
	return (
		errors && (
			<span className='text-red-500 text-sm' role='alert'>
				{errors.message}
			</span>
		)
	)
}

export default FormErorr
