import React from 'react'

export default function Todo(props) {
  console.log(props)
  const {id ,task, deadline, completed, toggleTodo} = props
	
  return (
    <div className='bg-gray-50 p-4 rounded-md flex items-center justify-between'>
			<h1 className={`font-bold, ${completed ? 'text-gray-400' : ''}`}>{task}</h1>
			<small>{deadline}</small>
			<span className='flex gap-2'>
        <button className='py-1 px-2 rounded-lg bg-blue-500 text-white' onClick={() => toggleTodo(id)}>toggle</button>
        <button className='py-1 px-2 rounded-lg bg-red-500 text-white'>delete</button>
      </span>
		</div>
  )
}
