import React, { useReducer } from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
// import {todos} from './data/todos';
// import Todo from './components/Todo';

const ACTIONS = {
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
  TOGGLE_TODO: 'toggle-todo'
}

const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      console.log(action.payload.todo)
      return [...todos, action.payload.todo]
    
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) =>{
        if (todo.id === action.payload.id){
          return {...todo, completed: !todo.completed}
        }
        return todo
      })

    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id)
    default:
      break;
  }
}

function App() {
  const addTodo = (todo) => {
    todo = {...todo, id: +new Date(), completed: false}
    dispatch({type: ACTIONS.ADD_TODO, payload: {todo}})
  }

  const toggleTodo = (id) => {
    dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id}})
  }

  const deleteTodo = (id) => {
    dispatch({type: ACTIONS.DELETE_TODO, payload: {id}})
  }

  const [todos, dispatch] = useReducer(reducer, [])
  
  return (
    <div>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
