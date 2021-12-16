/* eslint-disable no-alert */
import { useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { todoListState } from '../../../store/todoListState';

const useFetchData = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [isLoading, setIsLoading] = useState(false);

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
        setTodoList(initTodoList);
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
