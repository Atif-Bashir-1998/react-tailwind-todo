import React from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import {todos} from './data/todos';
// import Todo from './components/Todo';

function App() {
  const addTodo = (todo) => {
    console.log("hello", todo)
  }
  
  return (
    <div>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
