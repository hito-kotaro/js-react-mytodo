/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
// import PropTypes from 'prop-types';

const TodoListContext = createContext([]);
export const TodoListProvider = (props) => {
  const { children } = props;
  const test = ['AAA'];
  console.log(props);
  return (
    <>
      <TodoListContext.Provider value={{ test }}>
        {children}
      </TodoListContext.Provider>
    </>
  );
};

export default TodoListContext;
