import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

const Todos: NextPage = () => {
	const router = useRouter()
	const { type } = router.query

	return (
		<div>
			TYPE : {type} <br />
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eaque odio
			minima natus ducimus soluta quo ut eum, culpa incidunt nam quidem cumque a
			sed assumenda temporibus repudiandae placeat aut deserunt illum magnam
			voluptates neque reprehenderit nulla? Quia nam illum cum cupiditate quod.
			molestiae, quibusdam qui dignissimos obcaecati minus officia maiores. Eius
			ex quam quod exercitationem dolor eveniet maiores. Et distinctio ullam
			iusto ipsum amet delectus dignissimos recusandae praesentium, ratione enim
			maiores dolor ipsa? Tenetur architecto adipisci harum sit, nam aut impedit
			pariatur ratione, nihil reiciendis temporibus at omnis aliquam, error quod
			reprehenderit voluptatum eum ducimus quis. Vitae.
		</div>
	)
}

export default Todos
