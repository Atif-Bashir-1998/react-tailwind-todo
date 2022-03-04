import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
  const todos = props.todos
  return (
    <div className='bg-gray-200 w-full md:w-1/2 m-auto mt-8 p-8 flex flex-col gap-4 rounded-md shadow-md'>
			{todos.map((item) => {
				return <Todo key={item.id} {...item}></Todo>
			})}
		</div>
  )
}