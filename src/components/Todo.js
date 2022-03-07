import React from 'react'

export default function Todo(props) {
  console.log(props)
  const {task, deadline, completed} = props
	
  return (
    <div className='bg-gray-50 p-4 rounded-md flex items-center justify-between'>
			<h1 className={`font-bold, ${completed ? 'text-gray-400' : ''}`}>{task}</h1>
			<small>{deadline}</small>
			<small>{completed ? 'Completed' : 'Pending'}</small>
		</div>
  )
}
