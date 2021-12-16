/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Uuid from 'react-uuid';
import dayjs from 'dayjs';

const TodoForm = (props) => {
  const { addTodo } = props;
  const [input, setInput] = useState('');

  const onChangeTodo = (e) => {
    setInput(e.target.value);
  };

  const onAddBtn = (e) => {
    e.preventDefault();
    const todoData = {
      userId: 1,
      id: Uuid(),
      title: input,
      completed: false,
      registeredDate: dayjs().format('YYYY-MM-DD hh:mm:ss'),
      updatedDate: '',
    };

    addTodo(todoData);
    setInput('');
  };

  return (
    <form onSubmit={onAddBtn}>
      <div className="flex w-full">
        <div className="flex bg-gray-200 mt-5 p-1 w-full">
          <input
            className="border rounded-none w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onChangeTodo}
            value={input}
            type="text"
            placeholder="InputTodo"
          />
          <button
            type="button"
            className="shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 w-1/4 mx-1 rounded-none "
            onClick={onAddBtn}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func,
};

export default TodoForm;
