import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoCard from './TodoCard';

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const getJson = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const initTodoList = res.data.map((item) => {
      const initTodo = {
        userId: item.userId,
        id: item.id,
        title: item.title,
        comment: '',
        completed: item.completed,
      };
      return initTodo;
    });
    setTodoList(initTodoList);
  };

  // 初回のみ実行
  useEffect(() => {
    getJson();
  }, []);

  const addTodo = (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      toast.error('Todoが空なので登録できません。');

      return;
    }
    setTodoList([todo, ...todoList]);
    toast.success('AddTodo!');
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
    toast.success('removeTodo!');
  };

  const editTodo = (newTodo) => {
    if (!newTodo.title || /^\s*$/.test(newTodo.title)) {
      toast.error('Todoが空なので登録できません。');
      return;
    }
    const newTodoList = todoList.map((item) => {
      if (item.id === newTodo.id) {
        item.title = newTodo.title;
        item.comment = newTodo.comment;
        item.updatedDate = newTodo.updatedDate;
      }
      return item;
    });
    setTodoList(newTodoList);
    toast.success('EditTodo!');
  };

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <Toaster position="top-right" reverseOrder={false} />
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
    </>
  );
};

export default TodoApp;
