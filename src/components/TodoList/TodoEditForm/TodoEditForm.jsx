/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const TodoForm = (props) => {
  const { editTodo, editTodoData, setEdit } = props;
  const [input, setInput] = useState(editTodoData.title);
  const [inputComment, setInputComment] = useState(editTodoData?.comment ?? '');

  const onChangeTodo = (e) => {
    setInput(e.target.value);
  };

  const onChangeComment = (e) => {
    setInputComment(e.target.value);
  };

  const onEditBtn = (e) => {
    e.preventDefault();
    const newTodoData = {
      userId: editTodoData.userId,
      id: editTodoData.id,
      title: input,
      comment: inputComment,
      completed: false,
      refisterdDate: editTodoData.registeredDate,
      updatedDate: dayjs().format('YYYY-MM-DD hh:mm:ss'),
    };
    editTodo(newTodoData);
    setEdit(false);
    setInput('');
    setInputComment('');
  };

  return (
    <form onSubmit={onEditBtn}>
      <div className="flex w-full">
        <div className="w-full">
          <div className=" w-full mt-5 p-1 ">
            <input
              className="border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={onChangeTodo}
              value={input}
              type="text"
              placeholder="InputTodo"
            />
            <textarea
              onChange={onChangeComment}
              value={inputComment}
              className="h-40 resize-none mt-2 border rounded-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
              placeholder="Input Comment"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="shadow-lg px-2 py-1  bg-blue-400 text-lg text-white font-semibold rounded  hover:bg-blue-500 w-1/4 mx-1 rounded-none "
              onClick={onEditBtn}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

TodoForm.propTypes = {
  editTodo: PropTypes.func,
  setEdit: PropTypes.func,
  editTodoData: PropTypes.shape(),
};

export default TodoForm;
