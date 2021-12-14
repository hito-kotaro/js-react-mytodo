import { useState, useCallback } from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [fetchTodoList, setFetchTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetch = useCallback(async () => {
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
      setFetchTodoList(initTodoList);
    } catch (error) {
      alert('エラーが発生しました');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { fetchTodoList, isLoading, fetch };
};

export default useFetchData;
