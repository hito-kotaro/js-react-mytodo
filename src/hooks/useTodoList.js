import { useRecoilState } from 'recoil';
import { todoListState } from '../store/todoListState';

const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const updateTodoList = (initTodoList) => {
    setTodoList(initTodoList);
  };

  return { todoList, updateTodoList };
};

export default useTodoList;
