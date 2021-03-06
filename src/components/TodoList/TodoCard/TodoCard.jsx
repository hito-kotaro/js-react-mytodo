import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { TiEdit } from 'react-icons/ti';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { CgDetailsMore } from 'react-icons/cg';
import TodoEditForm from '../TodoEditForm/TodoEditForm';

// 渡されたTodo情報を表示するだけ
const TodoCard = (props) => {
  const { todoData, removeTodo, completeTodo, editTodo } = props;
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const onClickEdit = () => {
    setEdit(!edit);
  };

  // 詳細ページに遷移
  const onClickDetail = () => {
    navigate('/detail', { state: { todoData } });
  };

  return (
    <div className="mt-5  shadow-lg border-solid border-4 border-light-blue-500">
      <div
        role="button"
        tabIndex={0}
        className=" z-10"
        onClick={() => completeTodo(todoData.id)}
        onKeyDown={() => completeTodo(todoData.id)}
      >
        <div className="flex ">
          <BiUserCircle style={{ fontSize: '24px' }} />
          {todoData.userId}さん
          <div className={`${todoData.completed ? 'visible' : 'invisible'}`}>
            <BsCheckCircleFill style={{ fontSize: '24px', color: 'green' }} />
          </div>
        </div>
        <div className="text-xl ">{todoData.title}</div>
        <div className=" block  max-h-60 text-sm overflow-ellipsis overflow-hidden">
          {todoData.comment}
        </div>
      </div>
      <div className=" flex justify-end ">
        <div className="inline-flex  ">
          {/* ここをクリックした時に詳細ページに遷移させる。 */}
          <CgDetailsMore onClick={onClickDetail} style={{ fontSize: '32px' }} />
          <TiEdit
            className="ml-2 mr-2"
            onClick={onClickEdit}
            style={{ fontSize: '32px' }}
          />
          <RiCloseCircleLine
            onClick={() => removeTodo(todoData.id)}
            style={{ fontSize: '32px' }}
          />
        </div>
      </div>
      {edit ? (
        <TodoEditForm
          setEdit={setEdit}
          editTodo={editTodo}
          editTodoData={todoData}
        />
      ) : (
        ''
      )}
    </div>
  );
};

TodoCard.propTypes = {
  todoData: PropTypes.shape().isRequired,
  completeTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoCard;
