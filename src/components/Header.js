import React from 'react'

export default function Header() {
  return (
    <>
        <header className='bg-gray-400 flex items-center justify-between p-8'>
            <img src="/logo512.png" width={50}></img>
            <h1 className='text-gray-600 text-3xl'>Project 1 - Todo List</h1>
        </header>
    </>
  )
}
