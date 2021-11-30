/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import TodoCard from './TodoCard';

const TodoList = (props) => {
  const { todoList } = props;
  const msg = 'TodoList';

  return (
    <div className="my-5 bg-yellow-200 h-auto">
      <div className="bg-blue-200 text-2xl font-mono">{msg}</div>
      {todoList.map((todoData) => (
        <TodoCard key={todoData.id} todoData={todoData} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TodoList;
