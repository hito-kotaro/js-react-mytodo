import React from 'react';
import TodoCommentForm from './TodoCommentForm';
import TodoForm from './TodoForm';
import ActionButton from './ActionButton';

const TodoEditer = () => {
  const msg = 'TodoEdit';
  const buttonMsg = 'Save';
  const edit = true;
  return (
    <div className="bg-green-100 shadow-xl p-1">
      <TodoForm edit={edit} />
      <TodoCommentForm />

      <div className="bg-red-300 flex justify-end">
        <ActionButton buttonMsg={buttonMsg} />
      </div>
    </div>
  );
};

export default TodoEditer;
