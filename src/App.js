import React, { useReducer } from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// import {todos} from './data/todos';
// import Todo from './components/Todo';

const ACTIONS = {
  ADD_TODO: 'add-todo',
  REMOVE_TODO: 'remove-todo',
  TOGGLE_TODO: 'toggle-todo'
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      console.log(action.payload.todo)
      return [...todos, action.payload.todo]
    default:
      break;
  }
}

function App() {
  const addTodo = (todo) => {
    todo = {...todo, id: +new Date(), completed: false}
    dispatch({type: ACTIONS.ADD_TODO, payload: {todo}})
  }

  const [todos, dispatch] = useReducer(reducer, [])
  
  return (
    <div>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
