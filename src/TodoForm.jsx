/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';

const TodoForm = (props) => {
  const { edit } = props;
  const buttonMsg = 'Add';

  return (
    <form>
      <div className="flex w-96">
        {edit ? (
          <input
            className="border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="InputTodo"
          />
        ) : (
          <div className="flex bg-red-300 w-full mt-5 p-1 ">
            <input
              className="border rounded-none w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="InputTodo"
            />
            <ActionButton buttonMsg={buttonMsg} />
          </div>
        )}
      </div>
    </form>
  );
};

TodoForm.propTypes = {
  edit: PropTypes.bool,
};

export default TodoForm;
