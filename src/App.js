import React from 'react'
import Header from './components/Header';
import Todo from './components/Todo';

function App() {
  return (
    <div>
      <Header />
      <Todo task="Learn React" deadline="12-02-2020" status={false} />
    </div>
  );
}

export default App;
