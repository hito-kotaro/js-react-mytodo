import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoCard from './TodoCard';

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const msg = 'TodoList';

  // Promiseの使い方を確認してから
  // const test = axios.get('https://jsonplaceholder.typicode.com/todos');

  const addTodo = (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }
    setTodoList([...todoList, todo]);
  };

  const completeTodo = (targetId) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === targetId) {
        item.completed = !item.completed;
        if (item.completed) toast.success('Complete!');
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  const removeTodo = (targetId) => {
    const newTodoList = todoList.filter((item) => item.id !== targetId);
    setTodoList(newTodoList);
  };

  const editTodo = (newTodo) => {
    if (!newTodo.title || /^\s*$/.test(newTodo.title)) {
      alert('Todoが空なので登録できません');
      return;
    }
    const newTodoList = todoList.map((item) => {
      if (item.id === newTodo.id) {
        item.title = newTodo.title;
        item.comment = newTodo.comment;
      }
      return item;
    });
    setTodoList(newTodoList);
  };
  return (
    <div className="flex justify-center">
      <Toaster position="top-left" reverseOrder={false} />
      <div className=" w-3/4">
        <TodoForm addTodo={addTodo} />
        <div className="my-5  ">
          {todoList.map((todoData) => (
            <TodoCard
              key={todoData.id}
              todoData={todoData}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              editTodo={editTodo}
              addTodo={addTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
