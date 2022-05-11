import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Todo: NextPage = () => {
	const router = useRouter()
	const { id } = router.query
	return <div>Todo : {id}</div>
}

export default Todo
