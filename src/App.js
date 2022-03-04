import React from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import {todos} from './data/todos';
// import Todo from './components/Todo';

function App() {
  return (
    <div>
      <Header />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
