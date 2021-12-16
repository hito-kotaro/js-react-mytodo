import { useRecoilState } from 'recoil';
import { todoListState } from '../store/todoListState';

const useStateCtl = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const updateTodoList = (initTodoList) => {
    setTodoList(initTodoList);
  };

  return { todoList, updateTodoList };
};

export default useStateCtl;
