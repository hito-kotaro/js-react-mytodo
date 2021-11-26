/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoEditer from './TodoEditer';

function App() {
  return (
    <div className="flex justify-center bg-red-200">
      <div>
        <TodoForm />
        <TodoList />
        <TodoEditer />
      </div>
    </div>
  );
}

export default App;
