import React from 'react';
import TodoCard from './TodoCard';

const TodoList = () => {
  const msg = 'TodoList';
  return (
    <div className="my-5 bg-yellow-200 h-auto">
      <div className="bg-blue-200 text-2xl font-mono">{msg}</div>
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </div>
  );
};

export default TodoList;
