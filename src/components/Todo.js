import React from 'react'

export default function Todo(props) {
  const {task, deadline, status} = props
	
  return (
    <div className='bg-gray-50 p-4 rounded-md flex items-center justify-between'>
			<h1 className='font-bold'>{task}</h1>
			<small>{deadline}</small>
			<small>{status ? 'Completed' : 'Pending'}</small>
		</div>
  )
}
