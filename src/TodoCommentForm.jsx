/* eslint-disable arrow-body-style */
import React from 'react';

const TodoCommentForm = () => {
  return (
    <textarea
      className="resize-none mt-2 border rounded-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
      placeholder="Input Comment"
    />
  );
};

export default TodoCommentForm;
