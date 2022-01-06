/* eslint-disable no-alert */
import { useState, useCallback } from 'react';
import axios from 'axios';
import useStateCtl from './useTodoList';

const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { todoList, updateTodoList } = useStateCtl();

  const fetch = useCallback(async () => {
    if (todoList.length === 0) {
      setIsLoading(true);
      try {
        const result = await axios.get(
          'https://jsonplaceholder.typicode.com/todos',
        );

        const initTodoList = result.data.map((item) => {
          const initTodo = {
            userId: item.userId,
            id: item.id,
            title: item.title,
            comment: '',
            completed: item.completed,
          };
          return initTodo;
        });
        updateTodoList(initTodoList);
      } catch (error) {
        alert('エラーが発生しました');
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  return { isLoading, fetch };
};

export default useFetchData;
