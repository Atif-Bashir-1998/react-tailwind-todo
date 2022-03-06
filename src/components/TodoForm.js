import React, { useState } from 'react'

export default function TodoForm({addTodo}) {
	const [newTodo, setNewTodo] = useState({
		task: '',
		deadline: '',
	})

	const handleInput = (e) => {
		const property = e.target.name
		const value = e.target.value

		setNewTodo({...newTodo, [property]: value})
		console.log(e.target.name)
		console.log(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		addTodo(newTodo)
	}

	const canAddTodo = newTodo.task && newTodo.deadline

	return (
		<form className='w-full md:w-1/2 m-auto mt-4 bg-violet-100 p-8 flex flex-col gap-4' onSubmit={handleSubmit}>
			<label className="block">
				<span className="block text-sm font-medium text-slate-700">
					Task
				</span>
				<input type="text" onChange={handleInput} name="task" value={newTodo.task} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
			</label>
			<label className="block">
				<span className="block text-sm font-medium text-slate-700">
					Deadline
				</span>
				<input type="date" onChange={handleInput} name="deadline" value={newTodo.deadline} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-gray-500 focus:ring-gray-500 block w-full rounded-md sm:text-sm focus:ring-1" />
			</label>
			<button className='rounded-full bg-gray-700 p-2 w-32 text-gray-300 m-auto disabled:bg-slate-400' disabled={!canAddTodo}>Add</button>
		</form>
	)
}
