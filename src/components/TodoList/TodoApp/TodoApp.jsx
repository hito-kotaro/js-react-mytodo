import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import toast, { Toaster } from 'react-hot-toast';
import Uuid from 'react-uuid';
import dayjs from 'dayjs';
import Header from '../../share/Header';
import TodoForm from '../TodoForm/TodoForm';
import TodoCard from '../TodoCard/TodoCard';
import useFetchData from './useFetchData';
import { todoListState } from '../../../store/todoListState';

const TodoApp = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const { isLoading, fetch } = useFetchData();

  // 初回データ取得
  useEffect(() => {
    fetch();
  }, []);

  // Todoの追加
  const addTodo = (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      toast.error('Todoが空なので登録できません。');

      return;
    }
    setTodoList([todo, ...todoList]);
    toast.success('AddTodo!');
  };

  // Todoの完了
  const completeTodo = (targetId) => {
    const newTodoList = todoList.map((item) => {
      if (item.id === targetId) {
        const newTodo = {
          userId: item.userId,
          id: Uuid(),
          title: item.title,
          comment: item.comment,
          completed: !item.completed,
          registeredDate: item.registeredDate,
          updatedDate: dayjs().format('YYYY-MM-DD hh:mm:ss'),
        };
        if (newTodo.completed) toast.success('Complete!');
        return newTodo;
      }
      return item;
    });
    setTodoList(newTodoList);
  };

  // Todoの削除
  const removeTodo = (targetId) => {
    const newTodoList = todoList.filter((item) => item.id !== targetId);
    setTodoList(newTodoList);
    toast.success('removeTodo!');
  };

  // Todoの編集
  const editTodo = (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      toast.error('Todoが空なので登録できません。');
      return;
    }
    const newTodoList = todoList.map((item) => {
      if (item.id === todo.id) {
        const newTodo = {
          userId: todo.userId,
          id: Uuid(),
          title: todo.title,
          comment: todo.comment,
          completed: todo.completed,
          registeredDate: todo.registeredDate,
          updatedDate: dayjs().format('YYYY-MM-DD hh:mm:ss'),
        };
        return newTodo;
      }
      return item;
    });
    setTodoList(newTodoList);
    toast.success('EditTodo!');
  };

  return (
    <>
      {isLoading ? (
        <p>通信中</p>
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
};

export default TodoApp;
