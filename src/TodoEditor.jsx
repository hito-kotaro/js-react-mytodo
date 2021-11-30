import React from 'react';
import PropTypes from 'prop-types';
import TodoForm from './TodoForm';

const TodoEditor = (props) => {
  const msg = 'TodoEdit';
  const buttonMsg = 'Save';
  const edit = true;
  const { editTodo, todoData } = props;

  return (
    <div className="bg-green-100 shadow-xl p-1">
      <TodoForm
        edit={edit}
        editTodo={editTodo}
        buttonMsg={buttonMsg}
        todoData={todoData}
      />
    </div>
  );
};

TodoEditor.propTypes = {
  editTodo: PropTypes.func.isRequired,
  todoData: PropTypes.shape().isRequired,
};

export default TodoEditor;
