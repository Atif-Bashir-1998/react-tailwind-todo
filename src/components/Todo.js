import React from 'react'

export default function Todo(props) {
  const {task, deadline, status} = props
	
  return (
    <div className='bg-gray-50 flex p-4 rounded-md'>
			<h1>{task}</h1>
			<small>{deadline}</small>
			<p>{status ? 'Completed' : 'Pending'}</p>
		</div>
  )
}
